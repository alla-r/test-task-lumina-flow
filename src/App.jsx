import HeroSection from "./sections/HeroSection";
import { ContentProvider } from "./context/ContentContext";
import "./App.scss";

function App() {
  return (
    <>
      <ContentProvider>
        <HeroSection />
      </ContentProvider>
    </>
  );
}

export default App;
