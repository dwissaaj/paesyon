import AboutWeb from './About Us/AboutWeb';
import AboutTeam from './About Us/AboutTeam';
import './App.css';
import Article from './Article/Article';
import Recomendation from './Recomendation/Recomendation';
import BreakSection from './BreakSection/BreakSection';
import SingleArticle from './singleArticle/SingleArticle';
import NavigationBar from './Navbar/NavigationBar';


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
    </div>
  );
}

export default App;
