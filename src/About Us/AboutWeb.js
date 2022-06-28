import './AboutUs.css'

const AboutWeb = () => {
  return (
    <section className="flex">
      <div className="sectionAboutWeb">
        <div className="settingText-sectionAboutWeb">
          <div>
            <p className="headline-sectionAboutWeb">
              explore your true style
            </p>
          </div>
          <div>
            <p className="text-sectionAboutWeb">
              for your day out
            </p>
          </div>
        </div>

        <div className="visi-container">
        <div className="setting-visiMisi">
          <div>
            <p className="headline-visiMisi">
                Our Vision
            </p>
          </div>
          <div>
            <p className="text-visiMisi">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sequi accusamus illum exercitationem laborum praesentium magni.
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
