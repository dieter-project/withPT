import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { useButtonDisable } from "@/hooks/trainer/common/useButtonDisable";

interface Trbirth {
  year: string;
  month: string;
  date: string;
}

interface TrInfo {
  name: string;
  birth: Trbirth;
  sex: string;
}

export const signup1 = () => {
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState<TrInfo>({
    name: "",
    birth: { year: "", month: "", date: "" },
    sex: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    birth: { year: false, month: false, date: false },
    sex: false,
  });

  const isButtonDisabled = useButtonDisable(inputData, data => {
    return (
      data.name.length > 0 &&
      typeof data.birth !== "string" &&
      data.birth.year.length === 4 &&
      data.birth.month.length > 0 &&
      data.birth.date.length > 0 &&
      data.sex.length > 0
    );
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData(prevState => ({
      ...prevState,
      [name]: name === "name" || name === "sex" ? value : prevState[name],
      birth:
        name === "year" || name === "month" || name === "date"
          ? {
              ...prevState.birth,
              [name]: value.replace(/[^0-9]/g, ""),
            }
          : prevState.birth,
    }));
  };

  const handleNext = () => {
    const newErrors = {
      name: inputData.name.trim() === "",
      birth: {
        year: inputData.birth.year.length !== 4,
        month: inputData.birth.month.length === 0,
        date: inputData.birth.date.length === 0,
      },
      sex: inputData.sex === "",
    };

    setErrors(newErrors);

    if (
      newErrors.name ||
      newErrors.birth.year ||
      newErrors.birth.month ||
      newErrors.birth.date ||
      newErrors.sex
    ) {
      return;
    }

    const birthJoin = `${inputData.birth.year}-${inputData.birth.month.padStart(
      2,
      "0",
    )}-${inputData.birth.date.padStart(2, "0")}`;

    dispatch(
      signupActions.saveSignupState({
        name: inputData.name.trim(),
        birth: birthJoin,
        sex: inputData.sex,
      }),
    );
  };

  return {
    inputData,
    handleInputChange,
    handleNext,
    isButtonDisabled,
    errors,
  };
};
