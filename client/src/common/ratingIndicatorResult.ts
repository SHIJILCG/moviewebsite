

export const ratingIndicatorResult = (num: number) => {
  if (num === 10) return "border-green-400";
  if (num < 10 && num >= 6)
    return "border-t-green-400 border-r-green-400 border-b-green-400";
  if (num < 7 && num >= 2) return "border-r-green-400 border-t-green-400";
  if (num < 2 && num > 0) return "border-t-green-400";
};
