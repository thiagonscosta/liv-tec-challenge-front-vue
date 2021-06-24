import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});
