import { Container } from "@mui/system";
import "./Recomendation.css";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import RecomenCard from "./RecomenCard";
import apiRecomendation from "../config/apiRecomendation";
const Recomendation = () => {
  const [rec, setRec] = useState([]);
  useEffect(() => {
    apiRecomendation.find().then((res) => {
      setRec(res.data);
    });
  }, []);
  const page = [];
  page.push([]);
  var idx = 0;
  for (var i = 0; i < rec.length; i++) {
    if (i % 4 === 0 && i !== 0) {
      idx++;
      page.push([]);
    }
    page[idx].push(rec[i]);
  }
  return (
    <Container className="conRec" id="recommendationHome">
      <Grid>
        <p className="cardRecTitle">Recomendation</p>
        <p className="cardRecSubTitle">Trend Fashion Around You</p>
      </Grid>
      <Swiper pagination={true} modules={[Pagination]}>
        {page?.map((card) => {
          return (
            <SwiperSlide>
                <Grid  sx={{display:'flex',padding:2,justifyContent:'space-between'}}>
                {card?.map((data) => {
                  return (
                    <>
                      <RecomenCard
                        urlShop={data.attributes.urlShop}
                        urlImg={data.attributes.urlImg}
                        title={data.attributes.title}
                      />
                  </>
                  );
                })}
                </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Recomendation;
