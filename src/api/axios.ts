import axios, { InternalAxiosRequestConfig } from "axios";
import { getCookie } from "../app/helpers/helperFunctions";
import { API_URL } from "../config";

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (config.headers) {
      config.headers["Authorization"] = `Bearer ${getCookie("genesisToken")}`;
    }

    return config;
  },
  (error) => {
    console.log(error);
  }
);

export { instance };
