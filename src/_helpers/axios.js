import axios from "axios";

// const token = localStorage.getItem('token')

 const getToken = () => window.localStorage.getItem("token")
  ? window.localStorage.getItem("token")
  : null;

const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2000/api/',
    headers: { 'Authorization': getAuthorizationHeader() }

})

export default axiosInstance