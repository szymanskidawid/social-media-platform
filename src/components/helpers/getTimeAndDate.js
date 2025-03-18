export const getTimeAndDate = () => {
  const date = new Date();
  return date.toUTCString();
};
