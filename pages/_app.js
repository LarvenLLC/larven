import '../styles/globals.css';

import ToastProvider from '../hooks/useToasts';
import GoogleAnalytics from '../components/GoogleAnalytics';
import {initializeApp} from 'firebase/app';
import {useEffect} from 'react';

/**
 * App component
 * @component
 * @return {function}
 */
export default function MyApp({Component, pageProps}) {
  useEffect(()=>{
    const firebaseConfig = JSON.parse(
        process?.env?.NEXT_PUBLIC_FIREBASE_CONFIG || '{}',
    );
    // Initialize Firebase
    initializeApp(firebaseConfig);
  }, []);
  return (
    <ToastProvider>
      <Component {...pageProps} />
      <GoogleAnalytics />
    </ToastProvider>
  );
}
