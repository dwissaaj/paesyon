import "./singleArticle.css"
import { useLocation } from "react-router-dom";

export default function SingleArticle(){
    const location = useLocation();
    return (
        <div className="single-article">
            <article className="article">
                <div className="headline">
                    <h1 className="h1">{location.state.title}</h1>
                </div>
                <p className="p preserve-whitespace"><img className="img" src={location.state.urlImg} alt=""/>{location.state.content}</p>
            </article>
        </div>
    )
}