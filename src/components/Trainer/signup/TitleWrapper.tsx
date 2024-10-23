import {
  SignUpTitleWrap,
  SignupStepInfo,
  SignupStepInfoSub,
} from "@/styles/SignupForm";

interface SignupTitleType {
  topTitle: string;
  underTitle: string;
}

export const TitleWrapper = ({ topTitle, underTitle }: SignupTitleType) => {
  return (
    <div>
      <SignUpTitleWrap>
        <SignupStepInfo>{topTitle}</SignupStepInfo>
        <SignupStepInfoSub>{underTitle}</SignupStepInfoSub>
      </SignUpTitleWrap>
    </div>
  );
};
