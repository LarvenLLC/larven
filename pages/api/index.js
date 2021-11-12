// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

const Axios = axios.create({
  baseURL: '/api/',
  timeout: 3000,
});

export default Axios;
