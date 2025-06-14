import { UseFormRegister, FieldError } from "react-hook-form";
import { NoIconInput } from "@/components/trainer/atoms/input/Input.styles";
import LabelField from "@/components/trainer/molecules/LabelField";

interface NameFieldProps {
  register: UseFormRegister<any>;
  errors: {
    name?: FieldError;
  };
}

export const NameField = ({ register, errors }: NameFieldProps) => (
  <LabelField type="columnDefault" label="이름">
    <NoIconInput
      {...register("name", {
        required: "이름을 입력해주세요",
        minLength: { value: 2, message: "이름은 2자 이상이어야 합니다" },
        pattern: {
          value: /^[가-힣a-zA-Z]+$/,
          message: "올바른 이름을 입력해주세요",
        },
      })}
      placeholder="이름을 입력해주세요"
    />
    {errors.name && <span>{errors.name.message}</span>}
  </LabelField>
);
