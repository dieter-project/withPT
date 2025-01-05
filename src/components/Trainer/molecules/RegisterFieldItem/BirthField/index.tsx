import { Controller, Control } from "react-hook-form";
import { ChangeEvent } from "react";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";
import LabelField from "@/components/trainer/molecules/LabelField";
import { NoIconInput } from "@/components/trainer/atoms/Input/Input.styles";

interface BirthFieldProps {
  control: Control<any>;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement>,
    field: "year" | "month" | "date",
  ) => void;
}

export const BirthField = ({ control, handleInputChange }: BirthFieldProps) => (
  <LabelField type="columnDefault" innertype="spaceBetween" label="생년월일">
    <Controller
      name="birth.year"
      control={control}
      rules={{ required: "연도를 입력해주세요" }}
      render={({ field }) => (
        <NoIconInput
          {...field}
          maxLength={4}
          inputMode="numeric"
          placeholder="YYYY"
          onChange={e => handleInputChange(e, "year")}
        />
      )}
    />
    <Icon name="slash" size={36} pd="0 4px" />
    <Controller
      name="birth.month"
      control={control}
      rules={{ required: "월을 입력해주세요" }}
      render={({ field }) => (
        <NoIconInput
          {...field}
          maxLength={2}
          inputMode="numeric"
          placeholder="MM"
          onChange={e => handleInputChange(e, "month")}
        />
      )}
    />
    <Icon name="slash" size={36} pd="0 4px" />
    <Controller
      name="birth.date"
      control={control}
      rules={{ required: "일을 입력해주세요" }}
      render={({ field }) => (
        <NoIconInput
          {...field}
          maxLength={2}
          inputMode="numeric"
          placeholder="DD"
          onChange={e => handleInputChange(e, "date")}
        />
      )}
    />
  </LabelField>
);
