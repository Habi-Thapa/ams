// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Set your base URL here
  timeout: 10000, // Set the timeout (in milliseconds) for requests
  headers: {
    "Content-Type": "application/json",
    // You can add any other default headers here
  },
});

// You can also add interceptors if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config here, e.g., add authentication token
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // You can handle successful responses here
    return response;
  },
  (error) => {
    // You can handle errors here
    return Promise.reject(error);
  }
);

export default axiosInstance;
