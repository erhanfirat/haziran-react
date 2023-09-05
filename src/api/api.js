import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
