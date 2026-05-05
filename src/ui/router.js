import { authService } from '../services/auth';
import { apiService } from '../services/api';
import { loginView, registerView, profileView } from './views';
import { toast, loadingSpinner } from './components';

const app = document.getElementById('app');

export const router = {
  async init() {
    const token = authService.getToken();
    if (token) {
      try {
        const response = await apiService.getCurrentUser();
        const user = response.data.user || response.data;
        authService.saveUserData(user);
      } catch (error) {
        // If API fails (e.g. 401), apiService.request already handles cleanup
        // but we ensure we are on the login page
        window.location.hash = '#login';
      }
    }
    this.navigate();
  },

  async navigate() {
    const hash = window.location.hash || '#login';
    
    // Route Protection
    const isAuthenticated = authService.isAuthenticated();
    
    if (isAuthenticated && (hash === '#login' || hash === '#register')) {
      window.location.hash = '#profile';
      return;
    }
    
    if (!isAuthenticated && hash === '#profile') {
      window.location.hash = '#login';
      return;
    }

    if (hash === '#login') {
      this.renderLogin();
    } else if (hash === '#register') {
      this.renderRegister();
    } else if (hash === '#profile') {
      this.renderProfile();
    }
  },

  renderLogin() {
    app.innerHTML = loginView;
    this.setupLoginForm();
    this.setupPasswordToggle();
  },

  renderRegister() {
    app.innerHTML = registerView;
    this.setupRegisterForm();
    this.setupPasswordToggle();
  },

  async renderProfile() {
    const userData = authService.getUserData();
    if (userData) {
      app.innerHTML = profileView(userData);
      this.setupLogout();
    } else {
      // Fetch user data if not in storage
      try {
        app.innerHTML = `
          <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div class="text-indigo-600">
              ${loadingSpinner} <span class="text-xl font-medium">Loading profile...</span>
            </div>
          </div>
        `;
        
        const response = await apiService.getCurrentUser();
        // FreeAPI returns { data: { user: { ... } } } for current-user
        const user = response.data.user || response.data;
        authService.saveUserData(user);
        app.innerHTML = profileView(user);
        this.setupLogout();
      } catch (error) {
        toast.show('Failed to fetch profile: ' + error, 'error');
        authService.removeToken();
        window.location.hash = '#login';
      }
    }
  },

  setupLoginForm() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      const btn = document.getElementById('submit-btn');
      const btnText = document.getElementById('btn-text');
      
      try {
        btn.disabled = true;
        btnText.innerHTML = loadingSpinner + ' Authenticating...';
        
        const response = await apiService.login(data);
        authService.saveToken(response.data.accessToken);
        authService.saveUserData(response.data.user);
        
        toast.show(`Welcome back, ${response.data.user.username}!`, 'success');
        window.location.hash = '#profile';
      } catch (error) {
        toast.show('Login failed: ' + error, 'error');
      } finally {
        btn.disabled = false;
        btnText.innerHTML = 'Sign in';
      }
    });
  },

  setupRegisterForm() {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Removed hardcoded 'ADMIN' role. FreeAPI defaults to 'USER' if not provided
      if (!data.role) data.role = 'USER';
      
      const btn = document.getElementById('submit-btn');
      const btnText = document.getElementById('btn-text');
      
      try {
        btn.disabled = true;
        btnText.innerHTML = loadingSpinner + ' Creating account...';
        
        await apiService.register(data);
        toast.show('Account created successfully! You can now sign in.', 'success');
        window.location.hash = '#login';
      } catch (error) {
        toast.show('Registration failed: ' + error, 'error');
      } finally {
        btn.disabled = false;
        btnText.innerHTML = 'Register';
      }
    });
  },

  setupLogout() {
    const btn = document.getElementById('logout-btn');
    btn.addEventListener('click', async () => {
      try {
        await apiService.logout();
        authService.removeToken();
        toast.show('Logged out successfully');
        window.location.hash = '#login';
      } catch (error) {
        toast.show('Logout failed: ' + error, 'error');
        // Still clear local state on error
        authService.removeToken();
        window.location.hash = '#login';
      }
    });
  },

  setupPasswordToggle() {
    const toggleBtn = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    const eyeOffIcon = document.getElementById('eye-off-icon');

    // Initial state: hide eye-icon (showing eye-off means it's a password)
    eyeIcon.classList.add('hidden');

    toggleBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      
      if (isPassword) {
        eyeIcon.classList.remove('hidden');
        eyeOffIcon.classList.add('hidden');
      } else {
        eyeIcon.classList.add('hidden');
        eyeOffIcon.classList.remove('hidden');
      }
    });
  }
};
