import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

// Buscar Dados
export const api = axios.create({
  baseURL,
});