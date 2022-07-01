import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";

const ArticleCard = (data) => {
  return (
    <Card
      sx={{
        borderRadius: 5,
        width: 300,
        marginRight: 7,
        marginLeft: 7,
        marginTop: 7,
        marginBottom: 7,
      }}
    >
      <CardMedia className="imgClass" component="img" alt="fashion" image={data.data?.attributes.urlImg} />
      <CardContent className="cardContent">
        <p className="cardTitle">{data.data?.attributes.title}</p>
        <p className="cardArt">{data.data?.attributes.content}</p>
      </CardContent>
      <CardActions className="fontLearnMore">
        <Link to= "/PageArticle" state={data.data?.attributes}
        >
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
