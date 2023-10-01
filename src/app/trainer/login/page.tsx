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
  const { data, status } = useSession();

  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <h1> hi {data.user.name}</h1>
        <img src={data.user.image} alt={data.user.name + " photo"} />
        <button onClick={() => signOut()}>sign out</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>sign in with gooogle</button>
    </div>
  );
}
