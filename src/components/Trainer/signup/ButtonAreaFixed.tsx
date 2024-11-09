import Link from "next/link";
import { ButtonAreaLayout } from "@/styles/Trainer/TrainerLayout";
import { Button } from "@/styles/Trainer/TrainerButton";

interface NextButtonProps {
  label: string;
  onClick: () => void;
  isButtonDisabled?: boolean;
  nextStepUrl: string;
}

export const ButtonAreaFixed = ({
  label,
  onClick,
  isButtonDisabled,
  nextStepUrl,
}: NextButtonProps) => {
  return (
    <ButtonAreaLayout>
      {isButtonDisabled ? (
        <Button $variant="ghostPurple" onClick={onClick} disabled>
          {label}
        </Button>
      ) : (
        <Link href={nextStepUrl} passHref>
          <Button $variant="primary" onClick={onClick}>
            {label}
          </Button>
        </Link>
      )}
    </ButtonAreaLayout>
  );
};
