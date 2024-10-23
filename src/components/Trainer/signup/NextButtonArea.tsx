import Link from "next/link";
import { ButtonAreaFixed } from "@/styles/TrainerLayout";
import { Button } from "@/styles/TrainerButton";

interface NextButtonProps {
  isButtonDisabled: boolean;
  onClick: () => void;
  nextStepUrl: string;
}

export const NextButtonArea = ({
  isButtonDisabled,
  onClick,
  nextStepUrl,
}: NextButtonProps) => {
  return (
    <ButtonAreaFixed>
      <Link href={nextStepUrl}>
        <Button
          $variant={isButtonDisabled ? "ghostPurple" : "primary"}
          onClick={onClick}
          disabled={isButtonDisabled}
        >
          다음
        </Button>
      </Link>
    </ButtonAreaFixed>
  );
};
