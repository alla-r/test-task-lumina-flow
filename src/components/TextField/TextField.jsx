import "./TextField.scss";

function TextField({ type, element, placeholder }) {
  const elementTypes = ["input", "textarea"];

  if (elementTypes.indexOf(element) === -1) {
    throw new Error(
      `TextField type shoud be one of ${elementTypes.join(", ")}`
    );
  }

  if (element === "input") {
    return (
      <input type={type} placeholder={placeholder} className="text-field" />
    );
  }

  return (
    <textarea
      placeholder={placeholder}
      className="text-field text-field--big"
    ></textarea>
  );
}

export default TextField;
