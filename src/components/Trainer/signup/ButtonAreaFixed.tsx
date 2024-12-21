import Link from "next/link";
import { ButtonAreaLayout } from "@/styles/Trainer/TrainerLayout";
import { Button } from "@/styles/Trainer/TrainerButton";

interface NextButtonProps {
  label: string;
  onClick?: () => void;
  isButtonDisabled?: boolean;
}

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
