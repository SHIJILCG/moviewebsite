import axios from "axios";
const KEY = process.env.REACT_APP_BEAERE_TOKEN
export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:KEY
  },
});
