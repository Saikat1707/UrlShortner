import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://url-shortner-ot9g.vercel.app/',
  withCredentials: true,
});

export default axiosInstance