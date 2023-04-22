import { AxiosRequestConfig } from "axios";
import axios from "../utils/config/axios.config";

export const searchGiphy = (q: string, offset: number, limit: number) => {
  const options: AxiosRequestConfig = {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      q: q,
      offset: offset,
      limit: limit,
    },
  };

  // Send POST request
  return axios.get("/search", options);
};
