import axios from "axios";

export const loadProducts = () => {
  return axios.get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products");
};
