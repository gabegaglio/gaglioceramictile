import React, { useState, useEffect } from "react";

function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // Preload all images
    const preloadImages = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
      });
    });

    Promise.all(preloadImages)
      .then((loaded) => setLoadedImages(loaded))
      .catch((error) => console.error("Error loading images:", error));
  }, [images]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    const numImages = window.innerWidth >= 768 ? 3 : 1; // Show 3 on md screens and up, 1 on mobile
    for (let i = 0; i < numImages; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  if (loadedImages.length === 0) {
    return (
      <div className="w-full py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light text-center text-gray-800 mb-12">
            Our Work
          </h2>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4">
      <div className="w-fit max-w-3xl md:max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light text-center text-gray-800 mb-12">
          Our Work
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-transform duration-500 ease-in-out">
            {getVisibleImages().map((image, index) => (
              <div
                key={index}
                className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg max-w-sm md:max-w-none mx-auto"
              >
                <img
                  src={image}
                  alt={`Gallery image ${
                    ((currentIndex + index) % images.length) + 1
                  }`}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
