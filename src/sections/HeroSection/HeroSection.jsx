import { useContent } from "../../context/ContentContext";
import Header from "../../components/Header";
import Button from "../../components/Button";
import "./HeroSection.scss";

function HeroSection() {
  const { heroContent } = useContent();
  const { title, description, button, image } = heroContent;
  console.log(heroContent);

  return (
    <section className="hero">
      <div className="wrapper">
        <Header className="hero__header" />
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
            <h1 className="hero__title">{title}</h1>
            <p className="hero__text">{description}</p>
            <Button text={button} type="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
