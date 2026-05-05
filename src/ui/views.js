export const loginView = `
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
    <div class="max-w-md w-full space-y-8 p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform transition-all duration-300">
      <div class="text-center">
        <div class="mx-auto h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
           <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
           </svg>
        </div>
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Welcome Back
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Sign in to your account or 
          <a href="#register" class="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
            create a new one
          </a>
        </p>
      </div>
      <form id="login-form" class="mt-8 space-y-6">
        <div class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
            <input id="username" name="username" type="text" required class="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm bg-gray-50 dark:bg-gray-700" placeholder="Enter your username">
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <div class="relative">
              <input id="password" name="password" type="password" required class="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm bg-gray-50 dark:bg-gray-700" placeholder="••••••••">
              <button type="button" id="toggle-password" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-indigo-500 transition-colors">
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
          <button type="submit" id="submit-btn" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
            <span id="btn-text">Sign In</span>
          </button>
        </div>
      </form>
    </div>
  </div>
`;

export const registerView = `
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
    <div class="max-w-md w-full space-y-8 p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform transition-all duration-300">
      <div class="text-center">
        <div class="mx-auto h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
           <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
           </svg>
        </div>
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Join Us Today
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Start your journey or 
          <a href="#login" class="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
            sign in to your account
          </a>
        </p>
      </div>
      <form id="register-form" class="mt-8 space-y-6">
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email address</label>
            <input id="email" name="email" type="email" required class="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm bg-gray-50 dark:bg-gray-700" placeholder="you@example.com">
          </div>
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
            <input id="username" name="username" type="text" required class="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm bg-gray-50 dark:bg-gray-700" placeholder="Choose a unique username">
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <div class="relative">
              <input id="password" name="password" type="password" required class="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm bg-gray-50 dark:bg-gray-700" placeholder="••••••••">
              <button type="button" id="toggle-password" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-indigo-500 transition-colors">
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
          <button type="submit" id="submit-btn" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
            <span id="btn-text">Create Account</span>
          </button>
        </div>
      </form>
    </div>
  </div>
`;

export const profileView = (user) => `
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center space-x-2">
            <div class="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
               <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
               </svg>
            </div>
            <h1 class="text-xl font-bold text-gray-900 dark:text-white">SecureAuth</h1>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400 hidden sm:block">
              Welcome, <span class="text-indigo-600 dark:text-indigo-400">${user.username}</span>
            </span>
            <button id="logout-btn" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-lg text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all transform active:scale-95">
              <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div class="px-6 py-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
          <div class="flex items-center space-x-5">
            <div class="h-20 w-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-sm">
               <span class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                 ${user.username.charAt(0).toUpperCase()}
               </span>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white leading-tight">Account Overview</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your personal information and security settings.</p>
            </div>
          </div>
        </div>
        
        <div class="divide-y divide-gray-200 dark:divide-gray-700">
          <div class="px-6 py-5 flex flex-col sm:flex-row sm:items-center">
            <dt class="text-sm font-semibold text-gray-500 dark:text-gray-400 w-full sm:w-1/3 mb-1 sm:mb-0">Unique Username</dt>
            <dd class="text-sm font-medium text-gray-900 dark:text-white w-full sm:w-2/3 bg-gray-50 dark:bg-gray-700/50 px-3 py-2 rounded-lg">
              ${user.username}
            </dd>
          </div>
          
          <div class="px-6 py-5 flex flex-col sm:flex-row sm:items-center">
            <dt class="text-sm font-semibold text-gray-500 dark:text-gray-400 w-full sm:w-1/3 mb-1 sm:mb-0">Email Address</dt>
            <dd class="text-sm font-medium text-gray-900 dark:text-white w-full sm:w-2/3 bg-gray-50 dark:bg-gray-700/50 px-3 py-2 rounded-lg">
              ${user.email}
            </dd>
          </div>
          
          <div class="px-6 py-5 flex flex-col sm:flex-row sm:items-center">
            <dt class="text-sm font-semibold text-gray-500 dark:text-gray-400 w-full sm:w-1/3 mb-1 sm:mb-0">Access Level</dt>
            <dd class="w-full sm:w-2/3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${user.role === 'ADMIN' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'}">
                ${user.role}
              </span>
            </dd>
          </div>

          <div class="px-6 py-5 flex flex-col sm:flex-row sm:items-center">
            <dt class="text-sm font-semibold text-gray-500 dark:text-gray-400 w-full sm:w-1/3 mb-1 sm:mb-0">Account Created</dt>
            <dd class="text-sm text-gray-500 dark:text-gray-400 w-full sm:w-2/3 italic">
              ${new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </dd>
          </div>
        </div>
        
        <div class="px-6 py-6 bg-gray-50 dark:bg-gray-800/80 border-t border-gray-200 dark:border-gray-700">
           <p class="text-xs text-center text-gray-400 dark:text-gray-500">
             Your data is stored securely using the FreeAPI sandbox environment.
           </p>
        </div>
      </div>
    </main>
  </div>
`;
