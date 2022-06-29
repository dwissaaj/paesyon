
import './Article.css'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ArticleCard from './ArticleCard';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import apiArticle from "../config/apiArticle";
const Article = () => {

    const [art,setArt] = useState([]);
    useEffect(() => {
        apiArticle.find().then((res) => {
            setArt(res.data);
        });
    },[])
    console.log(art)
    return ( 
    <div>
        <Swiper navigation={true} modules={[Navigation]} className="articleClass">
            <SwiperSlide>
                <Grid sx={{display:'flex',padding:2,justifyContent:'space-evenly'}}>
                    <Grid>
                        {art?.map((data) => {
                            return (
                                <ArticleCard linkTo="" content={data.attributes.content} image={data.attributes.urlImg} title={data.attributes.title}/>
                            )
                        })}
                    </Grid>
                    <Grid>
                        
                    </Grid> 
                    <Grid>
                        
                    </Grid> 
                    <Grid>
                        
                    </Grid>              
                </Grid>
            </SwiperSlide>
            <SwiperSlide>
            <Grid>
                <Grid sx={{display:'flex',padding:2,justifyContent:'space-evenly'}}>
                    <Grid>
                       
                    </Grid>
                    <Grid>
                       
                    </Grid> 
                    <Grid>
                       
                    </Grid> 
                    <Grid>
                  
                    </Grid>              
                </Grid>
                </Grid>
            </SwiperSlide>
        </Swiper>
    </div>
     );
}
 
export default Article;