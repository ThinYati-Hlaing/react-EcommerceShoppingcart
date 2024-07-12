import axios from "axios";

export const categoryApi = axios.create({
  baseURL: `https://fakestoreapi.com/products/categories`,
  headers: {
    "Content-Type": "application/json",
  },
});
