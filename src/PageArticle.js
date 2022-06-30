import "./App.css";
import NavigationArticle from "./Navbar/NavbarArticle";
import Footer from "./footer/Footer";
import SingleArticle from "./singleArticle/SingleArticle";
function PageArticle() {
  return (
    <div className="App">
      <NavigationArticle />
      <SingleArticle />
      <Footer />
    </div>
  );
}

export default PageArticle;
