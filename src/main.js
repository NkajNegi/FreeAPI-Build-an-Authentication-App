import { router } from './ui/router.js';

// Initialize the app
window.addEventListener('DOMContentLoaded', () => {
  router.init();
});

// Handle hash changes
window.addEventListener('hashchange', () => {
  router.navigate();
});
