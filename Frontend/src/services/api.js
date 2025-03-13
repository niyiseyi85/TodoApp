import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7215/api", // Replace with your .NET backend URL
});

// Add a request interceptor to include the JWT token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;