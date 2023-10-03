"use client";
import styled from "styled-components";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { api } from "@/utils/axios";

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

const GoogleLoginButton = styled.button`
  display: block;
  padding: 1.3rem 0;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  background-color: white;
  color: black;
  font-size: 1.1rem;
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
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  console.log(code);

  const handleGetAuthCode = async () => {
    try {
      const response = await api.post(
        "http://43.200.45.234/api/v1/oauth/google",
        {
          authorizationCode: code,
          role: "TRAINER",
        },
      );
      console.log("response: ", response);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    console.log("code: ", code);
    handleGetAuthCode();
  }, []);

  return <div>구글보내주는 페이지</div>;
}
