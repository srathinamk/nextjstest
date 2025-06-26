# Deployment Guide

## Available NPM Scripts

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build the application
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Deployment
```bash
npm run export       # Build and export static files
npm run deploy       # Full deployment (export + Firebase deploy)
npm run deploy:hosting  # Deploy only hosting (faster)
npm run firebase:serve  # Serve locally using Firebase
```

## Deployment Process

### 1. First Time Setup
```bash
# Login to Firebase (if not already logged in)
firebase login

# Initialize your project (if not already done)
firebase init
```

### 2. Deploy Your App
```bash
# Quick deployment
npm run deploy:hosting

# Full deployment (includes all Firebase services)
npm run deploy
```

### 3. Test Locally
```bash
# Test the built version locally
npm run firebase:serve
```

## Notes

- The app is configured for static export to work with Firebase Hosting
- Server actions will only work in development mode since static export doesn't support server-side functionality