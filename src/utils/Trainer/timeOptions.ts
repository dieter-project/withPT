export const generateTimeOptions = () => {
  const timeOptions = [];
  for (let hour = 0; hour <= 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      timeOptions.push(`${formattedHour}:${formattedMinute}`);
    }
  }
  return timeOptions;
};

export const daysOrder = ["월", "화", "수", "목", "금", "토", "일"];
