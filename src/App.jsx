import useClickSound from "./hooks/useClickSound";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useClickSound();
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />

      <Footer />
    </>
  );
}

export default App;