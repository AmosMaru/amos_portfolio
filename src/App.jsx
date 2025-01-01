import About from "./components/about";
import Footer from "./components/Footer";
import Services from "./components/services";
import Achievements from "./Sections/Achievements";
import Contact from "./Sections/Contact";
import Home from "./Sections/Home";
import ProjecSection from "./Sections/Projects";
import SkillSection from "./Sections/Skills";

function App() {
  return (
    <>
      <Home />
      <About />
      <SkillSection />
      <ProjecSection />
      <Services />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
