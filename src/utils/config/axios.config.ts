import axios from "axios";

export default axios.create({
  baseURL: "https://api.giphy.com/v1/gifs", // Base URL will be completed with the endpoints of giphy
  responseType: "json",
  timeout: 6000,
});
