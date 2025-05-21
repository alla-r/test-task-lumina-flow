import "./Button.scss";

function Button({ text, type, styleType, className }) {
  const btnStyleTypes = ["hero", "outline", "filled"];

  if (btnStyleTypes.indexOf(styleType) === -1) {
    throw new Error(`Button type shoud be one of ${btnStyleTypes.join(", ")}`);
  }

  return (
    <button className={`button button--${styleType} ${className}`} type={type}>
      {text}
    </button>
  );
}

export default Button;
