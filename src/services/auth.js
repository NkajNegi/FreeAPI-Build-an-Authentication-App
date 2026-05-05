const TOKEN_KEY = 'accessToken';

export const authService = {
  saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('userData'); // Cleanup local user cache too
  },

  saveUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  },

  getUserData() {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
  },

  isAuthenticated() {
    return !!this.getToken();
  }
};
