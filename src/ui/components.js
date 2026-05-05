export const toast = {
  show(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container') || this._createContainer();
    const toastEl = document.createElement('div');
    
    const colors = type === 'success' 
      ? 'bg-white dark:bg-gray-800 border-green-500 text-green-700 dark:text-green-400' 
      : 'bg-white dark:bg-gray-800 border-red-500 text-red-700 dark:text-red-400';
    
    const icon = type === 'success'
      ? `<svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
      : `<svg class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;

    toastEl.className = `flex items-center p-4 mb-4 rounded-xl shadow-2xl border-l-4 ${colors} transform transition-all duration-500 translate-x-full opacity-0 max-w-md w-full pointer-events-auto`;
    toastEl.innerHTML = `
      <div class="mr-3 flex-shrink-0">${icon}</div>
      <div class="text-sm font-bold flex-grow">${message}</div>
      <button class="ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    `;
    
    toastContainer.appendChild(toastEl);
    
    // Animate in
    setTimeout(() => {
      toastEl.classList.remove('translate-x-full', 'opacity-0');
      toastEl.classList.add('translate-x-0', 'opacity-100');
    }, 10);
    
    // Auto remove
    const timer = setTimeout(() => {
      this._hide(toastEl);
    }, 5000);

    // Manual close
    toastEl.querySelector('button').onclick = () => {
      clearTimeout(timer);
      this._hide(toastEl);
    };
  },

  _hide(el) {
    el.classList.remove('translate-x-0', 'opacity-100');
    el.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => {
      el.remove();
    }, 500);
  },
  
  _createContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-4 right-4 z-50 flex flex-col items-end space-y-2 pointer-events-none sm:top-6 sm:right-6';
    document.body.appendChild(container);
    return container;
  }
};

export const loadingSpinner = `
  <svg class="animate-spin h-5 w-5 mr-3 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
`;
