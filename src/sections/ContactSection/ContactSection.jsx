import { useContent } from "../../context/ContentContext";
import SectionHeading from "../../components/SectionHeading";
import "./ContactSection.scss";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

function ContactSection() {
  const { contactContent } = useContent();
  const { title, image, button, inputs } = contactContent;

  const items = inputs.map(({ type, placeholder, element }, i) => {
    return (
      <TextField
        key={i}
        type={type}
        placeholder={placeholder}
        element={element}
      />
    );
  });

  return (
    <section className="contact">
      <form className="contact__form">
        <SectionHeading text={title} type="bold" />
        {items}
        <Button
          type="submit"
          text={button}
          styleType="filled"
          className="contact__button"
        />
      </form>

      <div className="contact__image-wrapper">
        <img src={image} alt="Contact image" className="contact__image" />
      </div>
    </section>
  );
}

export default ContactSection;
