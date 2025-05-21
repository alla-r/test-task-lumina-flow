import HeroSection from "./sections/HeroSection";
import CategorySection from "./sections/CategorySection";
import NewSection from "./sections/NewSection";
import { ContentProvider } from "./context/ContentContext";
import "./App.scss";

function App() {
  return (
    <>
      <ContentProvider>
        <HeroSection />
        <CategorySection />
        <NewSection />
      </ContentProvider>
    </>
  );
}

export default App;
