import { useState } from 'react';
import './App.css';
import Article from './Article/Article';
import Recomendation from './Recomendation/Recomendation';


function App() {
  
  return (
    <div className="App">
      <Recomendation/>
      <Article/>
    </div>
  );
}

export default App;
