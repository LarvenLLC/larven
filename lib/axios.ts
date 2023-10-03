import Axios from 'axios';

const axios = Axios.create({
  baseURL: '/api/',
  timeout: 3000,
});

export default axios;