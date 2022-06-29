import baseApi from "./baseAPI"

var apiRecomendation = ({
    find: () => baseApi.get("/recommendations").then((res) => res.data),
});

export default apiRecomendation;