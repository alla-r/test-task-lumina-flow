import HeroSection from "./sections/HeroSection";
import CategorySection from "./sections/CategorySection";
import NewSection from "./sections/NewSection";
import { ContentProvider } from "./context/ContentContext";
import "./App.scss";
import ContactSection from "./sections/ContactSection";
import AboutSection from "./sections/AboutSection";

function App() {
  return (
    <>
      <ContentProvider>
        <HeroSection />
        <CategorySection />
        <NewSection />
        <AboutSection />
        <ContactSection />
      </ContentProvider>
    </>
  );
}

export default App;
