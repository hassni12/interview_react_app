import Axios from "axios";

export const ApiHandler = () => {
  return Axios.create({
    baseURL: " https://test.nexisltd.com",
    headers: {
      ...Axios.defaults.headers,
      Authorization: localStorage.getItem("token")
        ? `Bearer ${localStorage.getItem("token")}`
        : null,
    },
  });
};
