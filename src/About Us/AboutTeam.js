import "./AboutUs.css";

const AboutTeam = () => {
  return (
    <section className="flex">
      <div className="sectionAboutTeam">
        <div className="misi-container">
          <div className="setting-visiMisi">
            <div>
              <p className="headline-visiMisi">Our Mission</p>
            </div>
            <div>
              <p className="text-visiMisi">
                We will give you a recommendation clothes. We put the
                product here so you can grab it for your everyday outfit.
              </p>
            </div>
          </div>
        </div>

        <img
          class="image-sectionAboutTeam"
          src="https://i.imgur.com/PHBxBzH.png"
        />

        <div className="settingText-sectionAboutTeam">
          <div>
            <p className="headline-sectionAboutTeam">About Paesyon</p>
          </div>
          <div>
            <p className="text-sectionAboutTeam">
              Paesyeon is a website to increasingly your taste of fashion.
              Paesyeon offers you collection of clothing, accessories, shoes for
              men and women. Paesyeon is provide the latest information for
              about trendy outfit for exploring your true style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
