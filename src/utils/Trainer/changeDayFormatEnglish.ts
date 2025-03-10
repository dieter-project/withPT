export const changeDayFormatEnglish = (day: string): null | string => {
  switch (day) {
    case "월":
      return "MON";
    case "화":
      return "TUE";
    case "수":
      return "WED";
    case "목":
      return "THU";
    case "금":
      return "FRI";
    case "토":
      return "SAT";
    case "일":
      return "SUN";
    default:
      throw new Error(`day에 잘못된 값 입력됨`);
  }
};
