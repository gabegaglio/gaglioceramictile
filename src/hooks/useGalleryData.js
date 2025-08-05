import { useState } from "react";

export const useGalleryData = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [projects, setProjects] = useState([
    // Hero/Featured Projects
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/kitchen.jpg`,
      title: "Full Renovations",
      category: "kitchen",
      height: "tall",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/bathroom2.jpg`,
      title: "Luxury Bathroom Renovation",
      category: "bathroom",
      height: "medium",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/fireplace1.jpg`,
      title: "Modern Look",
      category: "fireplace",
      height: "tall",
    },
    // Gallery Projects with varied heights
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/images/gal1.jpg`,
      title: "Elegant & Seamless",
      category: "kitchen",
      height: "short",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/images/gal2.jpg`,
      title: "Contemporary Design",
      category: "kitchen",
      height: "medium",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/gal3.jpg`,
      title: "Custom Installation",
      category: "kitchen",
      height: "short",
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/gal4.jpg`,
      title: "Geometric Patterns",
      category: "bathroom",
      height: "tall",
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/images/gal5.jpg`,
      title: "Natural Looks",
      category: "bathroom",
      height: "medium",
    },
    {
      id: 9,
      src: `${process.env.PUBLIC_URL}/images/gal6.jpg`,
      title: "Modern Aesthetics",
      category: "bathroom",
      height: "short",
    },
    {
      id: 10,
      src: `${process.env.PUBLIC_URL}/images/gal7.jpg`,
      title: "Professional Finish",
      category: "bathroom",
      height: "medium",
    },
    {
      id: 11,
      src: `${process.env.PUBLIC_URL}/images/gal8.jpg`,
      title: "Detailed Craftsmanship",
      category: "bathroom",
      height: "tall",
    },
    {
      id: 12,
      src: `${process.env.PUBLIC_URL}/images/gal9.jpg`,
      title: "Precise Craftsmanship",
      category: "bathroom",
      height: "short",
    },
    {
      id: 13,
      src: `${process.env.PUBLIC_URL}/images/gal10.jpg`,
      title: "Beautiful Stonework",
      category: "fireplace",
      height: "medium",
    },
    {
      id: 14,
      src: `${process.env.PUBLIC_URL}/images/gal11.jpg`,
      title: "Expert Installation",
      category: "fireplace",
      height: "short",
    },
    {
      id: 15,
      src: `${process.env.PUBLIC_URL}/images/gal12.jpg`,
      title: "Stunning Results",
      category: "fireplace",
      height: "tall",
    },
    {
      id: 16,
      src: `${process.env.PUBLIC_URL}/images/flooring.jpg`,
      title: "Beautiful Flooring",
      category: "flooring",
      height: "medium",
    },
    {
      id: 17,
      src: `${process.env.PUBLIC_URL}/images/niche.jpg`,
      title: "Custom Niche Design",
      category: "bathroom",
      height: "medium",
    },
    {
      id: 18,
      src: `${process.env.PUBLIC_URL}/images/backsplash.jpg`,
      title: "Artistic Backsplash",
      category: "kitchen",
      height: "short",
    },
  ]);

  const categories = [
    { id: "all", name: "All Work" },
    { id: "kitchen", name: "Kitchens" },
    { id: "bathroom", name: "Bathrooms" },
    { id: "fireplace", name: "Fireplaces" },
    { id: "flooring", name: "Flooring" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return {
    projects,
    setProjects,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredProjects,
  };
};
