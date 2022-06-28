import './AboutUs.css'

const AboutTeam = () => {
  return (
    <section className="flex">
      <div className="sectionAboutTeam">
        <div className="misi-container">
          <div className="setting-visiMisi">
            <div>
              <p className="headline-visiMisi">
                Our Mission
              </p>
            </div>
            <div>
              <p className="text-visiMisi">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita sequi accusamus illum exercitationem laborum
                praesentium magni.
              </p>
            </div>
          </div>
        </div>

        <img class="image-sectionAboutTeam" src="https://i.imgur.com/4RRAzuR.jpg"/>

        <div className="settingText-sectionAboutTeam">
          <div>
            <p className="headline-sectionAboutTeam">
              About Paesyon
            </p>
          </div>
          <div>
            <p className="text-sectionAboutTeam">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              pariatur. Distinctio dolores vitae debitis dolorem, ducimus
              consequuntur facere officia! Quis ex quisquam dolor ullam aperiam
              cumque sint, iure beatae dolores quae reiciendis aliquam dolore
              quos eum suscipit. Quibusdam molestias temporibus incidunt
              delectus laudantium, aliquam commodi in iste dolorum cupiditate
              tempora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
