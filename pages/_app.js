import '../styles/globals.css';

import ToastProvider from '../hooks/useToasts';

/**
 * App component
 * @component
 * @return {function}
 */
export default function MyApp({Component, pageProps}) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
