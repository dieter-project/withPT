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

const RegisterStepInfo = styled.p`
  color: #222;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
  white-space: nowrap;
`;

const FormTitle = styled.h4`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

const RegisterOrder = styled.span`
  background-color: #f3f3f3;
  margin-right: 0.3rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: bold;
`;

const RegisterInput = styled.input`
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  line-height: 2.3rem;
  background-color: #efefef;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
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

const NextTimeButton = styled.button`
  background-color: #d9d9d9;
  padding: 0 1.6rem;
  margin-right: 0.2rem;
  height: 3rem;
  width: 45%;
  text-align: center;
  border-radius: 0.6rem;
`;

const NextStepButton = styled.button`
  background-color: #7f7f7f;
  padding: 0 1.6rem;
  height: 3rem;
  width: 45%;
  text-align: center;
  border-radius: 0.6rem;
`;

const NameInput = styled.input`
  width: 100%;
`;

export default function step2() {
  return (
    <Wrap>
      <ContentHeader>
        <ButtonHistoryBack type="button">뒤</ButtonHistoryBack>
        <RegisterTitle>회원가입</RegisterTitle>
      </ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          <div style={{ marginBottom: "0.2rem" }}>
            <RegisterOrder>1</RegisterOrder>
            <RegisterOrder
              style={{
                backgroundColor: "#000000",
                color: "white",
                marginBottom: "0.2rem",
              }}
            >
              2
            </RegisterOrder>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <RegisterStepInfo>정보를 지금 입력하시겠어요?</RegisterStepInfo>
            <RegisterStepInfo style={{ fontSize: "1rem", color: "#797979" }}>
              회원가입 후 마이페이지에서도 입력이 가능해요.
            </RegisterStepInfo>
          </div>
          <form method="post" autoComplete="on">
            <div>
              <FormTitle>경력</FormTitle>
              <RegisterInput
                placeholder="+"
                style={{ width: "100%" }}
                type="text"
                required
              ></RegisterInput>
            </div>
            <div>
              <FormTitle>학력</FormTitle>
              <div style={{ display: "flex", fontSize: "1.5rem" }}>
                {" "}
                <RegisterInput
                  placeholder="+"
                  style={{ width: "100%" }}
                  type="text"
                  required
                ></RegisterInput>
              </div>
            </div>
          </form>
          <ButtonAreaFixed>
            <div
              style={{
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Link href="/trainer/register/finished">
                <NextTimeButton>넘어가기</NextTimeButton>
              </Link>
              <Link href="/trainer/register/finished">
                <NextStepButton>입력완료</NextStepButton>
              </Link>
            </div>
          </ButtonAreaFixed>
        </ContentInnerBody>
      </ContentBody>
    </Wrap>
  );
}
