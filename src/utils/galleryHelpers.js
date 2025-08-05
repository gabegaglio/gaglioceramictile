// Get height classes for fluid bento layout
export const getHeightClass = (height) => {
  switch (height) {
    case "tall":
      return "h-[240px] md:h-[320px] lg:h-[400px]";
    case "medium":
      return "h-[180px] md:h-[240px] lg:h-[280px]";
    case "short":
      return "h-[120px] md:h-[180px] lg:h-[220px]";
    default:
      return "h-[180px] md:h-[240px] lg:h-[280px]";
  }
};
