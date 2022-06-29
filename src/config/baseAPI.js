import axios from "axios"
const baseApi = axios.create({
    baseURL:"http://strapipaesyon.herokuapp.com/api",
});

export default baseApi;