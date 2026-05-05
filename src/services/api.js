import { authService } from './auth';

const BASE_URL = 'https://api.freeapi.app/api/v1/users';

const handleResponse = async (response) => {
  if (response.status === 401) {
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
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, config);
      return await handleResponse(response);
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
  }
};
