import Header from "./components/Header";
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
        <Header />
        <main>
          <HeroSection />
          <CategorySection />
          <NewSection />
          <AboutSection />
          <ContactSection />
        </main>
      </ContentProvider>
    </>
  );
}

export default App;
