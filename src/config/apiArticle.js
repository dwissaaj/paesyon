import baseApi from "./baseAPI"

var apiArticle = ({
    find: () => baseApi.get("/articles").then((res) => res.data),
});

export default apiArticle;