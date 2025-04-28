import { Typography } from "@/components/trainer/atoms/typography/TypoGraphy.styles";

interface SignupTitleType {
  topTitle: string;
  underTitle: string;
}

export const SignupTitleWrapper = ({
  topTitle,
  underTitle,
}: SignupTitleType) => {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <Typography variant="title3" fw={600}>
        {topTitle}
      </Typography>
      <div>
        <Typography variant="heading2">{underTitle}</Typography>
      </div>
    </div>
  );
};
