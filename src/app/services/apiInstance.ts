// import { showNotification } from "./showNotification";
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_ROOT;

const apiInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    if (config?.headers) {
      // inspect bearer token if applicable
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error)
);

export default apiInstance;
