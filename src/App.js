import { useState } from 'react';
import AboutWeb from './About Us/AboutWeb';
import AboutTeam from './About Us/AboutTeam';
import './App.css';
import Article from './Article/Article';
import Navbar from './Navbar/Navbar';
import Recomendation from './Recomendation/Recomendation';
import BreakSection from './BreakSection/BreakSection';
import SingleArticle from './singleArticle/SingleArticle';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
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
