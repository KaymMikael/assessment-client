import axios from "axios";

const axiosHelper = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export default axiosHelper;
