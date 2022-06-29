
import { Container } from "@mui/system";
import './Recomendation.css'
import photo_1 from '../assets/photo_1.jpg'
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from 'react';
import { Pagination } from "swiper";
import RecomenCard from "./RecomenCard";
import axios from "axios";
import apiRecomendation from "../config/apiRecomendation";
const Recomendation = () => {
    const [rec,setRec] = useState([]);
    useEffect(() => {
        apiRecomendation.find().then((res) => {
            setRec(res.data);
        });
    },[])
    console.log(rec)
    return ( 
        <Container className="conRec">
            <Grid>
                <p className="cardRecTitle">Recomendation</p>
                <p className="cardRecSubTitle">Trend Fashion Around You</p>
            </Grid >
            <Swiper pagination={true} modules={[Pagination]} >
                
                {rec?.map((data) => {
                        return (
                            <>
                            <SwiperSlide>
                            <Grid  sx={{display:'flex',padding:2,justifyContent:'space-between'}}>
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />    
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />    
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />       
                            </Grid>
                            <Grid  sx={{display:'flex',padding:2,justifyContent:'space-between'}}>
                            <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />    
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />    
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />  
                            </Grid>
                            </SwiperSlide>
                            <SwiperSlide>
                            <Grid  sx={{display:'flex',padding:2,justifyContent:'space-between'}}>
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />    
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />    
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />       
                            </Grid>
                            <Grid  sx={{display:'flex',padding:2,justifyContent:'space-between'}}>
                            <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />    
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />    
                                <RecomenCard urlShop={data.attributes.urlShop} urlImg={data.attributes.urlImg} title={data.attributes.title} />  
                            </Grid>
                            </SwiperSlide>
                            </>
                        )
                    })}
                

            </Swiper>
                
        </Container>
     );
}
 
export default Recomendation;
