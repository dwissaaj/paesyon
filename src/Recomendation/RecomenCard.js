import Card from '@mui/material/Card';

import { Button, CardActions, CardMedia } from "@mui/material";
const RecomenCard = (props) => {
    return ( 
        <Card sx={{width:250}}>
                <CardMedia className="imgClass" component="img" height="250" image={props.urlImg}/>
                <CardActions className="cardAction">
                    <Button  className="recomenCard" href={props.urlShop} target="_blank">
                        {props.title}
                    </Button>
                </CardActions>
        </Card>
     );
}
 
export default RecomenCard;