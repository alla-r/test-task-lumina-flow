import { useContent } from "../../context/ContentContext";
import SectionHeading from "../../components/SectionHeading";
import "./NewSection.scss";

function NewSection() {
  const { newContent } = useContent();
  const { title, images, description } = newContent;

  const items = images.map((imageSrc, i) => {
    return (
      <div className={`new__image-wrapper-${i + 1}`} key={i}>
        <img
          src={imageSrc}
          alt={`New collection ${i + 1}`}
          className={`new__image`}
        />
      </div>
    );
  });

  return (
    <section id="new" className="new">
      <SectionHeading text={title} type="normal" />

      <div className="new__content">
        <div className="new__image-row">{items}</div>

        <p className="new__text">{description}</p>
      </div>
    </section>
  );
}

export default NewSection;
