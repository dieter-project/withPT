import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 
    // Authorization: ``,
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
})

// axios.interceptors.request.use(
//   (config) => {
//     const accessToken = getToken();

//     config.headers["Authorization"] = `Bearer ${accessToken}`
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// )