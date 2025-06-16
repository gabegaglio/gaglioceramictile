import React from "react";
import Header from "./Header";
import PreHeader from "./PreHeader";
import Services from "./Services";
import CardContainer1 from "./CardContainer1";
import CardContainer2 from "./CardContainer2";
import Gallery from "./Gallery";
import Contact from "./Contact";
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
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-200 to-blue-300 text-black">
        <PreHeader />
        <Header />
        <CardContainer1 />
        <section id="services" className="py-20">
          <Services />
        </section>
        <CardContainer2 />
        <main>
          <section id="gallery" className="py-20">
            <Gallery />
          </section>
        </main>
        <Contact />
      </div>
    </LazyMotion>
  );
}

export default App;
