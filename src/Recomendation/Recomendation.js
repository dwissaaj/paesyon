
import { Container } from "@mui/system";
import './Recomendation.css'
import photo_1 from '../assets/photo_1.jpg'
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';
import { Pagination } from "swiper";
import RecomenCard from "./RecomenCard";
const Recomendation = () => {
    const [data,setData] = useState([
        {id:1,image:photo_1,shop:'Tokopedia'}
    ])
    return ( 
        <Container className="conRec">
            <Grid>
                <p className="cardRecTitle">Recomendation</p>
                <p className="cardRecSubTitle">Trend Fashion Around You</p>
            </Grid >
            <Swiper pagination={true} modules={[Pagination]} >
                <SwiperSlide>
                <Grid  sx={{display:'flex',padding:2,justifyContent:'space-between'}}>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                </Grid>
                <Grid  sx={{display:'flex',padding:2,justifyContent:'space-between',marginBottom:5}}>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/> 
                </Grid>
                </SwiperSlide>

                <SwiperSlide>
                <Grid  sx={{display:'flex',padding:2,justifyContent:'space-between'}}>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                </Grid>
                <Grid  sx={{display:'flex',padding:2,justifyContent:'space-between',marginBottom:5}}>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/>
                    <RecomenCard shop={data[0].shop} image={data[0].image}/> 
                </Grid>
                </SwiperSlide>
            </Swiper>
                
        </Container>
     );
}
 
export default Recomendation;
