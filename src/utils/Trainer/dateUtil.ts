export const dayOrder = ["월", "화", "수", "목", "금", "토", "일"];

export const formatDays = (days: string[]): string => {
  const sortedDays = [...days].sort(
    (a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b),
  );
  return sortedDays.join("/");
};
