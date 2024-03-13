export const defaultRenderer = (value) => {
  if (!value && value !== 0) return "---";
  return value;
};