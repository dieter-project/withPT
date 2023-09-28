"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Wrap = styled.div`
  background-color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: auto;
`;

const ContentHeader = styled.div`
  background-color: white;
  position: fixed;
  width: 100%;
  height: 4.4rem;
  align-items: center;
  z-index: 100;
  display: flex;
`;

const ButtonHistoryBack = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-color: green;
`;

const RegisterTitle = styled.h2`
  line-height: 3rem;
  color: #222;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0;
`;

const ContentBody = styled.div`
  padding: 6.8rem 1.6rem 3.2rem 1.6rem;
`;

const ContentInnerBody = styled.div``;

const SignupFinWrap = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

const RegisterStepInfo = styled.p`
  color: #222;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
  white-space: nowrap;
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
  line-height: 3rem;
  width: 100%;
  background-color: var(--primary);
  color: white;
  padding: 0 1.6rem;
  text-align: center;
`;

export default function finished() {
  return (
    <Wrap>
      <ContentHeader>
        <ButtonHistoryBack type="button">뒤</ButtonHistoryBack>

        <RegisterTitle>가입완료</RegisterTitle>
      </ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          <SignupFinWrap>
            <Image
              style={{ display: "inline-block" }}
              src="/lastStep.jpg"
              alt="회원가입 완료 사진"
              width="50"
              height="50"
            />
            <RegisterStepInfo>회원가입이 완료 되었어요!</RegisterStepInfo>
            <RegisterStepInfo
              style={{
                fontSize: "1rem",
                color: "#797979",
                fontWeight: "normal",
              }}
            >
              함께 목표를 향해 열심히 노력해보아요 :)
            </RegisterStepInfo>
          </SignupFinWrap>
          <div
            style={{
              padding: "1rem 2rem",
              backgroundColor: "gray",
              height: "20rem",
            }}
          ></div>
          <ButtonAreaFixed>
            <NextStep href="/trainer/signup/finished">위피티 시작하기</NextStep>
          </ButtonAreaFixed>
        </ContentInnerBody>
      </ContentBody>
    </Wrap>
  );
}
