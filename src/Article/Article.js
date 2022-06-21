
import './Article.css'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import photo_1 from '../assets/photo_1.jpg'
import Grid from '@mui/material/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Article = () => {
    return ( 
    <div>
        <Swiper navigation={true} modules={[Navigation]} className="articleClass">
            <SwiperSlide>
                <Grid sx={{display:'flex',padding:2,justifyContent:'space-evenly'}}>
                    <Grid>
                    <Card sx={{borderRadius:5,width:300,marginRight:7,marginLeft:7,marginTop:7,marginBottom:7}}>
                            <CardMedia component="img" alt="fashion" 
                            image={photo_1}/>
                            <CardContent className='cardContent'>
                                <p className='cardTitle'>Lorem Ipsum</p>
                                <p className='cardArt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus! Rem nostrum in deleniti explicabo quidem ut corrupti, aut, labore magni excepturi alias. Doloremque omnis eum a harum, ratione dignissimos.</p>
                            </CardContent>
                            <CardActions>
                               <Router>
                                <Link className='cardLink' to="/">Read More..</Link>
                               </Router>
                            </CardActions>
                        </Card>
                        
                    </Grid>
                    <Grid>
                    <Card sx={{borderRadius:5,width:300,marginRight:7,marginLeft:7,marginTop:7,marginBottom:7}}>
                            <CardMedia component="img" alt="fashion" 
                            image={photo_1}/>
                            <CardContent className='cardContent'>
                                <p className='cardTitle'>Lorem Ipsum</p>
                                <p className='cardArt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus! Rem nostrum in deleniti explicabo quidem ut corrupti, aut, labore magni excepturi alias. Doloremque omnis eum a harum, ratione dignissimos.</p>
                            </CardContent>
                            <CardActions>
                               <Router>
                                <Link className='cardLink' to="/">Read More..</Link>
                               </Router>
                            </CardActions>
                        </Card>
                        
                    </Grid>
                    <Grid>
                    <Card sx={{borderRadius:5,width:300,marginRight:7,marginLeft:7,marginTop:7,marginBottom:7}}>
                            <CardMedia component="img" alt="fashion" 
                            image={photo_1}/>
                            <CardContent className='cardContent'>
                                <p className='cardTitle'>Lorem Ipsum</p>
                                <p className='cardArt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus! Rem nostrum in deleniti explicabo quidem ut corrupti, aut, labore magni excepturi alias. Doloremque omnis eum a harum, ratione dignissimos.</p>
                            </CardContent>
                            <CardActions>
                               <Router>
                                <Link className='cardLink' to="/">Read More..</Link>
                               </Router>
                            </CardActions>
                        </Card>
                        
                    </Grid>
                    <Grid>
                    <Card sx={{borderRadius:5,width:300,marginRight:7,marginLeft:7,marginTop:7,marginBottom:7}}>
                            <CardMedia component="img" alt="fashion" 
                            image={photo_1}/>
                            <CardContent className='cardContent'>
                                <p className='cardTitle'>Lorem Ipsum</p>
                                <p className='cardArt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus! Rem nostrum in deleniti explicabo quidem ut corrupti, aut, labore magni excepturi alias. Doloremque omnis eum a harum, ratione dignissimos.</p>
                            </CardContent>
                            <CardActions>
                               <Router>
                                <Link className='cardLink' to="/">Read More..</Link>
                               </Router>
                            </CardActions>
                        </Card>
                        
                    </Grid>
                    
                </Grid>
            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>
        </Swiper>
    </div>
     );
}
 
export default Article;