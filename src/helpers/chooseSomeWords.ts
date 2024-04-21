export const chooseSomeWords = (
  text: string,
  start: number,
  end: number
): string => {
  return text.split(" ").slice(start, end).join(" ");
};
