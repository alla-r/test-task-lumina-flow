import { isMobileOnly } from "react-device-detect";
import { useContent } from "../../context/ContentContext";
import SectionHeading from "../../components/SectionHeading";
import "./AboutSection.scss";
import Button from "../../components/Button";

function AboutSection() {
  const { aboutContent } = useContent();
  const { title, image, button, description } = aboutContent;

  return (
    <>
      {isMobileOnly ? (
        <section id="about" className="about">
          <div className="about__content">
            <SectionHeading text={title} type="bold" />
            <p className="about__text">{description[0]}</p>
            <div className="about__image-wrapper">
              <img src={image} alt="About image" className="about__image" />
            </div>
            <p className="about__text">{description[1]}</p>
            <Button
              text={button}
              styleType="outline"
              className="about__button"
            />
          </div>
        </section>
      ) : (
        <section id="about" className="about">
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
            <Button
              text={button}
              styleType="outline"
              className="about__button"
            />
          </div>
        </section>
      )}
    </>
  );
}

export default AboutSection;
