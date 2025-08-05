import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGalleryData } from "../hooks/useGalleryData";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { useResize } from "../hooks/useResize";
import GalleryItem from "./GalleryItem";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Custom hooks
  const {
    projects,
    setProjects,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredProjects,
  } = useGalleryData();

  const dragHandlers = useDragAndDrop(projects, setProjects);
  const resizeHandlers = useResize(projects, setProjects);

  return (
    <section id="gallery" className="py-8 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-4 md:mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12">
            Discover our latest projects showcasing exceptional craftsmanship
            and attention to detail in every installation.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white/10 backdrop-blur-md text-gray-900 border-white/20 hover:bg-white/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Conditional Layout: Masonry for "All Work", Grid for Filtered Categories */}
        <AnimatePresence mode="wait">
          {selectedCategory === "all" ? (
            // Masonry Layout for "All Work"
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
                  draggedItem={dragHandlers.draggedItem}
                  resizingItem={resizeHandlers.resizingItem}
                  dragHandlers={dragHandlers}
                  resizeHandlers={resizeHandlers}
                  onImageClick={setSelectedImage}
                />
              ))}
            </motion.div>
          ) : (
            // Grid Layout for Filtered Categories
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${selectedCategory}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative group cursor-pointer break-inside-avoid mb-3 md:mb-4 lg:mb-6"
                  onClick={() => setSelectedImage(project)}
                >
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-square">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4">
                      <div className="glass-overlay rounded-lg p-2 md:p-3 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <h3 className="text-white font-medium text-sm md:text-base mb-1">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-xs md:text-sm capitalize">
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
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl md:text-4xl font-light text-gray-900 mb-6">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life with our
              expert craftsmanship.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-white/10 backdrop-blur-md rounded-t-2xl p-6 border border-white/20 border-b-0">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">
                      {selectedImage.title}
                    </h3>
                    <p className="text-white/70 capitalize">
                      {selectedImage.category}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors duration-300 text-white"
                  >
                    <svg
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

              {/* Modal Image */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-b-2xl border border-white/20 border-t-0 overflow-hidden">
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
