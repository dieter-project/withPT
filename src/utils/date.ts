import { format } from "date-fns";
import { ko } from "date-fns/locale";

export const dateText = (date: String) => {
  if (typeof date === "string") {
    const d = new Date(date);
    const convertDate = format(d, "yyyy년 MM월 dd일 (EEE)", { locale: ko });
    return convertDate;
  }
};
