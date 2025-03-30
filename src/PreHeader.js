import React from "react";

function PreHeader() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed flex w-full top-4 left-0 right-0 flex justify-center z-50">
      <nav className="w-fit sm:px-2 lg:px-6">
        <div className="flex justify-center space-x-1 md:space-x-4 py-4">
          <button
            onClick={() => scrollToSection("services")}
            className="text-black bg-white/20 backdrop-blur-xl rounded-lg hover:scale-110 hover:bg-white/30 px-3 py-2 text-sm md:text-lg font-light transition-all duration-200 shadow-lg border border-white/10 w-24 sm:w-28 md:w-32 flex items-center justify-center"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("gallery")}
            className="text-black bg-white/20 backdrop-blur-xl rounded-lg hover:scale-110 hover:bg-white/30 px-3 py-2 text-sm md:text-lg font-light transition-all duration-200 shadow-lg border border-white/10 w-24 sm:w-28 md:w-32 flex items-center justify-center"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-black bg-white/20 backdrop-blur-xl rounded-lg hover:scale-110 hover:bg-white/30 px-3 py-2 text-sm md:text-lg font-light transition-all duration-200 shadow-lg border border-white/10 w-24 sm:w-28 md:w-32 flex items-center justify-center"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("map")}
            className="text-black bg-white/20 backdrop-blur-xl rounded-lg hover:scale-110 hover:bg-white/30 px-3 py-2 text-sm md:text-lg font-light transition-all duration-200 shadow-lg border border-white/10 w-24 sm:w-28 md:w-32 flex items-center justify-center"
          >
            Location
          </button>
        </div>
      </nav>
    </div>
  );
}

export default PreHeader;
