import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_GARUDA_API, // Base API URL
  timeout: 60 * 1000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials : false
});

// Request Interceptor (e.g., for adding Authorization headers)
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Example: Retrieve token
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// Response Interceptor (e.g., for handling errors globally)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle Unauthorized globally
      localStorage.removeItem('authToken');
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
