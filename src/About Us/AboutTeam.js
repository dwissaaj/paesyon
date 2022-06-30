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
                We will give you a recommendation clothes. We spill and put the
                product here so you can grab it for your everyday outfit.
              </p>
            </div>
          </div>
        </div>

        {/* <img
          class="image-sectionAboutTeam"
          src="https://i.imgur.com/mpReeTR.png"
        /> */}
        {/* <img
          class="image-sectionAboutTeam"
          src="https://i.imgur.com/SutivAw.png"
        /> */}
        {/* <img
          class="image-sectionAboutTeam"
          src="https://i.imgur.com/gaAieOw.png"
        /> */}
        {/* <img
          class="image-sectionAboutTeam"
          src="https://i.imgur.com/IYtP44Y.png"
        /> */}
        <img
          class="image-sectionAboutTeam"
          src="https://i.imgur.com/Chrj1qN.png"
        />

        <div className="settingText-sectionAboutTeam">
          <div>
            <p className="headline-sectionAboutTeam">About Paesyon</p>
          </div>
          <div>
            <p className="text-sectionAboutTeam">
              Paesyon was built by 4 people, namely Kevin Usmayadhy Wijaya, Esa
              Noer Fadhila, Dwi Setyo Aji, and Dhaneswara
              L P. The types of fashion trends today are increasingly diverse,
              many people are confused about matching clothes to their tastes.
              Not everyone confident with their fashion sense. Therefore,
              Paesyon is here to provide recommendations and articles about
              trendy outfits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
