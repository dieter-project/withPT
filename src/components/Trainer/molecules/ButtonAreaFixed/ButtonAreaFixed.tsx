import { EventButton } from "@/components/trainer/atoms/button/EventButton";
import styled from "styled-components";

interface NextButtonProps {
  label: string;
  onClick: () => void;
  isButtonDisabled?: boolean;
}

const ButtonAreaLayout = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2.4rem 1.6rem 1.6rem;
  z-index: 100;
  background-color: transparent;
`;

export const ButtonAreaFixed = ({
  label,
  onClick,
  isButtonDisabled,
}: NextButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isButtonDisabled) {
      onClick();
    }
  };

  return (
    <ButtonAreaLayout>
      <EventButton
        $eventButtonType={isButtonDisabled ? "purple75" : "primary"}
        height="3.5rem"
        event={handleClick}
        content={label}
      />
    </ButtonAreaLayout>
  );
};
