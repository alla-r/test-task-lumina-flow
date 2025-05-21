import "./Button.scss";

function Button({ text, type }) {
  const btnTypes = ["hero", "outline", "filled"];

  if (btnTypes.indexOf(type) === -1) {
    throw new Error(`Button type shoud be one of ${btnTypes.join(", ")}`);
  }

  return <button className={`button button--${type}`}>{text}</button>;
}

export default Button;
