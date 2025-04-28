import {
  Control,
  UseFormRegister,
  FieldErrors,
  FieldError,
} from "react-hook-form";
import { ChangeEvent } from "react";
import Wrapper from "@/components/trainer/molecules/wrapper/Wrapper";
import { NameField } from "@/components/trainer/molecules/registerFieldItem/NameField";
import { BirthField } from "@/components/trainer/molecules/registerFieldItem/BirthField";
import { GenderField } from "@/components/trainer/molecules/registerFieldItem/GenderField";

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
