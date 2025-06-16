import React from "react";

function PreHeader() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-6 md:transform-none z-50">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => scrollToSection("services")}
          className="text-black bg-white/20 backdrop-blur-md hover:bg-white/30 px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full border border-white/30 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Services
        </button>

        <button
          onClick={() => scrollToSection("gallery")}
          className="text-black bg-white/20 backdrop-blur-md hover:bg-white/30 px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full border border-white/30 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Gallery
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="text-white bg-black/60 backdrop-blur-md hover:bg-black/70 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-black/20"
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default PreHeader;
