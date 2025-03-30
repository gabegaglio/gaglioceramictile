import React from "react";
import Header from "./Header";
import PreHeader from "./PreHeader";
import Services from "./Services";
import CardContainer1 from "./CardContainer1";
import CardContainer2 from "./CardContainer2";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Map from "./Map";
function App() {
  const galleryImages = [
    `${process.env.PUBLIC_URL}/images/gal1.jpg`,
    `${process.env.PUBLIC_URL}/images/gal2.jpg`,
    `${process.env.PUBLIC_URL}/images/gal3.jpg`,
    `${process.env.PUBLIC_URL}/images/gal4.jpg`,
    `${process.env.PUBLIC_URL}/images/gal5.jpg`,
    `${process.env.PUBLIC_URL}/images/gal6.jpg`,
    `${process.env.PUBLIC_URL}/images/gal7.jpg`,
    `${process.env.PUBLIC_URL}/images/gal8.jpg`,
    `${process.env.PUBLIC_URL}/images/gal9.jpg`,
    `${process.env.PUBLIC_URL}/images/gal10.jpg`,
    `${process.env.PUBLIC_URL}/images/gal11.jpg`,
    `${process.env.PUBLIC_URL}/images/gal12.jpg`,
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-custom-gradient">
      <PreHeader />
      <Header />
      <CardContainer1 />
      <section id="services" className="py-20">
        <Services />
      </section>
      <CardContainer2 />
      <main>
        <section id="gallery" className="py-20">
          <Gallery images={galleryImages} />
        </section>

        <section id="map" className="">
          <Map />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
