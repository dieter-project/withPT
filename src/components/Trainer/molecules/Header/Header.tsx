import { useRouter } from "next/navigation";
import Link from "next/link";
import { styled } from "styled-components";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";

type HeaderVariant = "default" | "withBack" | "center" | "plus" | "logo";

interface PageHeaderProps {
  title: string;
  variant?: HeaderVariant;
  onPlusClick?: () => void;
}

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
          <Icon name="backArrow" size={20} />
        </BackButton>
      );
    }
    if (variant === "logo") {
      return <Icon name="IconCheckCirCircleActive" size={36} />;
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
          <Icon name="addGray" size={36} />
        </PlusButton>
      );
    }
    if (variant === "logo") {
      return (
        <Link href="/main/alert">
          <Icon name="logoWePT" size={36} />
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
