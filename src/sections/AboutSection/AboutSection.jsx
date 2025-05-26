import { isMobileOnly } from "react-device-detect";
import { useContent } from "../../context/ContentContext";
import SectionHeading from "../../components/SectionHeading";
import "./AboutSection.scss";

function AboutSection() {
  const { aboutContent } = useContent();
  const { title, image, button, description } = aboutContent;

  return (
    <>
      {isMobileOnly ? (
        <section id="about" className="about">
          <div className="container">
            <div className="about__content">
              <SectionHeading text={title} type="bold" />
              <p className="about__text">{description[0]}</p>
              <div className="about__image-wrapper">
                <img src={image} alt="About image" className="about__image" />
              </div>
              <p className="about__text">{description[1]}</p>
              <a href="#" className="button button--outline about__button">
                {button}
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section id="about" className="about">
          <div className="container">
            <div className="about__image-wrapper">
              <img src={image} alt="About image" className="about__image" />
            </div>

            <div className="about__content">
              <SectionHeading text={title} type="bold" />
              {description.map((text, i) => {
                return (
                  <p key={i} className="about__text">
                    {text}
                  </p>
                );
              })}
              <a href="#" className="button button--outline about__button">
                {button}
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default AboutSection;
