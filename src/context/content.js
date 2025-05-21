import HeroImageLarge from "../assets/images/hero-large-1.png";
import HeroImageDesktop from "../assets/images/hero-desktop-1.png";
import HeroImageTablet from "../assets/images/hero-tablet-1.png";
import HeroImageMobile from "../assets/images/hero-mobile-1.png";

export const INITIAL_CONTENT = {
  headerContent: {
    logo: "ALTANSCHOOL WEB COURSES",
    items: ["HOME", "ABOUT", "SHOP", "BLOG", "CONTACT"],
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
  },
};
