import { authService } from './auth.js';

const BASE_URL = 'https://api.freeapi.app/api/v1/users';

const handleResponse = async (response, originalRequest) => {
  if (response.status === 401) {
    // If we are already trying to refresh or login, don't retry to avoid infinite loops
    if (originalRequest.endpoint === '/refresh-token' || originalRequest.endpoint === '/login') {
      authService.removeToken();
      window.location.hash = '#login';
      return Promise.reject('Authentication failed. Please login again.');
    }

    const refreshToken = authService.getRefreshToken();
    if (refreshToken && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshData = await apiService.refreshToken();
        const { accessToken, refreshToken: newRefreshToken } = refreshData.data;
        authService.saveToken(accessToken);
        authService.saveRefreshToken(newRefreshToken);
        
        // Re-attempt original request with new token
        const options = originalRequest.options || {};
        options.headers = { ...options.headers, 'Authorization': `Bearer ${accessToken}` };
        options._retry = true;
        return await apiService.request(originalRequest.endpoint, options);
      } catch (refreshError) {
        authService.removeToken();
        window.location.hash = '#login';
        return Promise.reject('Session expired. Please login again.');
      }
    }
    
    authService.removeToken();
    window.location.hash = '#login';
    return Promise.reject('Session expired. Please login again.');
  }

  const data = await response.json();
  if (!response.ok) {
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return data;
};

export const apiService = {
  async request(endpoint, options = {}) {
    const token = authService.getToken();
    const headers = { ...options.headers };

    // Standardize Content-Type handling
    if (headers['Content-Type'] === undefined) {
      delete headers['Content-Type'];
    } else if (!headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
      ...options,
      headers,
      credentials: 'include',
    };

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, config);
      return await handleResponse(response, { endpoint, options: config, _retry: options._retry });
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  },

  register(userData) {
    return this.request('/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  login(credentials) {
    return this.request('/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  getCurrentUser() {
    return this.request('/current-user', {
      method: 'GET',
    });
  },

  logout() {
    return this.request('/logout', {
      method: 'POST',
    });
  },

  refreshToken() {
    const refreshToken = authService.getRefreshToken();
    return this.request('/refresh-token', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
  },

  verifyEmail(token) {
    return this.request(`/verify-email/${token}`, {
      method: 'GET',
    });
  },

  resendEmailVerification() {
    return this.request('/resend-email-verification', {
      method: 'POST',
    });
  },

  changePassword(passwords) {
    return this.request('/change-password', {
      method: 'POST',
      body: JSON.stringify(passwords),
    });
  },

  forgotPassword(email) {
    return this.request('/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  resetPassword(token, newPassword) {
    return this.request(`/reset-password/${token}`, {
      method: 'POST',
      body: JSON.stringify({ newPassword }),
    });
  },

  updateAccount(data) {
    return this.request('/update-account', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  updateAvatar(formData) {
    return this.request('/avatar', {
      method: 'PATCH',
      body: formData,
      headers: {
        'Content-Type': undefined 
      }
    });
  }
};
