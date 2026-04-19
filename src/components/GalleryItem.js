import React from "react";
import { motion } from "framer-motion";
import { getHeightClass, lightboxDisplayCaption } from "../utils/galleryHelpers";

const GalleryItem = ({ project, index, onImageClick }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ opacity: { duration: 0.4, delay: index * 0.03 } }}
    className={`portfolio-item group relative ${getHeightClass(project.height)}`}
    onClick={() => onImageClick(project)}
  >
    <img
      src={project.src}
      alt={lightboxDisplayCaption(project.title)}
      className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
      draggable={false}
    />
    <div className="port-overlay">
      <div className="port-label">
        {lightboxDisplayCaption(project.title)}
      </div>
    </div>
  </motion.div>
);

export default GalleryItem;
