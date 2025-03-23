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
      <nav className="w-fit px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 py-4">
          <button
            onClick={() => scrollToSection("services")}
            className="text-black bg-white/10 backdrop-blur-md rounded-lg hover:scale-110 hover:bg-white/20 px-3 py-2 text-md md:text-lg font-light transition-all duration-200"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("gallery")}
            className="text-black bg-white/10 backdrop-blur-md rounded-lg hover:scale-110 mx-2 px-3 py-2 text-md md:text-lg font-light transition-all duration-200"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-black bg-white/10 backdrop-blur-md rounded-lg hover:scale-110 mx-2 px-3 py-2 text-md md:text-lg font-light transition-all duration-500"
          >
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
}

export default PreHeader;
