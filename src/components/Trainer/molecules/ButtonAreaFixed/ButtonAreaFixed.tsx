import { Button } from "@/styles/Trainer/TrainerButton";
import styled from "styled-components";

interface NextButtonProps {
  label: string;
  onClick?: () => void;
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
  return (
    <ButtonAreaLayout>
      {isButtonDisabled ? (
        <Button $variant="ghostPurple" onClick={onClick} disabled>
          {label}
        </Button>
      ) : (
        <Button $variant="primary" onClick={onClick}>
          {label}
        </Button>
      )}
    </ButtonAreaLayout>
  );
};
