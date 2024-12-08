import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

// Assets
import beforePage from "/public/icons/beforePage.png";
import plusGray from "/public/Trainer/icons/plusGray.png";
import wePTLogo from "/public/Trainer/wePTLogo.png";
import alert from "/public/Trainer/Main/bell-solid.png";

// Types
type HeaderVariant = "default" | "withBack" | "center" | "plus" | "logo";

interface PageHeaderProps {
  title: string;
  variant?: HeaderVariant;
  onPlusClick?: () => void;
}

// Styled Components
const StyledHeader = styled.header<{ $variant?: HeaderVariant }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 4.4rem;
  padding: 0 1.3rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: ${({ $variant }) =>
    $variant === "center" ? "center" : "space-between"};
`;

const BackButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const Title = styled.h1`
  color: #222;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: -0.02em;
`;

const Spacer = styled.div`
  width: 1.5rem;
  visibility: hidden;
`;

const PlusButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: var(--font-xl);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PageHeader = ({
  title,
  variant = "default",
  onPlusClick,
}: PageHeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const renderLeft = () => {
    if (variant === "withBack" || variant === "plus") {
      return (
        <BackButton onClick={handleBack}>
          <Image src={beforePage} alt="뒤로 가기" width={24} height={24} />
        </BackButton>
      );
    }
    if (variant === "logo") {
      return <Image src={wePTLogo} alt="WePT 로고" width={70} height={30} />;
    }
    return null;
  };

  const renderCenter = () => {
    if (variant !== "logo") {
      return <Title>{title}</Title>;
    }
    return null;
  };

  const renderRight = () => {
    if (variant === "withBack") {
      return <Spacer />;
    }
    if (variant === "plus") {
      return (
        <PlusButton onClick={onPlusClick}>
          <Image src={plusGray} alt="추가" width={24} height={24} />
        </PlusButton>
      );
    }
    if (variant === "logo") {
      return (
        <Link href="/main/alert">
          <Image src={alert} alt="알림" width={24} height={24} />
        </Link>
      );
    }
    return null;
  };

  return (
    <StyledHeader $variant={variant}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </StyledHeader>
  );
};

export default PageHeader;
