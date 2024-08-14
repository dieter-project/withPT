"use client";
import ContentHeader from "@/components/TrainerPageTitle";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import CheckIconPurple from "../../../../../public/Trainer/icons/checkIconPurple.png";

const Wrap = styled.div`
  background-color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: auto;
`;

const ContentBody = styled.div`
  padding: 6.8rem 1.6rem 3.2rem 1.6rem;
`;

const ContentInnerBody = styled.div``;

const SignupFinWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 14.12rem;
`;

const RegisterStepInfo = styled.p`
  color: #222;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.04rem;
  white-space: nowrap;
`;

const SignupFinishImg = styled(Image)`
  width: 2.375rem;
  height: 2.375rem;
  margin-bottom: 1rem;
`;

const ButtonAreaFixed = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  padding: 2.4rem 1.6rem 1.6rem;
  width: 100%;
  z-index: 100;
  background-color: transparent;
`;

const NextStep = styled(Link)`
  display: block;
  border: none;
  border-radius: 0.6rem;
  line-height: 3.5rem;
  width: 100%;
  background-color: var(--primary);
  color: white;
  padding: 0 1.6rem;
  text-align: center;
`;

export default function finished() {
  const title = "가입 완료";
  return (
    <Wrap>
      <ContentHeader title={title}></ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          <SignupFinWrap>
            <SignupFinishImg
              src={CheckIconPurple}
              alt="회원가입 완료 체크 버튼"
            />
            <RegisterStepInfo>회원가입이 완료 되었어요!</RegisterStepInfo>
            <RegisterStepInfo
              style={{
                fontSize: "1rem",
                color: "#797979",
                fontWeight: "normal",
              }}
            >
              위피티로 편리하게 수업관리를 시작해 보세요
            </RegisterStepInfo>
          </SignupFinWrap>

          <ButtonAreaFixed>
            <NextStep href="/trainer/main">위피티 시작하기</NextStep>
          </ButtonAreaFixed>
        </ContentInnerBody>
      </ContentBody>
    </Wrap>
  );
}
