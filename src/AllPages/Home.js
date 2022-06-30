import Article from '../Article/Article';
import Recomendation from '../Recomendation/Recomendation';
import BreakSection from '../BreakSection/BreakSection';
import NavigationBar from '../Navbar/NavigationBar';
import Contact from '../Contact us/Contact';
import Footer from '../footer/Footer';
import AboutWeb from '../About Us/AboutWeb';
import AboutTeam from '../About Us/AboutTeam';
import { Route, Routes } from 'react-router-dom';
const Home = () => {
    return ( 
        <>
            <NavigationBar />
            <AboutWeb/>
            <BreakSection/>
            <AboutTeam/>
            <Recomendation/>
            <Article/>
            <Contact/>
            <Footer/>
        </>
     );
}
 
export default Home;
