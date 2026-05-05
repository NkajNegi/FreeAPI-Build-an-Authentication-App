import './style.css';
import { router } from './ui/router';

// Initialize the app
window.addEventListener('DOMContentLoaded', () => {
  router.init();
});

// Handle hash changes
window.addEventListener('hashchange', () => {
  router.navigate();
});
