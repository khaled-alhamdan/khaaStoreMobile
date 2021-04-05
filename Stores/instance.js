import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "http://192.168.8.104:8000",
});

export default instance;
