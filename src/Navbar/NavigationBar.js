import { Link, NavLink } from 'react-router-dom';
import './NavigationBar.css'
const NavigationBar = () => {
    return (
    <header className="headerCustom">
        <div className="containerCustom">
          <div className="tittleNavbar">
            <div className="tittleNavbarText">
              <a href=""> <span className="colorTextbase">PAES</span><span className="boldText">YEON</span></a>
            </div>
            <nav>
              <ul className="contentNavbar colorTextbase">
                <li className="marginContent">
                  <a href="#">Home</a>
                </li>
                <li className="marginContent">
                  <a href="#">Article</a>
                </li>
                <li className="marginContent">
                  <NavLink to='recomendations'>Recomendation</NavLink>
                </li>
                <li className="marginContent">
                  <NavLink to='about-page'>About Us</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  
     );
}

export default NavigationBar;