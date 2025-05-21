import "./SectionHeading.scss";

function SectionHeading({ text, type }) {
  const headingTypes = ["normal", "bold"];

  if (headingTypes.indexOf(type) === -1) {
    throw new Error(`Heading type shoud be one of ${headingTypes.join(", ")}`);
  }

  return <h2 className={`heading heading--${type}`}>{text}</h2>;
}

export default SectionHeading;
