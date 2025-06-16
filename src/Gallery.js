import React, { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // Gallery images
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

  return (
    <div className="w-full px-4">
      <div className="flex flex-col items-center justify-center w-fit max-w-3xl md:max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light text-center text-black mb-12">
          Our Work
        </h2>

        <Carousel className="flex justify-center w-3/4 md:w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <div className="p-1">
                  <div
                    className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-none bg-white/30 backdrop-blur-lg hover:bg-white transition-all duration-300 hover:scale-110" />
          <CarouselNext className="border-none bg-white/30 backdrop-blur-lg hover:bg-white transition-all duration-300 hover:scale-110" />
        </Carousel>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <div className="relative max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
