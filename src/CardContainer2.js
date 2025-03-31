import React, { useState, useEffect, useRef } from "react";

function CardContainer2() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [inViewCards, setInViewCards] = useState([]);
  const cardRefs = useRef([]);

  const cards = [
    {
      title: "Backsplashes",
      image: `${process.env.PUBLIC_URL}/images/backsplash.jpg`,
    },
    {
      title: "Niches",
      image: `${process.env.PUBLIC_URL}/images/niche.jpg`,
    },
    {
      title: "Fireplaces",
      image: `${process.env.PUBLIC_URL}/images/fireoven.jpg`,
    },
    {
      title: "Walls",
      image: `${process.env.PUBLIC_URL}/images/wall.jpg`,
    },
  ];

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, cards.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && !inViewCards.includes(index)) {
            setInViewCards((prev) => [...prev, index]);
          } else if (!entry.isIntersecting && inViewCards.includes(index)) {
            setInViewCards((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [inViewCards]);

  return (
    <div className="flex justify-center items-center py-15 px-4">
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group"
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="relative overflow-hidden rounded-2xl shadow-lg bg-white/10 backdrop-blur-md p-8 transition-all duration-300 hover:bg-white/20 cursor-pointer"
              onClick={() => setSelectedImage(card.image)}
            >
              <div
                className={`absolute inset-0 ${
                  inViewCards.includes(index) && hoveredIndex !== index
                    ? "opacity-100"
                    : "opacity-0"
                } transition-opacity duration-300`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <h3
                className={`text-3xl font-light text-center ${
                  inViewCards.includes(index) && hoveredIndex !== index
                    ? "text-white"
                    : "text-gray-800"
                } transition-colors duration-300 relative z-10`}
              >
                {card.title}
              </h3>
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/30 transition-all duration-300 z-5"></div>
              )}
            </div>
          </div>
        ))}
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

export default CardContainer2;
