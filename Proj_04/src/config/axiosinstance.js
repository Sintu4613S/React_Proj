// https://6a630fac1bffb2ffab8ba8e6.mockapi.io/users
import axios from 'axios';

const axiosinstance = axios.create({
  baseURL: 'https://6a630fac1bffb2ffab8ba8e6.mockapi.io/',
  timeout: 5000, // Request aborts after 5 seconds
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosinstance;
