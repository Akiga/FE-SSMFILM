import axios from "axios";

const API = axios.create({
  // baseURL: "https://be-ssmfilm.onrender.com/",
  baseURL: "http://localhost:5000/",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;

    // Đánh dấu request này có token
    config._hasToken = true;
  } else {
    config._hasToken = false;
  }

  return config;
});

API.interceptors.response.use(
  (response) => response,

  (error) => {
    console.log("API ERROR:", {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
    });

    // Chỉ logout nếu request có gửi token
    if (
      error.response?.status === 401 &&
      error.config?._hasToken
    ) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default API;