import "../styles/globals.css";

import axios from "axios";

const Axios = axios.create({
  baseURL: '/api/',
  timeout: 3000,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
