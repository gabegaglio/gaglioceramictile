import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getHeightClass } from "../utils/galleryHelpers";

const GalleryItem = ({ project, index, selectedCategory, onImageClick }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const speeds = [25, -18, 30, -22, 20, -28, 18, -24];
  const speed = speeds[index % speeds.length];

  const y = useTransform(scrollYProgress, [0, 1], [speed, speed * -1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [speed * 0.01, speed * -0.01]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.96]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, rotate }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { duration: 0.4, delay: index * 0.03 },
      }}
      className={`group relative overflow-hidden cursor-pointer break-inside-avoid mb-3 md:mb-4 lg:mb-6 ${getHeightClass(
        project.height
      )}`}
      onClick={() => onImageClick(project)}
    >
      <div className="w-full h-full">
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute inset-0 flex items-end p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none">
          <div className="glass-overlay rounded-lg p-3 md:p-4 w-full">
            <h3 className="text-white font-medium text-sm md:text-base mb-1">
              {project.title}
            </h3>
            <p className="text-white/70 text-xs md:text-sm capitalize">
              {project.category}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
