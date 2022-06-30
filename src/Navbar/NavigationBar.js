import './NavigationBar.css'
const NavigationBar = () => {
    return ( 
    <header className="headerCustom">
        <div className="containerCustom">
          <div className="tittleNavbar">
            <div className="tittleNavbarText">
              <a href="/"> <span className="colorTextbase">PAES</span><span className="boldText">YON</span></a>
            </div>
            <nav>
              <ul className="contentNavbar colorTextbase">
                <li className="marginContent">
                  <a href="/">Home</a>
                </li>
                <li className="marginContent">
                  <a href="#articleHome">Article</a>
                </li>
                <li className="marginContent">
                  <a href="#recommendationHome">Recomendation</a>
                </li>
                <li className="marginContent">
                  <a href="#contactHome">Contact us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
     );
}

export default NavigationBar;