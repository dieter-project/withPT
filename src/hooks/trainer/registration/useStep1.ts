import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { getLastDayOfMonth } from "@/utils/Trainer/getLastDayOfMonth";

interface Step1FormData {
  name: string;
  birth: {
    year: string;
    month: string;
    date: string;
  };
  sex: "MAN" | "WOMAN";
}

export const useStep1 = () => {
  const router = useRouter();
  const form = useForm<Step1FormData>({
    defaultValues: {
      name: "",
      birth: { year: "", month: "", date: "" },
      sex: "",
    },
    mode: "onChange",
  });

  const { watch, setValue } = form;
  const watchYear = watch("birth.year");
  const watchMonth = watch("birth.month");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "year" | "month" | "date",
  ) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    const maxLength = field === "year" ? 4 : 2;

    if (field === "month") {
      const monthNum = parseInt(value);
      if (monthNum > 12) {
        value = "12";
      } else if (value === "00") {
        value = "01";
      } else if (value.length === 2 && monthNum === 0) {
        value = "01";
      }
    } else if (field === "date") {
      if (watchYear && watchMonth) {
        const lastDay = getLastDayOfMonth(watchYear, watchMonth);
        const dateNum = parseInt(value);
        if (dateNum > lastDay) {
          value = lastDay.toString();
        } else if (value === "00" || (value.length === 2 && dateNum === 0)) {
          value = "01";
        }
      }
    }

    setValue(`birth.${field}`, value);

    if (value.length === maxLength) {
      const form = e.target.form;
      const nextField = {
        year: "birth.month",
        month: "birth.date",
        date: "sex",
      }[field];

      if (nextField) {
        const nextElement = form?.querySelector(`input[name="${nextField}"]`);
        if (nextElement instanceof HTMLElement) {
          nextElement.focus();
        }
      }
    }
  };

  const onSubmit = (data: Step1FormData) => {
    router.push("/trainer/registration/step2");
  };

  return {
    form,
    handleInputChange,
    onSubmit,
  };
};
