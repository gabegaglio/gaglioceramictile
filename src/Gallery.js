import React, { useEffect, useRef, useState } from 'react';

const Gallery = () => {
  const scrollContainerRef = useRef(null);
  const backRef = useRef(null);
  const nextRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const updateWidth = () => {
      if (scrollContainer) {
        setWidth(scrollContainer.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    const handleWheel = (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
      scrollContainer.style.scrollBehavior = 'auto';
    };

    const handleNextClick = () => {
      scrollContainer.style.scrollBehavior = 'smooth';
      scrollContainer.scrollLeft += width;
    };

    const handleBackClick = () => {
      scrollContainer.style.scrollBehavior = 'smooth';
      scrollContainer.scrollLeft -= width;
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel);
    }

    if (nextRef.current) {
      nextRef.current.addEventListener('click', handleNextClick);
    }

    if (backRef.current) {
      backRef.current.addEventListener('click', handleBackClick);
    }

    return () => {
      window.removeEventListener('resize', updateWidth);
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
      if (nextRef.current) {
        nextRef.current.removeEventListener('click', handleNextClick);
      }
      if (backRef.current) {
        backRef.current.removeEventListener('click', handleBackClick);
      }
    };
  }, [width]);

  return (
    <div className="galleryContainer">
      <h1 className="galleryHeader">Gallery</h1>
      <div className="gallery-wrap">
        <img id="back" src="images/back-arrow.svg" alt="Back" ref={backRef} />
        <div className="gallery" ref={scrollContainerRef}>
          <div>
            <span><img className="image" src="images/gal1.jpg" alt="Gallery 1" /></span>
            <span><img className="image" src="images/gal2.jpg" alt="Gallery 2" /></span>
            <span><img className="image" src="images/gal3.jpg" alt="Gallery 3" /></span>
          </div>
          <div>
            <span><img className="image" src="images/gal4.jpg" alt="Gallery 4" /></span>
            <span><img className="image" src="images/gal5.jpg" alt="Gallery 5" /></span>
            <span><img className="image" src="images/gal6.jpg" alt="Gallery 6" /></span>
          </div>
          <div>
            <span><img className="image" src="images/gal7.jpg" alt="Gallery 7" /></span>
            <span><img className="image" src="images/gal8.jpg" alt="Gallery 8" /></span>
            <span><img className="image" src="images/gal9.jpg" alt="Gallery 9" /></span>
          </div>
          <div>
            <span><img className="image" src="images/gal10.jpg" alt="Gallery 10" /></span>
            <span><img className="image" src="images/gal11.jpg" alt="Gallery 11" /></span>
            <span><img className="image" src="images/gal12.jpg" alt="Gallery 12" /></span>
          </div>
        </div>
        <img id="next" src="images/forward-arrow.svg" alt="Next" ref={nextRef} />
      </div>
    </div>
  );
};

export default Gallery;

    

