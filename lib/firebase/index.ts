import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth'; // Add this line to import Firebase Authentication

const FIREBASE_CONFIG = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG ?? '{}');

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
if (typeof window !== 'undefined') {
  getAnalytics(app);
}

const auth = getAuth(app); // Initialize Firebase Authentication

export { app, auth }; // Export the auth object along with app
