import { Container, Typography, Grid } from "@mui/material";

import BreakSection from "../BreakSection/BreakSection";
import NavToHome from "../Navbar/NavToHome";
import Recomendation from "./Recomendation";
import './Recomendation.css'
const RecomendationPage = () => {
    return ( 
        <>
        <NavToHome/>
        <Container>
            <Grid spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center">
            <p className="recTitleCenter">Find Your Taste In Here</p>
            <Recomendation />
            <BreakSection/>
            <Recomendation />
            </Grid>
        </Container>
        </>
     );
}
 
export default RecomendationPage;