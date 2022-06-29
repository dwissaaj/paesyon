import AboutWeb from './About Us/AboutWeb';
import AboutTeam from './About Us/AboutTeam';
import './App.css';
import Article from './Article/Article';
import Recomendation from './Recomendation/Recomendation';
import BreakSection from './BreakSection/BreakSection';
import SingleArticle from './singleArticle/SingleArticle';
import NavigationBar from './Navbar/NavigationBar';
import Contact from './Contact us/Contact';
import Footer from './footer/Footer';


function App() {
  
  return (
    <div className="App">
      <NavigationBar/>
      <AboutWeb/>
      <BreakSection/>
      <AboutTeam/>
      <Recomendation/>
      <Article/>
      <SingleArticle/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
