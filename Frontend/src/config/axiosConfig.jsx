import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://urlshortner-kio0.onrender.com/',
  withCredentials: true,
});

export default axiosInstance