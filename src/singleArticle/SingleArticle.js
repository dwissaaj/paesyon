import "./singleArticle.css"

export default function SingleArticle(props){
    return (
        <div className="single-article">
            <article className="article">
                <div className="headline">
                    <h1 className="h1">{props.title}</h1>
                </div>
                <p className="p preserve-whitespace"><img className="img" src={props.urlImg} alt=""/>{props.content}</p>
            </article>
        </div>
    )
}