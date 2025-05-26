import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import "./Header.scss";

function Header() {
  const { headerContent } = useContent();
  const { image, logo } = headerContent;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`header`}>
      <div className="container">
        <h1 className="header__logo">
          <a href="#">{logo}</a>
        </h1>

        <nav
          className={`header__menu ${isMenuOpen ? "header__menu--open" : ""}`}
        >
          <ul>
            <li onClick={toggleMenu}>
              <a href="#hero">HOME</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#about">ABOUT</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#category">SHOP</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#new">BLOG</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>

        <button className="header__burger-wrapper" onClick={toggleMenu}>
          <img
            src={image}
            alt="Burger image icon"
            className="header__burger-image"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
