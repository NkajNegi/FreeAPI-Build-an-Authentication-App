import { authService } from '../services/auth.js';
import { apiService } from '../services/api.js';
import { loginView, registerView, profileView } from './views.js';
import { toast, loadingSpinner } from './components.js';

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
    
    if (!isAuthenticated && (hash === '#profile' || hash === '#change-password')) {
      window.location.hash = '#login';
      return;
    }

    if (hash === '#login') {
      this.renderLogin();
    } else if (hash === '#register') {
      this.renderRegister();
    } else if (hash === '#forgot-password') {
      this.renderForgotPassword();
    } else if (hash.startsWith('#reset-password/')) {
      this.renderResetPassword();
    } else if (hash.startsWith('#verify-email/')) {
      this.renderVerifyEmail();
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

  renderForgotPassword() {
    app.innerHTML = forgotPasswordView;
    this.setupForgotPasswordForm();
  },

  renderResetPassword() {
    app.innerHTML = resetPasswordView;
    this.setupResetPasswordForm();
  },

  async renderVerifyEmail() {
    const token = window.location.hash.split('/').pop();
    try {
      app.innerHTML = `
        <div class="min-h-screen flex items-center justify-center bg-dim-950">
          <div class="text-accent-primary flex items-center space-x-4">
            <div class="scale-150">${loadingSpinner}</div>
            <span class="text-2xl font-black tracking-tight text-white">Verifying Email...</span>
          </div>
        </div>
      `;
      const response = await apiService.verifyEmail(token);
      app.innerHTML = verificationView(true, response.message || 'Your email has been verified successfully!');
    } catch (error) {
      app.innerHTML = verificationView(false, error || 'Verification failed. The token may be expired or invalid.');
    }
  },

  async renderProfile() {
    const userData = authService.getUserData();
    if (userData) {
      app.innerHTML = profileView(userData);
      this.setupLogout();
      this.setupUpdateAccountForm();
      this.setupChangePasswordForm();
      this.setupAvatarUpload();
      this.setupResendVerification();
    } else {
      // Fetch user data if not in storage
      try {
        app.innerHTML = `
          <div class="min-h-screen flex items-center justify-center bg-dim-950">
            <div class="text-accent-primary flex items-center space-x-4">
              <div class="scale-150">${loadingSpinner}</div>
              <span class="text-2xl font-black tracking-tight text-white">Syncing Profile...</span>
            </div>
          </div>
        `;
        
        const response = await apiService.getCurrentUser();
        const user = response.data.user || response.data;
        authService.saveUserData(user);
        app.innerHTML = profileView(user);
        this.setupLogout();
        this.setupUpdateAccountForm();
        this.setupChangePasswordForm();
        this.setupAvatarUpload();
        this.setupResendVerification();
      } catch (error) {
        toast.show('Failed to fetch profile: ' + error, 'error');
        authService.removeToken();
        window.location.hash = '#login';
      }
    }
  },

  setupResendVerification() {
    const btn = document.getElementById('resend-verification-btn');
    if (!btn) return;

    btn.addEventListener('click', async () => {
      const originalText = btn.innerHTML;
      try {
        btn.disabled = true;
        btn.innerHTML = 'Sending...';
        await apiService.resendEmailVerification();
        toast.show('Verification email sent! Check your inbox.', 'success');
      } catch (error) {
        toast.show('Failed to resend: ' + error, 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
      }
    });
  },

  setupAvatarUpload() {
    const input = document.getElementById('avatar-input');
    const preview = document.getElementById('avatar-preview');
    
    input.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      // Local preview
      const reader = new FileReader();
      reader.onload = (e) => preview.src = e.target.result;
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('avatar', file);

      try {
        toast.show('Uploading avatar...', 'success');
        const response = await apiService.updateAvatar(formData);
        const updatedUser = response.data;
        authService.saveUserData(updatedUser);
        toast.show('Avatar updated successfully!', 'success');
      } catch (error) {
        toast.show('Avatar upload failed: ' + error, 'error');
      }
    });
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
        authService.saveRefreshToken(response.data.refreshToken);
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

  setupForgotPasswordForm() {
    const form = document.getElementById('forgot-password-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = form.email.value;
      const btn = document.getElementById('submit-btn');
      const btnText = document.getElementById('btn-text');

      try {
        btn.disabled = true;
        btnText.innerHTML = loadingSpinner + ' Sending...';
        await apiService.forgotPassword(email);
        toast.show('Password reset link sent to your email!', 'success');
        window.location.hash = '#login';
      } catch (error) {
        toast.show('Failed to send reset link: ' + error, 'error');
      } finally {
        btn.disabled = false;
        btnText.innerHTML = 'Send Reset Link';
      }
    });
  },

  setupResetPasswordForm() {
    const form = document.getElementById('reset-password-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const newPassword = form.newPassword.value;
      const token = window.location.hash.split('/').pop();
      const btn = document.getElementById('submit-btn');
      const btnText = document.getElementById('btn-text');

      try {
        btn.disabled = true;
        btnText.innerHTML = loadingSpinner + ' Resetting...';
        await apiService.resetPassword(token, newPassword);
        toast.show('Password reset successful! You can now login.', 'success');
        window.location.hash = '#login';
      } catch (error) {
        toast.show('Password reset failed: ' + error, 'error');
      } finally {
        btn.disabled = false;
        btnText.innerHTML = 'Reset Password';
      }
    });
  },

  setupUpdateAccountForm() {
    const form = document.getElementById('update-account-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const btn = document.getElementById('update-account-btn');
      const originalText = btn.innerHTML;

      try {
        btn.disabled = true;
        btn.innerHTML = loadingSpinner + ' Saving...';
        const response = await apiService.updateAccount(data);
        const updatedUser = response.data;
        authService.saveUserData(updatedUser);
        toast.show('Account details updated successfully!', 'success');
        this.renderProfile(); // Re-render to show updated data
      } catch (error) {
        toast.show('Update failed: ' + error, 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
      }
    });
  },

  setupChangePasswordForm() {
    const form = document.getElementById('change-password-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const btn = document.getElementById('change-password-btn');
      const originalText = btn.innerHTML;

      try {
        btn.disabled = true;
        btn.innerHTML = loadingSpinner + ' Updating...';
        await apiService.changePassword(data);
        toast.show('Password updated successfully!', 'success');
        form.reset();
      } catch (error) {
        toast.show('Password update failed: ' + error, 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
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
