import { useState } from "react";

import BootSequence from "./components/effects/BootSequence";
import CommandPalette from "./components/ui/CommandPalette";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded ? (
        <BootSequence onFinish={() => setLoaded(true)} />
      ) : (
        <>
          <CommandPalette />

          <Navbar />

          <Hero />

          <About />

          <Skills />

          <Projects />

          <Certificates />

          <Contact />

          <Footer />
        </>
      )}
    </>
  );
}

export default App;