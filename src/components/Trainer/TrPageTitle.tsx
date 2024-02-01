import { useRouter } from "next/navigation";
import React from "react";
import { styled } from "styled-components";
import beforePage from "../../../public/icons/beforePage.png";
import Image from "next/image";

interface Props {
  title: string;
}

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
  width: 1.5rem;
  height: 1.5rem;
`;

const SignupTitle = styled.h4`
  line-height: 3rem;
  color: #222;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0;
`;

const Transparent = styled.div`
  color: transparent;
`;

const TrPageTitle: React.FC<Props> = ({ title }) => {
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

export default TrPageTitle;
