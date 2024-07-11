import axios from "axios";

export const productApi = axios.create({
  baseURL: `https://fakestoreapi.com/products`,
  headers: {
    "Content-Type": "application/json",
  },
});
