import React from "react";
import Header from "./components/Header";
import StatsBand from "./components/StatsBand";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import { LazyMotion, domAnimation } from "framer-motion";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="gct-site min-h-screen w-full overflow-x-hidden">
        <Header scrollToSection={scrollToSection} />

        <Services scrollToSection={scrollToSection} />

        <StatsBand />

        <main className="w-full">
          <Gallery />
        </main>

        <AboutSection scrollToSection={scrollToSection} />

        <CTASection scrollToSection={scrollToSection} />

        <Contact />

        <footer className="gct-footer">
          <div className="footer-logo">
            <em>Gaglio</em> Ceramic Tile
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} Gaglio Ceramic Tile. All rights reserved.
          </div>
          <div className="footer-links">
            <button type="button" onClick={() => scrollToSection("gallery")}>
              Gallery
            </button>
            <button type="button" onClick={() => scrollToSection("services")}>
              Services
            </button>
            <button type="button" onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>
        </footer>
      </div>
    </LazyMotion>
  );
}

export default App;
