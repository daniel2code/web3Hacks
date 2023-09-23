export const truncateText = (text, len) => {
  if (text.length >= 30) {
    return text.slice(0, len) + "...";
  } else {
    return text.slice(0, text.length);
  }
};
