"use client";
import { TrainerLayout } from "@/app/trainer/layout";
import { Typography } from "@/components/trainer/atoms/Typography/TypoGraphy.styles";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import Wrapper from "@/components/trainer/molecules/Wrapper/Wrapper";

export default function finished() {
  const title = "가입 완료";
  return (
    <TrainerLayout
      title={title}
      hasHeader={true}
      hasFooter={false}
      variant="withBack"
    >
      <Wrapper type="column" ai="center">
        <Icon name="IconCheckCirCircleActive" size={36} />
        <Typography variant="title1" fw={600}>
          회원가입이 완료되었어요!
        </Typography>
        <Typography variant="heading2" fw={400}>
          위피티로 편리하게 수업관리를 시작해보세요
        </Typography>
      </Wrapper>
      <ButtonAreaFixed nextStepUrl="/trainer/main" label="위피티 시작하기" />
    </TrainerLayout>
  );
}
