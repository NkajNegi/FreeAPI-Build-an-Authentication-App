here https://nkajnegi.github.io/FreeAPI-Build-an-Authentication-App/

# FreeAPI Auth App

A simple frontend application built with vanilla JavaScript and Tailwind CSS to demonstrate a complete user authentication flow using FreeAPI.

## Features

- **Auth Flow:** Register, Login, and Logout.
- **Token Management:** Handles JWT access and refresh tokens automatically.
- **User Dashboard:** View and edit profile details.
- **Security:** Change password and manage email verification.
- **Media:** Avatar uploads.
- **UI:** Custom dark/glass theme with toast notifications and loading states.

## Tech Stack

- HTML / Custom CSS
- Vanilla JavaScript
- Tailwind CSS (via CDN)


Open `http://localhost:8000` in your browser.

## File Structure

- `index.html` - Main HTML file.
- `src/style.css` - Custom styles and scrollbars.
- `src/main.js` - App initialization.
- `src/services/api.js` - API request handler and token interceptor.
- `src/services/auth.js` - LocalStorage token management.
- `src/ui/router.js` - Hash-based routing and event listeners.
- `src/ui/views.js` - UI templates (Login, Register, Profile).
- `src/ui/components.js` - Toast notifications and loaders.

## API Note

This project connects directly to the [FreeAPI sandbox](https://freeapi.app/). Data created here is temporary and meant for testing purposes.
