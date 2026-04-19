/** Strip leading "Room 12 —" style tag; keep only the human-readable description. */
export function lightboxDisplayCaption(title) {
  if (!title) return "";
  const sep = " — ";
  const i = title.indexOf(sep);
  if (i === -1) return title;
  const rest = title.slice(i + sep.length).trim();
  return rest || title;
}

// Get height classes for fluid bento layout (compact on mobile + desktop)
export const getHeightClass = (height) => {
  switch (height) {
    case "tall":
      return "h-[180px] md:h-[260px] lg:h-[300px]";
    case "medium":
      return "h-[130px] md:h-[190px] lg:h-[220px]";
    case "short":
      return "h-[96px] md:h-[140px] lg:h-[170px]";
    default:
      return "h-[130px] md:h-[190px] lg:h-[220px]";
  }
};
