import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGalleryData } from "../hooks/useGalleryData";
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
    <section id="gallery" className="py-16 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 font-medium mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-stone-800 mb-5">
            Portfolio
          </h2>
          <p className="text-base md:text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-14">
            Discover our latest projects showcasing exceptional craftsmanship
            and attention to detail in every installation.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 text-sm tracking-wide transition-all duration-300 rounded-sm ${
                  selectedCategory === category.id
                    ? "bg-stone-800 text-white"
                    : "text-stone-500 hover:text-stone-800 hover:bg-stone-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedCategory === "all" ? (
            <motion.div
              key="masonry"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 md:gap-4 lg:gap-6 space-y-3 md:space-y-4 lg:space-y-6"
            >
              {filteredProjects.map((project, index) => (
                <GalleryItem
                  key={`${project.id}-${selectedCategory}`}
                  project={project}
                  index={index}
                  selectedCategory={selectedCategory}
                  onImageClick={setSelectedImage}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${selectedCategory}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04,
                  }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(project)}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/30 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4">
                      <div className="glass-overlay rounded-lg p-2 md:p-3 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <h3 className="text-white font-medium text-sm md:text-base mb-0.5">
                          {project.title}
                        </h3>
                        <p className="text-white/70 text-xs md:text-sm capitalize">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20 md:mt-28"
        >
          <div className="max-w-3xl mx-auto py-12 md:py-16 border-t border-b border-stone-200">
            <h3 className="font-serif text-2xl md:text-4xl font-light text-stone-800 mb-5">
              Ready to Transform Your Space?
            </h3>
            <p className="text-base md:text-lg text-stone-500 mb-8 max-w-xl mx-auto">
              Let's discuss your project and bring your vision to life with our
              expert craftsmanship.
            </p>
            <a
              href="#contact"
              className="inline-block bg-stone-800 text-white text-sm tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-stone-700 transition-colors duration-300"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white/10 backdrop-blur-md p-5 border border-white/15 border-b-0">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-serif text-xl text-white mb-0.5">
                      {selectedImage.title}
                    </h3>
                    <p className="text-white/60 text-sm capitalize">
                      {selectedImage.category}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-white/60 hover:text-white p-2 transition-colors duration-200"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative bg-white/5 border border-white/15 border-t-0 overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
