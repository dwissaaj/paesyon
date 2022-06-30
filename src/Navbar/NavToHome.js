import NavigationBar from "../Navbar/NavigationBar";
import { Link, NavLink } from 'react-router-dom';
const NavToHome = () => {
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
                  <NavLink to='/'>Home</NavLink>
                </li>
              </ul>
            </nav>
            </div>
        </div>
        </header>
     );
}
 
export default NavToHome;