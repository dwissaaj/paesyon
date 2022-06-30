
import { Routes, Route } from 'react-router-dom';
import Home from './AllPages/Home';
import './App.css';
import RecomendationPage from './Recomendation/RecomendationPage';
import AboutPage from './AllPages/AboutPage';
import Thanks from './Contact us/Thanks';

function App() {
  return (
    <div className="App">
          <Routes >
            <Route path='/' element={<Home/>}>
              <Route path='thanks'  element={<Thanks/>}/>
            </Route>
            <Route path='about-page' element={<AboutPage/>} />
            <Route path='recomendations' element={<RecomendationPage/>} />
          </Routes>
    </div>
  );
}

export default App;
