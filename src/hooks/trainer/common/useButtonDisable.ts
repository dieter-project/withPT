import { useEffect, useState } from "react";

type ValidateFunction<T> = (data: T) => boolean;

export const useButtonDisable = <T>(data: T, validate: ValidateFunction<T>) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!validate(data));
  }, [data, validate]);

  return isButtonDisabled;
};
