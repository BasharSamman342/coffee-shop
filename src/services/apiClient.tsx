import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fake-coffee-api.vercel.app",
});

export default apiClient;
