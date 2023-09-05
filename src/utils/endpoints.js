import axios from "axios";
import { axiosWithAuth } from "../api/api";

export const loadProducts = () => {
  return axiosWithAuth().get("products");
};
