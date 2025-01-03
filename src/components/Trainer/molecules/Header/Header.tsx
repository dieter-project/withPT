import { useRouter } from "next/navigation";
import Link from "next/link";
import { styled } from "styled-components";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";
import { Typography } from "@/components/trainer/atoms/Typography/TypoGraphy.styles";

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
        <button onClick={handleBack}>
          <Icon name="backArrow" size={20} />
        </button>
      );
    }
    if (variant === "logo") {
      return <Icon name="logo" size={80} />;
    }
    return null;
  };

  const renderCenter = () => {
    if (variant !== "logo") {
      return <Typography variant="title2">{title}</Typography>;
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
          <Icon name="plusGray" size={36} />
        </PlusButton>
      );
    }
    if (variant === "logo") {
      return (
        <Link href="/trainer/main/alert">
          <Icon name="alertBell" size={25} />
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
