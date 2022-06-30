
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
    const page1 = [art[0], art[1], art[2], art[3]];
    const page2 = [art[4], art[5], art[6], art[7]];
    console.log(page1, "p");
    console.log(art, "a");
    return ( 
    <div id='articleHome'>
        <Swiper navigation={true} modules={[Navigation]} className="articleClass">
            <SwiperSlide>
                <Grid sx={{display:'flex',padding:2,justifyContent:'space-evenly'}}>
                        {page1?.map((datas) => {
                            return (
                                <Grid>
                                    <ArticleCard data={datas}/>
                                </Grid>
                            )
                        })}
                </Grid>
            </SwiperSlide>
            <SwiperSlide>
                <Grid sx={{display:'flex',padding:2,justifyContent:'space-evenly'}}>
                        {page2?.map((datas) => {
                            return (
                                <Grid>
                                    <ArticleCard data={datas}/>
                                </Grid>
                            )
                        })}       
                </Grid>
            </SwiperSlide>
        </Swiper>
    </div>
     );
}
 
export default Article;