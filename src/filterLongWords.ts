export const filterLongWords = (words: string[]): string[] => {
  const longWords = words.filter((word: string) => word.length > 5);
  return longWords;
};
