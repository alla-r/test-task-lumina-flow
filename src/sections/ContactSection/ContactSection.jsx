import { useContent } from "../../context/ContentContext";
import SectionHeading from "../../components/SectionHeading";
import "./ContactSection.scss";
import TextField from "../../components/TextField";

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
    <section id="contact" className="contact">
      <div className="container">
        <form className="contact__form">
          <SectionHeading text={title} type="bold" />
          {items}
          <button
            type="submit"
            className="contact__button button button--filled"
          >
            {button}
          </button>
        </form>

        <div className="contact__image-wrapper">
          <img src={image} alt="Contact image" className="contact__image" />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
