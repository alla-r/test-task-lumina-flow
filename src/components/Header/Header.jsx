import { useContent } from "../../context/ContentContext";
import "./Header.scss";

function Header({ className }) {
  const { headerContent } = useContent();

  return <header className={className}>{headerContent.logo}</header>;
}

export default Header;
