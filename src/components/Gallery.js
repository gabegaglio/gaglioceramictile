import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGalleryData } from "../hooks/useGalleryData";
import { lightboxDisplayCaption } from "../utils/galleryHelpers";
import GalleryItem from "./GalleryItem";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredProjects,
  } = useGalleryData();

  return (
    <section id="gallery">
      <div className="container">
        <div className="section-eyebrow">Our Work</div>
        <div className="section-title">
          <em>Portfolio</em>
        </div>
        <div className="section-body">
          Discover our latest projects showcasing exceptional craftsmanship and
          attention to detail in every installation.
        </div>

        <div className="gallery-social">
          <a
            className="gallery-social-link"
            href="https://instagram.com/gaglioceramictile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <span className="gallery-social-sep" aria-hidden="true">
            ·
          </span>
          <a
            className="gallery-social-link"
            href="https://facebook.com/gctile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>

        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`filter-btn${
                selectedCategory === category.id ? " active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="portfolio-masonry"
          >
            {filteredProjects.map((project, index) => (
              <GalleryItem
                key={`${project.id}-${selectedCategory}`}
                project={project}
                index={index}
                onImageClick={setSelectedImage}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="lightbox-inner"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={lightboxDisplayCaption(selectedImage.title)}
                className="w-full max-h-[62vh] object-contain bg-[var(--charcoal-mid)]"
              />
              <div className="lightbox-caption">
                {lightboxDisplayCaption(selectedImage.title)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
