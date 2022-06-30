import "./singleArticle.css"

export default function SingleArticle(article){
    console.log(article.singlearticle)
    return (
        <div className="single-article">
            <article className="article">
                <div className="headline">
                    <h1 className="h1">{article.singlearticle.title}</h1>
                </div>
                <p className="p preserve-whitespace"><img className="img" src={article.singlearticle.urlimg} alt=""/>{article.singlearticle.content}</p>
            </article>
        </div>
    )
}