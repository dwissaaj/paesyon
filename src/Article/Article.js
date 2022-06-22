
import './Article.css'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ArticleCard from './ArticleCard';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import photo_1 from '../assets/photo_1.jpg'
const Article = () => {

    const [data,setData] = useState([
        {id:1,image:photo_1,title:"lorem ipsum",snippet:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus! Rem nostrum in deleniti explicabo quidem ut corrupti, aut, labore magni excepturi alias. Doloremque omnis eum a harum, ratione dignissimos."}
    ])
    return ( 
    <div>
        <Swiper navigation={true} modules={[Navigation]} className="articleClass">
            <SwiperSlide>
                <Grid sx={{display:'flex',padding:2,justifyContent:'space-evenly'}}>
                    <Grid>
                        <ArticleCard title={data[0].title}  image={data[0].image} snippet={data[0].snippet} linkTo="/"/>
                    </Grid>
                    <Grid>
                        <ArticleCard title={data[0].title}  image={data[0].image} snippet={data[0].snippet} linkTo="/"/>
                    </Grid> 
                    <Grid>
                        <ArticleCard title={data[0].title}  image={data[0].image} snippet={data[0].snippet} linkTo="/"/>
                    </Grid> 
                    <Grid>
                        <ArticleCard title={data[0].title}  image={data[0].image} snippet={data[0].snippet} linkTo="/"/>
                    </Grid>              
                </Grid>
            </SwiperSlide>
            <SwiperSlide>
            <Grid>
                <Grid sx={{display:'flex',padding:2,justifyContent:'space-evenly'}}>
                    <Grid>
                        <ArticleCard title={data[0].title}  image={data[0].image} snippet={data[0].snippet} linkTo="/"/>
                    </Grid>
                    <Grid>
                        <ArticleCard title={data[0].title}  image={data[0].image} snippet={data[0].snippet} linkTo="/"/>
                    </Grid> 
                    <Grid>
                        <ArticleCard title={data[0].title}  image={data[0].image} snippet={data[0].snippet} linkTo="/"/>
                    </Grid> 
                    <Grid>
                        <ArticleCard title={data[0].title}  image={data[0].image} snippet={data[0].snippet} linkTo="/"/>
                    </Grid>              
                </Grid>
                </Grid>
            </SwiperSlide>
        </Swiper>
    </div>
     );
}
 
export default Article;