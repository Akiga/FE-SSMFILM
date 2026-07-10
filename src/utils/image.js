export const getImageUrl = (url) => {
  if (!url) return "";

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://img.phimapi.com/${url}`;
};