// 해당 월의 마지막 날짜를 반환하는 함수
export const getLastDayOfMonth = (year: string, month: string): number => {
  const y = parseInt(year);
  const m = parseInt(month);

  if (m === 2) {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 29 : 28;
  }
  return [4, 6, 9, 11].includes(m) ? 30 : 31;
};
