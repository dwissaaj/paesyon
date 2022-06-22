import Card from '@mui/material/Card';

import { Button, CardActions, CardMedia, Grid } from "@mui/material";
const RecomenCard = (props) => {
    return ( 
        <Card sx={{width:250}}>
                <CardMedia component="img" height="250" image={props.image}/>
                <CardActions className="cardAction">
                    <Button  className="recomenCard" href="https://gitlab.com/paesyon/paesyon/-/tree/development/src" target="_blank">
                        {props.shop}
                    </Button>
                </CardActions>
        </Card>
     );
}
 
export default RecomenCard;