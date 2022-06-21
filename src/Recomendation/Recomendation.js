import { Button, CardActions, CardMedia, Grid } from "@mui/material";
import { Container } from "@mui/system";
import './Recomendation.css'
import photo_1 from '../assets/photo_1.jpg'
import { Link, Router } from "react-router-dom";
import Card from '@mui/material/Card';
const Recomendation = () => {
    const width = 250
    return ( 
        <Container className="conRec">
            <Grid>
                <p className="cardRecTitle">Recomendation</p>
                <p className="cardRecSubTitle">Trend Fashion Around You</p>
            </Grid >
            <Grid  sx={{display:'flex',padding:2,justifyContent:'space-between'}}>
                <Card sx={{width:width}}>
                    <CardMedia component="img" height="250" image={photo_1}/>
                    <CardActions className="cardAction">
                        <Button className="btnRec">
                            Shopee
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{width:width}}>
                    <CardMedia component="img" height="250" image={photo_1}/>
                    <CardActions className="cardAction">
                        <Button className="btnRec">
                            Shopee
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{width:width}}>
                    <CardMedia component="img" height="250" image={photo_1}/>
                    <CardActions className="cardAction">
                        <Button className="btnRec">
                            Shopee
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{width:width}}>
                    <CardMedia component="img" height="250" image={photo_1}/>
                    <CardActions className="cardAction">
                        <Button className="btnRec">
                            Shopee
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid  sx={{display:'flex',padding:2,justifyContent:'space-evenly'}}>
                <Card sx={{width:width}}>
                    <CardMedia component="img" height="250" image={photo_1}/>
                    <CardActions className="cardAction">
                        <Button className="btnRec">
                            Shopee
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
                
        </Container>
     );
}
 
export default Recomendation;