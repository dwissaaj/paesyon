import "./AboutUs.css";

const AboutWeb = () => {
  return (
    <section className="flex">
      <div className="sectionAboutWeb">
        <div className="settingText-sectionAboutWeb">
          <div>
            <p className="headline-sectionAboutWeb">
              Choose your favourite to go outfit.
            </p>
          </div>
          <div>
            <p className="text-sectionAboutWeb">If you like it wear it.</p>
          </div>
        </div>

        <div className="visi-container">
          <div className="setting-visiMisi">
            <div>
              <p className="headline-visiMisi">Our Vision</p>
            </div>
            <div>
              <p className="text-visiMisi">
                We want to give you information about fashion, so that
                people are not confused about choosing the match fashion
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-sectionAboutWeb">
        <img
          src="https://i.imgur.com/4RRAzuR.jpg"
          className="image-hover"
        ></img>
      </div>
    </section>
  );
};

export default AboutWeb;
