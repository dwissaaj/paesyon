import "./Article.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ArticleCard from "./ArticleCard";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import apiArticle from "../config/apiArticle";
const Article = () => {
  const [art, setArt] = useState([]);
  useEffect(() => {
    apiArticle.find().then((res) => {
      setArt(res.data);
    });
  }, []);
  const page = [];
  page.push([]);
  var idx = 0;
  for (var i = 0; i < art.length; i++) {
    if (i % 4 === 0 && i !== 0) {
      idx++;
      page.push([]);
    }
    page[idx].push(art[i]);
  }
  return ( 
    <div id="articleHome" className="articleClass">
      <Grid>
        <p className="cardArtTitle">Article</p>
      </Grid>
      <Swiper navigation={true} modules={[Navigation]}>
        {page?.map((card) => {
          return (
            <SwiperSlide>
              <Grid
                sx={{
                  display: "flex",
                  padding: 2,
                  justifyContent: "space-evenly",
                }}
              >
                {card?.map((datas) => {
                  return (
                    <Grid>
                      <ArticleCard data={datas} />
                    </Grid>
                  );
                })}
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Article;
