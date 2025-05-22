import HeroImageLarge from "../assets/images/hero-large-1.png";
import HeroImageDesktop from "../assets/images/hero-desktop-1.png";
import HeroImageTablet from "../assets/images/hero-tablet-1.png";
import HeroImageMobile from "../assets/images/hero-mobile-1.png";

import CategoryImage1 from "../assets/images/category-desktop-1.png";
import CategoryImage2 from "../assets/images/category-desktop-2.png";
import CategoryImage3 from "../assets/images/category-desktop-3.png";
import CategoryImage4 from "../assets/images/category-desktop-4.png";
import CategoryImage5 from "../assets/images/category-desktop-5.png";

import NewImage1 from "../assets/images/new-desktop-1.png";
import NewImage2 from "../assets/images/new-desktop-2.png";
import NewImage3 from "../assets/images/new-desktop-3.png";

import AboutImage from "../assets/images/about-desktop-1.png";
import ContactImage from "../assets/images/contact-desktop-1.png";
import MenuBurgerImage from "../assets/images/menu-burger.png";

export const INITIAL_CONTENT = {
  headerContent: {
    logo: "ALTANSCHOOL WEB COURSES",
    items: ["HOME", "ABOUT", "SHOP", "BLOG", "CONTACT"],
    image: MenuBurgerImage,
  },
  heroContent: {
    title: "ORGANIC FASHION",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    button: "SHOP NOW",
    image: {
      mobile: HeroImageLarge,
      tablet: HeroImageLarge,
      desktop: HeroImageLarge,
      large: HeroImageLarge,
    },
  },
  categoryContent: {
    title: "SHOP BY CATEGORIES",
    images: [
      CategoryImage1,
      CategoryImage2,
      CategoryImage3,
      CategoryImage4,
      CategoryImage5,
    ],
  },
  newContent: {
    title: "NEW COLLECTION",
    images: [NewImage1, NewImage2, NewImage3],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  aboutContent: {
    title: "ABOUT US",
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ],
    button: "LEARN MORE",
    image: AboutImage,
  },
  contactContent: {
    title: "FOLLOW US",
    inputs: [
      {
        placeholder: "Enter your name",
        type: "text",
        element: "input",
      },
      {
        placeholder: "Enter a valid email address",
        type: "email",
        element: "input",
      },
      {
        placeholder: "Enter your message",
        element: "textarea",
      },
    ],
    button: "SUBMIT",
    image: ContactImage,
  },
};
