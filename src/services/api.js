import axios from "axios";

const api = axios.create({
  baseURL: "https://fashion-backend-react.onrender.com"
});

export default api;