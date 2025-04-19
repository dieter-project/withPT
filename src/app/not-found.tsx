"use client";

import { Button } from "@/styles/Button";
import { BaseContainer, BaseContentWrap } from "@/styles/Layout";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const NotFoundcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`
const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  text-align: center;
`

const AttentionMark = styled.div`
  width: 2.5rem;
  height: 2.25rem;
  background: url("/icons/attention.png") no-repeat center center;
  `;

const NotFoundText = styled.h2`
  font-size: 1.125rem;
  color: var(--primary);
  margin-top: 0.75rem;
  margin-bottom: 1.25rem;
`;

const BackButton = styled(Button)`
  width: 11.5rem;
`;

const NotFound = () => {
  const router = useRouter();
  return (
    <NotFoundcontainer>
      <NotFoundWrap>
        <AttentionMark />
        <NotFoundText>정보를 불러올 수 없습니다</NotFoundText>
        <BackButton $variant="outline" onClick={() => router.back()}>
          뒤로가기
        </BackButton>
      </NotFoundWrap>
    </NotFoundcontainer>
  );
};

export default NotFound;
