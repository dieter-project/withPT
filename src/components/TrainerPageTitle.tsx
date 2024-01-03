import { BaseHeader } from "@/styles/Layout";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React from "react";
import { styled } from "styled-components";
import beforePage from "../../public/icons/beforePage.png";
import Image from "next/image";

interface Props {
  title: string;
}

const TitleWrap = styled(BaseHeader)`
  div {
    position: absolute;
    left: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
  }
  button {
    width: 0.75rem;
    height: 0.75rem;
    border-left: 2px solid var(--black);
    border-bottom: 2px solid var(--black);
    transform: rotate(45deg);
    overflow: hidden;
    text-indent: -999px;
  }
  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: var(--font-semibold);
  }
`;

const ContentHeader = styled.div`
  background-color: white;
  position: fixed;
  width: 100%;
  height: 4.4rem;
  padding: 0 1.3rem;
  align-items: center;
  z-index: 100;
  display: flex;
  justify-content: space-between;
`;

const ButtonHistoryBack = styled.button`
  width: 2.4rem;
  height: 2.4rem;
`;

const SignupTitle = styled.h4`
  line-height: 3rem;
  color: #222;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0;
`;

const Transparent = styled.div`
  color: transparent;
`;

const PageTitle: React.FC<Props> = ({ title }) => {
  const router = useRouter();

  return (
    <ContentHeader>
      <ButtonHistoryBack onClick={() => router.back()}>
        <Image src={beforePage} alt="이전 페이지 이미지" />
      </ButtonHistoryBack>
      <SignupTitle>{title}</SignupTitle>
      <Transparent>투명</Transparent>
    </ContentHeader>
  );
};

export default PageTitle;
