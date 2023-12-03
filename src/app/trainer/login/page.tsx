"use client";
import styled from "styled-components";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect } from "react";

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

  return (
    <div>
      <GoogleLoginButton onClick={onGoogleSocialLogin}>
        Google로 시작하기
      </GoogleLoginButton>
      {/* <button onClick={() => signIn("google")}>sign in with gooogle</button> */}
    </div>
  );
}
