import { styled } from "styled-components";
import CloseIcon from "/public/svgs/icon_close.svg";
import PlusCircleMonoIcon from "/public/svgs/icon_plus_circle_mono.svg";
import PlusGrayIcon from "/public/svgs/icon_plus_gray.svg";
import { CheckRegisterItem } from "@/components/trainer/atoms/Button/CheckRegisterItem";

type ButtonVariant = "purple" | "gray";
type IconType = "plusCircleMono" | "plusGray";
type RightContentType = "checkRegister" | "xButton";

interface EventButtonProps {
  event: (e: React.MouseEvent<HTMLButtonElement>) => void;
  xButtonEvent?: (e: React.MouseEvent<HTMLDivElement>) => void;
  iconType?: IconType;
  isIconVisible: boolean;
  content?: string;
  rightContent?: RightContentType;
  eventButtonType: ButtonVariant;
  height?: string;
  justifyContent?: string;
  color?: string;
}

export const EventButton = ({
  height,
  justifyContent,
  event,
  eventButtonType,
  xButtonEvent,
  isIconVisible,
  iconType,
  content,
  rightContent,
  color,
}: EventButtonProps) => {
  return (
    <>
      <ButtonLayout
        $height={height}
        $justifyContent={justifyContent}
        $eventButtonType={eventButtonType}
        $color={color}
        onClick={event}
      >
        <div>
          {isIconVisible && (
            <IconWrapper>
              {iconType === "plusCircleMono" && (
                <PlusCircleMonoIcon width="25" height="25" />
              )}
              {iconType === "plusGray" && (
                <PlusGrayIcon width="30" height="30" />
              )}
            </IconWrapper>
          )}
          {content}
        </div>
        {rightContent === "checkRegister" && (
          <CheckRegisterItem status="gray" label="등록 전" />
        )}
        {rightContent === "done" && (
          <CheckRegisterItem status="purple" label="등록 완료" />
        )}
        {rightContent === "xButton" && (
          <div onClick={xButtonEvent}>
            <CloseIcon width="13" height="13" />
          </div>
        )}
      </ButtonLayout>
    </>
  );
};

const ButtonLayout = styled.button<{
  $eventButtonType: "purple" | "gray";
  $height?: string;
  $justifyContent?: string;
  $color: string;
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};
  width: 100%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  padding: 1.75rem 0.625rem;
  border: ${({ $eventButtonType }) =>
    $eventButtonType === "purple" ? "none" : "1px solid var(--font-gray400)"};
  border-radius: 0.5rem;
  background-color: ${({ $eventButtonType }) =>
    $eventButtonType === "purple" ? "var(--purple50)" : "none"};
  height: ${({ $height }) => $height || "auto"};
  font-weight: 500;
  color: ${({ $color }) => $color};
  font-size: var(--font-m);
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;
