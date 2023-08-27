"use client";

import styled from "styled-components";

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

const NextStepButton = styled.button`
  background-color: #7f7f7f;
  color: #ffffff;
  font-weight: bold;
  padding: 0 1.6rem;
  height: 3rem;
  width: 100%;
  text-align: center;
  border-radius: 0.6rem;
`;

const NameInput = styled.input`
  width: 100%;
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
          <div style={{ marginBottom: "1rem", textAlign: "center" }}>
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
          </div>
          <div
            style={{
              padding: "1rem 2rem",
              backgroundColor: "gray",
              height: "20rem",
            }}
          ></div>
          <ButtonAreaFixed>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <NextStepButton>위피티 시작하기</NextStepButton>
            </div>
          </ButtonAreaFixed>
        </ContentInnerBody>
      </ContentBody>
    </Wrap>
  );
}
