export const loginView = `
  <div class="min-h-screen flex items-center justify-center bg-dim-950 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-dim-900 via-dim-950 to-dim-950 px-4 py-12">
    <div class="max-w-md w-full space-y-8 p-10 glass rounded-3xl shadow-2xl transform transition-all duration-500">
      <div class="text-center">
        <div class="mx-auto h-16 w-16 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent-primary/20 rotate-3">
           <svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
           </svg>
        </div>
        <h2 class="text-4xl font-black text-white tracking-tight mb-2">
          Welcome Back
        </h2>
        <p class="text-dim-400 font-medium">
          New here? 
          <a href="#register" class="text-accent-primary hover:text-accent-secondary transition-colors underline decoration-2 underline-offset-4 decoration-accent-primary/30">
            Create an account
          </a>
        </p>
      </div>
      <form id="login-form" class="mt-8 space-y-6">
        <div class="space-y-5">
          <div>
            <label for="username" class="block text-xs font-bold text-dim-300 uppercase tracking-widest mb-2 ml-1">Username</label>
            <input id="username" name="username" type="text" required 
              class="appearance-none block w-full px-4 py-4 bg-dim-800/50 border border-dim-700/50 placeholder-dim-500 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary/50 transition-all sm:text-sm" 
              placeholder="Your username">
          </div>
          <div>
            <div class="flex justify-between items-center mb-2 ml-1">
              <label for="password" class="block text-xs font-bold text-dim-300 uppercase tracking-widest">Password</label>
              <a href="#forgot-password" class="text-xs font-bold text-accent-primary hover:text-accent-secondary transition-colors">Forgot?</a>
            </div>
            <div class="relative">
              <input id="password" name="password" type="password" required 
                class="appearance-none block w-full px-4 py-4 bg-dim-800/50 border border-dim-700/50 placeholder-dim-500 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary/50 transition-all sm:text-sm" 
                placeholder="••••••••">
              <button type="button" id="toggle-password" class="absolute inset-y-0 right-0 pr-4 flex items-center text-dim-500 hover:text-accent-primary transition-colors">
                <svg id="eye-off-icon" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
                <svg id="eye-icon" class="h-5 w-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <button type="submit" id="submit-btn" 
            class="group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-bold rounded-2xl text-white bg-gradient-to-r from-accent-primary to-accent-secondary hover:shadow-lg hover:shadow-accent-primary/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dim-900 focus:ring-accent-primary transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
            <span id="btn-text">Sign In</span>
          </button>
        </div>
      </form>
    </div>
  </div>
`;

export const registerView = `
  <div class="min-h-screen flex items-center justify-center bg-dim-950 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-dim-900 via-dim-950 to-dim-950 px-4 py-12">
    <div class="max-w-md w-full space-y-8 p-10 glass rounded-3xl shadow-2xl transform transition-all duration-500">
      <div class="text-center">
        <div class="mx-auto h-16 w-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 -rotate-3">
           <svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
           </svg>
        </div>
        <h2 class="text-4xl font-black text-white tracking-tight mb-2">
          Join Us
        </h2>
        <p class="text-dim-400 font-medium">
          Already have an account? 
          <a href="#login" class="text-emerald-500 hover:text-emerald-400 transition-colors underline decoration-2 underline-offset-4 decoration-emerald-500/30">
            Sign in
          </a>
        </p>
      </div>
      <form id="register-form" class="mt-8 space-y-6">
        <div class="space-y-5">
          <div>
            <label for="email" class="block text-xs font-bold text-dim-300 uppercase tracking-widest mb-2 ml-1">Email address</label>
            <input id="email" name="email" type="email" required 
              class="appearance-none block w-full px-4 py-4 bg-dim-800/50 border border-dim-700/50 placeholder-dim-500 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all sm:text-sm" 
              placeholder="you@example.com">
          </div>
          <div>
            <label for="username" class="block text-xs font-bold text-dim-300 uppercase tracking-widest mb-2 ml-1">Username</label>
            <input id="username" name="username" type="text" required 
              class="appearance-none block w-full px-4 py-4 bg-dim-800/50 border border-dim-700/50 placeholder-dim-500 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all sm:text-sm" 
              placeholder="Choose a username">
          </div>
          <div>
            <label for="password" class="block text-xs font-bold text-dim-300 uppercase tracking-widest mb-2 ml-1">Password</label>
            <div class="relative">
              <input id="password" name="password" type="password" required 
                class="appearance-none block w-full px-4 py-4 bg-dim-800/50 border border-dim-700/50 placeholder-dim-500 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all sm:text-sm" 
                placeholder="••••••••">
              <button type="button" id="toggle-password" class="absolute inset-y-0 right-0 pr-4 flex items-center text-dim-500 hover:text-emerald-500 transition-colors">
                <svg id="eye-off-icon" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
                <svg id="eye-icon" class="h-5 w-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <button type="submit" id="submit-btn" 
            class="group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-bold rounded-2xl text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-lg hover:shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dim-900 focus:ring-emerald-500 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
            <span id="btn-text">Create Account</span>
          </button>
        </div>
      </form>
    </div>
  </div>
`;

export const forgotPasswordView = `
  <div class="min-h-screen flex items-center justify-center bg-dim-950 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-dim-900 via-dim-950 to-dim-950 px-4 py-12">
    <div class="max-w-md w-full space-y-8 p-10 glass rounded-3xl shadow-2xl">
      <div class="text-center">
        <div class="mx-auto h-16 w-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
           <svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
           </svg>
        </div>
        <h2 class="text-4xl font-black text-white tracking-tight mb-2">Reset Password</h2>
        <p class="text-dim-400 font-medium">Enter your email and we'll send you a link to reset your password.</p>
      </div>
      <form id="forgot-password-form" class="mt-8 space-y-6">
        <div>
          <label for="email" class="block text-xs font-bold text-dim-300 uppercase tracking-widest mb-2 ml-1">Email address</label>
          <input id="email" name="email" type="email" required 
            class="appearance-none block w-full px-4 py-4 bg-dim-800/50 border border-dim-700/50 placeholder-dim-500 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all sm:text-sm" 
            placeholder="you@example.com">
        </div>
        <div>
          <button type="submit" id="submit-btn" 
            class="group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-bold rounded-2xl text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-amber-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dim-900 focus:ring-amber-500 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
            <span id="btn-text">Send Reset Link</span>
          </button>
        </div>
        <div class="text-center">
          <a href="#login" class="text-sm font-bold text-dim-400 hover:text-white transition-colors">Back to Sign In</a>
        </div>
      </form>
    </div>
  </div>
`;

export const resetPasswordView = `
  <div class="min-h-screen flex items-center justify-center bg-dim-950 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-dim-900 via-dim-950 to-dim-950 px-4 py-12">
    <div class="max-w-md w-full space-y-8 p-10 glass rounded-3xl shadow-2xl">
      <div class="text-center">
        <div class="mx-auto h-16 w-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
           <svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
           </svg>
        </div>
        <h2 class="text-4xl font-black text-white tracking-tight mb-2">New Password</h2>
        <p class="text-dim-400 font-medium">Please enter your new password below.</p>
      </div>
      <form id="reset-password-form" class="mt-8 space-y-6">
        <div>
          <label for="newPassword" class="block text-xs font-bold text-dim-300 uppercase tracking-widest mb-2 ml-1">New Password</label>
          <input id="newPassword" name="newPassword" type="password" required 
            class="appearance-none block w-full px-4 py-4 bg-dim-800/50 border border-dim-700/50 placeholder-dim-500 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all sm:text-sm" 
            placeholder="••••••••">
        </div>
        <div>
          <button type="submit" id="submit-btn" 
            class="group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-bold rounded-2xl text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dim-900 focus:ring-amber-500 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
            <span id="btn-text">Reset Password</span>
          </button>
        </div>
      </form>
    </div>
  </div>
`;

export const verificationView = (success, message) => `
  <div class="min-h-screen flex items-center justify-center bg-dim-950 px-4 py-12">
    <div class="max-w-md w-full space-y-8 p-10 glass rounded-3xl shadow-2xl text-center">
      <div class="mx-auto h-20 w-20 ${success ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'} rounded-full flex items-center justify-center mb-6 border border-current/20">
         <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            ${success 
              ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />'
              : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'}
         </svg>
      </div>
      <h2 class="text-3xl font-black text-white tracking-tight">${success ? 'Email Verified' : 'Verification Failed'}</h2>
      <p class="mt-4 text-dim-400 font-medium">${message}</p>
      <div class="mt-8">
        <a href="#login" class="inline-flex items-center px-8 py-3 rounded-2xl text-sm font-bold text-white bg-accent-primary hover:bg-accent-secondary transition-all transform active:scale-95 shadow-lg shadow-accent-primary/20">
          Go to Sign In
        </a>
      </div>
    </div>
  </div>
`;

export const profileView = (user) => `
  <div class="min-h-screen bg-dim-950 text-dim-200 selection:bg-accent-primary/30 pb-20">
    <nav class="glass sticky top-0 z-50 border-b border-white/5">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20 items-center">
          <div class="flex items-center space-x-3">
            <div class="h-10 w-10 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center shadow-lg shadow-accent-primary/20">
               <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
               </svg>
            </div>
            <h1 class="text-2xl font-black text-white tracking-tighter">SecureAuth</h1>
          </div>
          <div class="flex items-center space-x-6">
            <div class="hidden md:flex flex-col items-end">
              <span class="text-xs font-bold text-dim-400 uppercase tracking-widest">Active Session</span>
              <span class="text-sm font-semibold text-white">${user.username}</span>
            </div>
            <button id="logout-btn" class="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-dim-800 border border-white/5 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 transition-all transform active:scale-95">
              <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Sidebar Info -->
        <div class="lg:col-span-1 space-y-8">
          <div class="glass-card p-8 rounded-3xl border border-white/5 text-center relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="relative inline-block group/avatar">
                <div class="h-24 w-24 bg-gradient-to-br from-dim-700 to-dim-800 rounded-full flex items-center justify-center border-4 border-dim-900 shadow-xl mx-auto overflow-hidden">
                   <img id="avatar-preview" src="${user.avatar?.url || 'https://via.placeholder.com/150'}" class="h-full w-full object-cover" alt="Avatar">
                </div>
                <label for="avatar-input" class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity cursor-pointer rounded-full">
                  <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </label>
                <input type="file" id="avatar-input" class="hidden" accept="image/*">
                <div class="absolute bottom-0 right-0 h-6 w-6 bg-emerald-500 border-4 border-dim-900 rounded-full"></div>
              </div>
              <h3 class="mt-6 text-2xl font-black text-white leading-tight">${user.username}</h3>
              <p class="text-sm text-dim-400 font-medium mt-1">${user.email}</p>
              
              <div class="mt-8 flex flex-col items-center space-y-4">
                <span class="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${user.role === 'ADMIN' ? 'bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20' : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'}">
                  ${user.role} Account
                </span>
                
                <div class="flex flex-col items-center space-y-2">
                  <span class="text-[10px] font-bold uppercase tracking-[0.2em] ${user.isEmailVerified ? 'text-emerald-500' : 'text-amber-500'}">
                    ${user.isEmailVerified ? 'Email Verified' : 'Email Unverified'}
                  </span>
                  ${!user.isEmailVerified ? `
                    <button id="resend-verification-btn" class="text-[10px] font-black text-accent-primary hover:text-white uppercase tracking-widest underline underline-offset-4 decoration-accent-primary/30 transition-all">
                      Resend Verification
                    </button>
                  ` : ''}
                </div>
              </div>
            </div>
          </div>
          
          <div class="glass-card p-6 rounded-3xl border border-white/5">
            <h4 class="text-xs font-black text-dim-300 uppercase tracking-widest mb-4">Security Status</h4>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm text-dim-400">Two-Factor Auth</span>
                <span class="text-xs font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded">Disabled</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-dim-400">Identity Verified</span>
                <span class="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Yes</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Update Account Details -->
          <div class="glass-card rounded-3xl border border-white/5 overflow-hidden">
            <div class="px-8 py-6 border-b border-white/5 bg-white/5">
              <h3 class="text-xl font-black text-white">Account Settings</h3>
            </div>
            <form id="update-account-form" class="p-8 space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="update-username" class="block text-xs font-bold text-dim-300 uppercase tracking-widest mb-2 ml-1">Username</label>
                  <input id="update-username" name="username" type="text" value="${user.username}" required 
                    class="appearance-none block w-full px-4 py-3 bg-dim-800/50 border border-dim-700/50 placeholder-dim-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all sm:text-sm">
                </div>
                <div>
                  <label for="update-email" class="block text-xs font-bold text-dim-300 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                  <input id="update-email" name="email" type="email" value="${user.email}" required 
                    class="appearance-none block w-full px-4 py-3 bg-dim-800/50 border border-dim-700/50 placeholder-dim-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all sm:text-sm">
                </div>
              </div>
              <div class="flex justify-end">
                <button type="submit" id="update-account-btn" class="px-6 py-3 rounded-xl text-sm font-bold text-white bg-accent-primary hover:bg-accent-secondary transition-all transform active:scale-95">
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <!-- Change Password -->
          <div class="glass-card rounded-3xl border border-white/5 overflow-hidden">
            <div class="px-8 py-6 border-b border-white/5 bg-white/5">
              <h3 class="text-xl font-black text-white">Security</h3>
            </div>
            <form id="change-password-form" class="p-8 space-y-6">
              <div class="space-y-6">
                <div>
                  <label for="oldPassword" class="block text-xs font-bold text-dim-300 uppercase tracking-widest mb-2 ml-1">Current Password</label>
                  <input id="oldPassword" name="oldPassword" type="password" required 
                    class="appearance-none block w-full px-4 py-3 bg-dim-800/50 border border-dim-700/50 placeholder-dim-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all sm:text-sm">
                </div>
                <div>
                  <label for="newPassword" class="block text-xs font-bold text-dim-300 uppercase tracking-widest mb-2 ml-1">New Password</label>
                  <input id="newPassword" name="newPassword" type="password" required 
                    class="appearance-none block w-full px-4 py-3 bg-dim-800/50 border border-dim-700/50 placeholder-dim-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all sm:text-sm">
                </div>
              </div>
              <div class="flex justify-end">
                <button type="submit" id="change-password-btn" class="px-6 py-3 rounded-xl text-sm font-bold text-white bg-dim-700 hover:bg-dim-600 transition-all transform active:scale-95 border border-white/5">
                  Update Password
                </button>
              </div>
            </form>
          </div>

          <!-- Account Meta -->
          <div class="glass-card rounded-3xl border border-white/5 overflow-hidden">
            <div class="px-8 py-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <h3 class="text-xl font-black text-white">Account Details</h3>
              <span class="text-[10px] font-mono text-accent-primary bg-accent-primary/5 px-3 py-1.5 rounded-lg border border-accent-primary/10">ID: ${user._id}</span>
            </div>
            
            <div class="p-8 space-y-4">
              <div class="flex justify-between items-center text-sm">
                <span class="text-dim-400">Account Created</span>
                <span class="font-bold text-white">${new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="text-dim-400">Last Updated</span>
                <span class="font-bold text-white">${new Date(user.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            
            <div class="px-8 py-8 bg-black/20 text-center">
               <button class="text-xs font-bold text-accent-primary hover:text-accent-secondary transition-colors uppercase tracking-[0.2em]">
                 Download Security Audit Report
               </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
`;
