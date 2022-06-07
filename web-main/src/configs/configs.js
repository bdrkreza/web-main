import axios from "axios";

const packageJson = require("../../package.json");
console.debug(`App Version ${packageJson.version}`);

// TODO unused
// const baseURL = process.env.REACT_APP_BASE_URL;

const baseAPIURL = process.env.REACT_APP_BASE_API_URL;
const baseMSFAPIURL = process.env.REACT_APP_BASE_MSF_API_URL;
console.debug(`baseAPIURL: ${baseAPIURL}`);
console.debug(`baseMSFAPIURL: ${baseMSFAPIURL}`);

// const baseURL = "https://0.0.0.0:5000";
// const baseAPIURL = "http://18.136.247.15:8000/";
// const baseAPIURL = "https://backend.bhalogari.com/";
// const baseAPIURL = "http://127.0.0.1:8000/";
// const baseAPIURL = "https://52.74.53.96/";

// TODO: Consider remove this 'axiosInstance'. It seems redundant. But does it affect others tho.
// const axiosInstance = axios.create({
//   baseURL: baseURL,
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Accept-Language": "*",
//   },
// });

const api = axios.create({
  baseURL: baseAPIURL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "*",
  },
});

const msfApi = axios.create({
  baseURL: baseMSFAPIURL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "*",
  },
});

const apiAuth = axios.create({
  baseURL: baseAPIURL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "*",
  },
});

// export { api, axiosInstance, apiAuth, baseAPIURL };
export { api, msfApi, apiAuth, baseAPIURL };
