import axios from "axios";

export const api = axios.create({
  baseURL: 'https://finan-safe.vercel.app/api'
})