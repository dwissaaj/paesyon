
import { BrowserRouter as Router,Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const ArticleCard = (props) => {
  return ( 
      <Card sx={{borderRadius:5,width:300,marginRight:7,marginLeft:7,marginTop:7,marginBottom:7}}>
          <CardMedia component="img" alt="fashion" image={props.urlImg}/>
          <CardContent className='cardContent'>
                  <p className='cardTitle'>{props.title}</p>
                  <p className='cardArt'>{props.content}</p>
          </CardContent>
          <CardActions>
                  <p className='cardLink'>Read More..</p>
          </CardActions>
      </Card>
   );
}

export default ArticleCard;
