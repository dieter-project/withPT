import {
  Control,
  UseFormRegister,
  FieldErrors,
  FieldError,
} from "react-hook-form";
import { ChangeEvent } from "react";
import Wrapper from "@/components/trainer/molecules/Wrapper/Wrapper";
import { NameField } from "../../molecules/RegisterFieldItem/NameField";
import { BirthField } from "../../molecules/RegisterFieldItem/BirthField";
import { GenderField } from "../../molecules/RegisterFieldItem/GenderField";

interface FormFieldsProps {
  form: {
    control: Control<any>;
    register: UseFormRegister<any>;
    formState: {
      errors: FieldErrors<any>;
    };
  };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement>,
    field: "year" | "month" | "date",
  ) => void;
}

export const RegistrationFormFields = ({
  form,
  handleInputChange,
}: FormFieldsProps) => {
  const {
    control,
    register,
    formState: { errors },
  } = form;

  return (
    <Wrapper type="columnDefault" gap="20px">
      <NameField
        register={register}
        errors={{ name: errors.name as FieldError | undefined }}
      />
      <BirthField control={control} handleInputChange={handleInputChange} />
      <GenderField register={register} />
    </Wrapper>
  );
};
