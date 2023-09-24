"use client";

import styled from "styled-components";
import Link from "next/link";

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

const RegisterTitle = styled.h4`
  line-height: 3rem;
  color: #222;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0;
`;

const ContentBody = styled.div`
  padding: 6.8rem 1.6rem 3.2rem 1.6rem;
`;

const ContentInnerBody = styled.div``;

const RegisterStepInfo = styled.p`
  color: #222;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
`;

const SignupFormWrap = styled.div`
  margin-bottom: 1rem;
`;

const FormTitle = styled.h4`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.2rem;
`;

const TrGenderLabel = styled.label`
  width: 100%;
  text-align: center;
  border: none;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  line-height: 2.3rem;
  background-color: #efefef;
  margin: 0 0.3rem;
`;

const TrGenderRadio = styled.input`
  appearance: none;
`;

const RegisterOrder = styled.span`
  background-color: #f3f3f3;
  margin-right: 0.3rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: bold;
`;

const TrRegisItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
`;

const RegisterInput = styled.input`
  border: none;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  line-height: 2.3rem;
  background-color: #efefef;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin: 0 0.3rem;
`;

const ButtonAreaFixed = styled.div`
  position: fixed;
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
  background-color: #7f7f7f;
  color: white;
  padding: 0 1.6rem;
  text-align: center;
`;

export default function step1() {
  return (
    <Wrap>
      <ContentHeader>
        <ButtonHistoryBack type="button">뒤</ButtonHistoryBack>
        <RegisterTitle>회원가입</RegisterTitle>
      </ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          <div style={{ marginBottom: "0.2rem" }}>
            <RegisterOrder
              style={{
                backgroundColor: "#000000",
                color: "white",
                marginBottom: "0.2rem",
              }}
            >
              1
            </RegisterOrder>
            <RegisterOrder>2</RegisterOrder>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <RegisterStepInfo>안녕하세요 트레이너님!</RegisterStepInfo>
            <RegisterStepInfo style={{ fontSize: "1rem", color: "#797979" }}>
              아래 정보가 맞는지 확인해주세요.
            </RegisterStepInfo>
          </div>
          <form method="post" autoComplete="on">
            <SignupFormWrap>
              <FormTitle>이름</FormTitle>
              <TrRegisItemWrap>
                <RegisterInput
                  style={{ width: "100%" }}
                  type="text"
                  required
                ></RegisterInput>
              </TrRegisItemWrap>
            </SignupFormWrap>
            <SignupFormWrap>
              <FormTitle>생년월일</FormTitle>
              <TrRegisItemWrap>
                <RegisterInput
                  type="text"
                  placeholder="2023"
                  required
                ></RegisterInput>
                <span>/</span>
                <RegisterInput
                  type="text"
                  placeholder="12"
                  required
                ></RegisterInput>
                <span>/</span>
                <RegisterInput
                  type="text"
                  placeholder="31"
                  required
                ></RegisterInput>
              </TrRegisItemWrap>
            </SignupFormWrap>
            <SignupFormWrap>
              <FormTitle>성별</FormTitle>
              <TrRegisItemWrap>
                <TrGenderLabel htmlFor="radio-box1">
                  <TrGenderRadio
                    type="radio"
                    name="radio-box"
                    id="radio-box1"
                    value="남자"
                  ></TrGenderRadio>
                  남자
                </TrGenderLabel>
                <TrGenderLabel htmlFor="radio-box2">
                  <TrGenderRadio
                    type="radio"
                    name="radio-box"
                    id="radio-box2"
                    value="여자"
                  ></TrGenderRadio>{" "}
                  여자
                </TrGenderLabel>
              </TrRegisItemWrap>
            </SignupFormWrap>
          </form>
          <ButtonAreaFixed>
            <NextStep href="/trainer/register/step2">다음</NextStep>
          </ButtonAreaFixed>
        </ContentInnerBody>
      </ContentBody>
    </Wrap>
  );
}
