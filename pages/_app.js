import '../styles/globals.css';

import ToastProvider from '../hooks/useToasts';
import GoogleAnalytics from '../components/GoogleAnalytics';

/**
 * App component
 * @component
 * @return {function}
 */
export default function MyApp({Component, pageProps}) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
      <GoogleAnalytics />
    </ToastProvider>
  );
}
