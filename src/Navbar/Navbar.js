const Navbar = () => {
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
                  <a href="#">Recomendation</a>
                </li>
                <li className="marginContent">
                  <a href="#">About us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
     );
}

export default Navbar;