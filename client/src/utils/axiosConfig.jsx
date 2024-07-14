import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api/v1",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance }; // Make sure to export the variable correctly



export const login = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
   
});
