"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TrainerLayout } from "@/app/trainer/layout";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import { NoIconInput } from "@/styles/Trainer/TrainerInput";
import JoinStep from "@/components/trainer/TrSignUpStep";
import { FormRadio, Slash, StyledLabel } from "./style";
import LabelField from "@/components/trainer/molecules/LabelField/LabelField";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import { useRouter } from "next/navigation";
import Wrapper from "@/components/trainer/molecules/Wrapper/Wrapper";

interface SignUpFormData {
  name: string;
  birth: {
    year: string;
    month: string;
    date: string;
  };
  sex: "MAN" | "WOMAN";
}

// 해당 월의 마지막 날짜를 반환하는 함수
const getLastDayOfMonth = (year: string, month: string): number => {
  const y = parseInt(year);
  const m = parseInt(month);

  if (m === 2) {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 29 : 28;
  }
  return [4, 6, 9, 11].includes(m) ? 30 : 31;
};

export default function Step1() {
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({
    defaultValues: {
      name: "",
      birth: {
        year: "",
        month: "",
        date: "",
      },
      sex: "",
    },
    mode: "onChange",
  });

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
      } else {
        // 두 자리 숫자 입력 완료시에만 포맷팅
        if (value.length === 2) {
          if (monthNum === 0) value = "01";
        }
      }
    } else if (field === "date") {
      if (watchYear && watchMonth) {
        const lastDay = getLastDayOfMonth(watchYear, watchMonth);
        const dateNum = parseInt(value);
        if (dateNum > lastDay) {
          value = lastDay.toString();
        } else if (value === "00") {
          value = "01";
        } else {
          // 두 자리 숫자 입력 완료시에만 포맷팅
          if (value.length === 2) {
            if (dateNum === 0) value = "01";
          }
        }
      }
    }

    setValue(`birth.${field}`, value);

    // 자동 포커스 이동
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

  const onSubmit = (data: SignUpFormData) => {
    router.push("/trainer/signup/step2");
  };

  return (
    <TrainerLayout
      title="회원가입"
      hasHeader={true}
      hasFooter={false}
      variant="withBack"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <JoinStep active="1" />
        <TitleWrapper
          topTitle="안녕하세요. 트레이너님!"
          underTitle="아래 정보가 맞는지 확인해주세요."
        />

        <LabelField type="column" label="이름">
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

        <LabelField type="column" innertype="spaceBetween" label="생년월일">
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
          <Slash>/</Slash>
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
          <Slash>/</Slash>
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

        <LabelField type="column" label="성별">
          <Wrapper type="spaceBetween" gap="10px">
            <FormRadio>
              <input
                id="gender-male"
                type="radio"
                value="MAN"
                {...register("sex")}
              />
              <StyledLabel htmlFor="gender-male">남자</StyledLabel>
            </FormRadio>
            <FormRadio>
              <input
                id="gender-female"
                type="radio"
                value="WOMAN"
                {...register("sex")}
              />
              <StyledLabel htmlFor="gender-female">여자</StyledLabel>
            </FormRadio>
          </Wrapper>
        </LabelField>

        <ButtonAreaFixed
          isButtonDisabled={!isValid}
          onClick={handleSubmit(onSubmit)}
          label="다음"
        />
      </form>
    </TrainerLayout>
  );
}
