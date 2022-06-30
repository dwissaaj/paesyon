import { Container, Typography } from "@mui/material";
import AboutTeam from "../About Us/AboutTeam";
import AboutWeb from "../About Us/AboutWeb";
import BreakSection from "../BreakSection/BreakSection";
import NavigationBar from "../Navbar/NavigationBar";
import { Link, NavLink } from 'react-router-dom';
import NavToHome from "../Navbar/NavToHome";
import AboutMember from "../About Us/AboutMember";
import '../About Us/AboutUs.css'
const AboutPage = () => {
    return ( 
        <>
        <NavToHome/>
        <Container>
            <AboutWeb />
            <BreakSection/>
            <AboutTeam/>
            <AboutMember/>
        </Container>
        </>

     );
}
 
export default AboutPage;