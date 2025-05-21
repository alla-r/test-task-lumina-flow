import HeroSection from "./sections/HeroSection";
import CategorySection from "./sections/CategorySection";
import { ContentProvider } from "./context/ContentContext";
import "./App.scss";

function App() {
  return (
    <>
      <ContentProvider>
        <HeroSection />
        <CategorySection />
      </ContentProvider>
    </>
  );
}

export default App;
