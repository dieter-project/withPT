"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { BaseContentWrap } from "@/styles/Layout";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import WePTLogo from "../../../../public/icons/weptLogo.png";

const LoginWrap = styled.div`
  background-color: beige;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const ContentBody = styled.div`
  height: 80rem;
  padding: 15rem 1.6rem 3.2rem 1.6rem;
  text-align: center;
  margin: 0 auto;
`;

const KaKaoLoginButton = styled.button`
  display: block;
  width: 100%;
  padding: 1.3rem 0;
  margin-bottom: 0.6rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #fee500;
  font-size: 1.1rem;
  font-weight: bold;
`;

const WePTLogoImg = styled(Image)`
  margin: 0 auto;
`;

// const GoogleLoginButton = styled.button`
//   display: block;
//   padding: 1.3rem 0;
//   width: 100%;
//   border: none;
//   border-radius: 0.5rem;
//   background-color: white;
//   color: black;
//   font-size: 1.1rem;
//   font-weight: bold;
// `;

const AskIfMember = styled.div`
  color: #acacac;
  font-size: 0.8rem;
`;

const LinkToMember = styled(Link)`
  color: #444444;
  font-weight: bold;
  font-size: 0.9rem;
`;

const LogninButton = styled.button`
  width: 100%;
  height: 56px;
  text-align: center;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`;

const GoogleLoginButton = styled(LogninButton)`
  border: 1px solid var(--border-gray);
  &::before {
    display: block;
    content: "";
    width: 1.375rem;
    height: 1.375rem;
    background: url(/svgs/icon_google.svg) no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export default function Login() {
  const onGoogleSocialLogin = (): any => {
    const redirectUri = "http://localhost:3000/api/callback/google";
    const restApiKey = process.env.GOOGLE_CLIENT_ID;
    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=666539117814-6j9ub78ger3dqj563l3juf2jh4qr591f.apps.googleusercontent.com&redirect_uri=${redirectUri}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
    window.location.href = googleURL;
  };

  const LogoWrap = styled.div`
    text-align: center;
    margin: 130px 0 100px;
  `;

  const LoginButtonWrap = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  `;

  const KakaoLoginButton = styled(LogninButton)`
    background-color: #fee500;
    &::before {
      display: block;
      content: "";
      width: 1.5rem;
      height: 1.5rem;
      background: url(/svgs/icon_kakao.svg) no-repeat;
      background-position: center;
      background-size: contain;
    }
  `;

  return (
    <>
      <BaseContentWrap>
        <LogoWrap>
          <WePTLogoImg
            src={WePTLogo}
            alt="식단 피드백 요청 이미지"
            width="100"
            height="100"
          />
        </LogoWrap>
        <LoginButtonWrap>
          <KakaoLoginButton
          // onClick={onKakaoSocialLogin}
          >
            카카오톡으로 시작하기
          </KakaoLoginButton>
          <GoogleLoginButton onClick={onGoogleSocialLogin}>
            Google로 시작하기
          </GoogleLoginButton>
          <div className="login">
            {/* <Link href="/">로그인</Link> */}
            <Link href="/">문의하기</Link>
          </div>
        </LoginButtonWrap>
      </BaseContentWrap>
    </>
  );
}
