import { useRouter } from "next/navigation";
import React from "react";
import { styled } from "styled-components";
import beforePage from "../../public/icons/beforePage.png";
import plusGray from "../../public/Trainer/icons/plusGray.png";
import Image from "next/image";

const ContentHeader = styled.div<{ variant?: Props["variant"] }>`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.4rem;
  padding: 0 1.3rem;
  align-items: center;
  z-index: 100;
  display: flex;
  justify-content: ${props =>
    props.variant === "center" ? "center" : "space-between"};
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

const PlusButton = styled.button`
  font-size: var(--font-xl);
`;

interface Props {
  title: string;
  variant?: "iconBack" | "center" | "plus";
  onPlusClick?: () => void;
}

const PageTitle: React.FC<Props> = ({
  title,
  variant = "iconBack" || "center" || "plus",
  onPlusClick,
}) => {
  const router = useRouter();
  return (
    <ContentHeader variant={variant}>
      {(variant === "iconBack" || variant === "plus") && (
        <ButtonHistoryBack onClick={() => router.back()}>
          <Image src={beforePage} alt="이전 페이지 이미지" />
        </ButtonHistoryBack>
      )}
      <SignupTitle>{title}</SignupTitle>
      {variant === "iconBack" && <Transparent>투명</Transparent>}
      {variant === "plus" && (
        <PlusButton onClick={onPlusClick}>
          <Image src={plusGray} alt="추가하는 뜻의 +버튼" />
        </PlusButton>
      )}
    </ContentHeader>
  );
};

export default PageTitle;
