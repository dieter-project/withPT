"use client";
import styled from "styled-components";
import Link from "next/link";

const Wrap = styled.div`
  background-color: beige;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const ContentBody = styled.div`
  padding: 6.8rem 1.6rem 3.2rem 1.6rem;
  text-align: center;
  margin: 0 auto;
`;

const KaKaoLoginButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 0.6rem;
  border-radius: 0.3rem;
  border: none;
  background-color: #fee500;
  font-size: 0.9rem;
  font-weight: bold;
`;

const GoogleLoginButton = styled.button`
  display: block;
  padding: 0.8rem;
  width: 100%;
  border: none;
  border-radius: 0.3rem;
  background-color: white;
  color: black;
  font-size: 0.9rem;
  font-weight: bold;
`;

const AskIfMember = styled.div`
  color: #acacac;
  font-size: 0.8rem;
`;

const LinkToMember = styled(Link)`
  color: #444444;
  font-weight: bold;
  font-size: 0.9rem;
`;

export default function Login() {
  return (
    <Wrap>
      <ContentBody>
        <div>
          <div
            style={{
              backgroundColor: "#D9D9D9",
              width: "80%",
              margin: "0 auto",
              height: "5rem",
            }}
          >
            {" "}
            ?
          </div>
          <div style={{ marginTop: "5rem" }}>
            <KaKaoLoginButton>카카오로 시작하기</KaKaoLoginButton>
            <GoogleLoginButton> 구글로 시작하기</GoogleLoginButton>
            <div
              style={{
                color: "#666666",
                marginTop: "0.5rem",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              문의하기
            </div>
          </div>
          <div style={{ marginTop: "5rem" }}>
            <AskIfMember>혹시 회원이신가요?</AskIfMember>
            <LinkToMember href="member/login">회원 회원가입</LinkToMember>
          </div>
        </div>
      </ContentBody>
    </Wrap>
  );
}
