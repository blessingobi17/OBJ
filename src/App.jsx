import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Hero homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}

export default App;
