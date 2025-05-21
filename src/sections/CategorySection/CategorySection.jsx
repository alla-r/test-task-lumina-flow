import { useContent } from "../../context/ContentContext";
import SectionHeading from "../../components/SectionHeading";
import "./CategorySection.scss";

function CategorySection() {
  const { categoryContent } = useContent();
  const { title, images } = categoryContent;

  const items = images.slice(0, 4).map((imageSrc, i) => {
    return (
      <div className="category__image-wrapper" key={i}>
        <img
          src={imageSrc}
          alt={`Category ${i + 1}`}
          className={`category__image`}
        />
      </div>
    );
  });

  return (
    <section className="category">
      <SectionHeading text={title} type="normal" />

      <div className="category__content-1">{items}</div>
      <div className="category__content-2">
        <img src={images[4]} alt={`Category 5`} className={`category__image`} />
      </div>
    </section>
  );
}

export default CategorySection;
