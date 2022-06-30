
import './App.css';
import LandingPage from './Pages/LandingPage';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/home' element={<LandingPage/>} />
        </Routes>
    </div>
  );
}

export default App;
