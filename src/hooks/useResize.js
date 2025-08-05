import { useState, useEffect } from "react";

export const useResize = (projects, setProjects) => {
  const [resizingItem, setResizingItem] = useState(null);
  const [resizeStartY, setResizeStartY] = useState(0);
  const [initialHeight, setInitialHeight] = useState(null);

  // Determine size based on drag distance
  const getHeightFromDistance = (distance) => {
    if (distance < -50) return "short";
    if (distance > 50) return "tall";
    return "medium";
  };

  const handleResizeStart = (e, projectId) => {
    e.preventDefault();
    e.stopPropagation();

    const project = projects.find((p) => p.id === projectId);
    setResizingItem(projectId);
    setResizeStartY(e.clientY);
    setInitialHeight(project.height);

    document.body.style.cursor = "se-resize";
    document.body.style.userSelect = "none";
  };

  const handleResizeMove = (e) => {
    if (!resizingItem) return;

    const deltaY = e.clientY - resizeStartY;
    const newHeight = getHeightFromDistance(deltaY);

    setProjects((prev) =>
      prev.map((project) =>
        project.id === resizingItem
          ? { ...project, height: newHeight }
          : project
      )
    );
  };

  const handleResizeEnd = () => {
    if (resizingItem) {
      setResizingItem(null);
      setResizeStartY(0);
      setInitialHeight(null);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }
  };

  // Global mouse event listeners for resize
  useEffect(() => {
    if (resizingItem) {
      document.addEventListener("mousemove", handleResizeMove);
      document.addEventListener("mouseup", handleResizeEnd);

      return () => {
        document.removeEventListener("mousemove", handleResizeMove);
        document.removeEventListener("mouseup", handleResizeEnd);
      };
    }
  }, [resizingItem, resizeStartY]);

  return {
    resizingItem,
    handleResizeStart,
  };
};
