import '../styles/globals.css';

import ToastProvider from '../hooks/useToasts';
import GoogleAnalytics from '../components/GoogleAnalytics';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { useEffect, useState } from 'react';

/**
 * App component
 * @component
 * @return {function}
 */
export default function MyApp({ Component, pageProps }) {
  const [app, setApp] = useState(null);
  useEffect(() => {
    const firebaseConfig = JSON.parse(
      process?.env?.NEXT_PUBLIC_FIREBASE_CONFIG || '{}',
    );
    // Initialize Firebase
    const { name } = initializeApp(firebaseConfig);
    setApp(name);
  }, []);

  useEffect(() => {
    if (app) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }
  }, []);

  useEffect(() => {
    if (app) {
      const auth = getAuth();
      signInAnonymously(auth)
        .then(() => {
          // Signed in..
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [app]);

  return (
    <ToastProvider>
      <Component {...pageProps} />
      <GoogleAnalytics />
    </ToastProvider>
  );
}
