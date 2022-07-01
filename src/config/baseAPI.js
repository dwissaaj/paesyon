import axios from "axios"
const baseApi = axios.create({
    // baseURL:"http://localhost:1337/api",
    baseURL:"https://apipaesyon.herokuapp.com/api",
});

export default baseApi;