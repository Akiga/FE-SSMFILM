import axios from "axios";

const API = axios.create({
  // baseURL: "https://be-ssmfilm.onrender.com/",
  baseURL: "http://localhost:5000/",
});

export const register = (data) => {
    return API.post("/register", data);
}

export const login = (data) => API.post("/login", data);

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;