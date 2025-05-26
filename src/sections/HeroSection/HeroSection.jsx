import { useContent } from "../../context/ContentContext";
import Header from "../../components/Header";
import "./HeroSection.scss";

function HeroSection() {
  const { heroContent } = useContent();
  const { title, description, button, image } = heroContent;

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero__content-wrapper">
          <div className="hero__image-wrapper">
            <picture>
              <source media="(min-width: 87.5em)" srcSet={image.large} />
              <source media="(min-width: 64em)" srcSet={image.desktop} />
              <source media="(min-width: 37.5em)" srcSet={image.tablet} />
              <img
                className="hero__image"
                src={image.mobile}
                alt="hero image"
              />
            </picture>
          </div>
          <div className="hero__content">
            <h2 className="hero__title">{title}</h2>
            <p className="hero__text">{description}</p>
            <a href="#" className="button button--hero">
              {button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
