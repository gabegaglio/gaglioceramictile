import { useState } from "react";

export const useDragAndDrop = (projects, setProjects) => {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, project) => {
    setDraggedItem(project);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", "");

    // Create a live preview of the image being dragged
    const dragPreview = document.createElement("div");
    dragPreview.style.width = "200px";
    dragPreview.style.height = "150px";
    dragPreview.style.borderRadius = "12px";
    dragPreview.style.overflow = "hidden";
    dragPreview.style.boxShadow =
      "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)";
    dragPreview.style.border = "2px solid rgba(255, 255, 255, 0.3)";
    dragPreview.style.position = "absolute";
    dragPreview.style.top = "-1000px";
    dragPreview.style.left = "-1000px";
    dragPreview.style.zIndex = "9999";

    // Create the image element
    const img = document.createElement("img");
    img.src = project.src;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.opacity = "0.9";

    // Create overlay with project info
    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.bottom = "0";
    overlay.style.left = "0";
    overlay.style.right = "0";
    overlay.style.background =
      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)";
    overlay.style.color = "white";
    overlay.style.padding = "8px";
    overlay.style.fontSize = "12px";
    overlay.style.fontWeight = "500";

    const title = document.createElement("div");
    title.textContent = project.title;
    title.style.marginBottom = "2px";

    const category = document.createElement("div");
    category.textContent = project.category;
    category.style.opacity = "0.8";
    category.style.fontSize = "10px";
    category.style.textTransform = "capitalize";

    overlay.appendChild(title);
    overlay.appendChild(category);

    dragPreview.appendChild(img);
    dragPreview.appendChild(overlay);

    // Add to body temporarily
    document.body.appendChild(dragPreview);

    // Set the custom drag image
    e.dataTransfer.setDragImage(dragPreview, 100, 75);

    // Remove the preview element after a short delay
    setTimeout(() => {
      if (document.body.contains(dragPreview)) {
        document.body.removeChild(dragPreview);
      }
    }, 0);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetProject) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.id === targetProject.id) return;

    setProjects((prev) => {
      const items = [...prev];
      const draggedIndex = items.findIndex(
        (item) => item.id === draggedItem.id
      );
      const targetIndex = items.findIndex(
        (item) => item.id === targetProject.id
      );

      // Remove dragged item and insert at target position
      const [removed] = items.splice(draggedIndex, 1);
      items.splice(targetIndex, 0, removed);

      return items;
    });

    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return {
    draggedItem,
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleDrop,
    handleDragEnd,
  };
};
