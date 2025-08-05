import React from "react";
import { motion } from "framer-motion";
import { getHeightClass } from "../utils/galleryHelpers";

const GalleryItem = ({
  project,
  index,
  selectedCategory,
  draggedItem,
  resizingItem,
  dragHandlers,
  resizeHandlers,
  onImageClick,
}) => {
  const {
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleDrop,
    handleDragEnd,
  } = dragHandlers;

  const { handleResizeStart } = resizeHandlers;

  return (
    <motion.div
      key={`${project.id}-${selectedCategory}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: draggedItem?.id === project.id ? 0.3 : 1,
        y: 0,
        scale: draggedItem?.id === project.id ? 0.95 : 1,
      }}
      transition={{
        duration: 0.3,
        delay: index * 0.02,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid mb-3 md:mb-4 lg:mb-6 select-none ${getHeightClass(
        project.height
      )} ${resizingItem === project.id ? "ring-2 ring-blue-400/50" : ""}`}
      draggable={!resizingItem}
      onDragStart={(e) => handleDragStart(e, project)}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDrop={(e) => handleDrop(e, project)}
      onDragEnd={handleDragEnd}
      onClick={() => !draggedItem && !resizingItem && onImageClick(project)}
    >
      <div className="w-full h-full">
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Drag-to-Resize Handle - Bottom Right Corner */}
        <div
          className={`absolute bottom-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-se-resize ${
            resizingItem === project.id ? "opacity-100 scale-110" : ""
          }`}
          onMouseDown={(e) => handleResizeStart(e, project.id)}
        >
          <div className="w-full h-full glass-overlay rounded-md shadow-lg hover:bg-white/20 transition-colors duration-200 relative">
            {/* Resize grip lines */}
            <div className="absolute inset-0 flex items-end justify-end p-0.5">
              <div className="space-y-0.5">
                <div className="flex space-x-0.5">
                  <div className="w-0.5 h-0.5 bg-white/70 rounded-full"></div>
                  <div className="w-0.5 h-0.5 bg-white/70 rounded-full"></div>
                </div>
                <div className="flex space-x-0.5">
                  <div className="w-0.5 h-0.5 bg-white/70 rounded-full"></div>
                  <div className="w-0.5 h-0.5 bg-white/70 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Glassmorphic Overlay Content */}
        <div
          className={`absolute inset-0 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none ${
            resizingItem === project.id ? "opacity-0" : ""
          }`}
        >
          <div className="glass-overlay rounded-xl p-4 w-full shadow-lg">
            <h3 className="text-white font-medium text-sm md:text-lg mb-2">
              {project.title}
            </h3>
            <p className="text-white/80 text-xs md:text-sm capitalize">
              {project.category}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
