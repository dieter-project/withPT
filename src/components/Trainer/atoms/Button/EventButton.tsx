import { styled } from "styled-components";
import Image from "next/image";
import CloseIcon from "/public/svgs/icon_close.svg";
import PlusCircleMonoIcon from "/public/svgs/icon_plus_circle_mono.svg";
import PlusGrayIcon from "/public/svgs/icon_plus_gray.svg";
import { CheckRegisterItem } from "@/components/trainer/atoms/Button/CheckRegisterItem";

interface EventButtonProps {
  key?: number;
  event: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hasXButton?: boolean;
  xButtonEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  iconType?: "plusCircleMono" | "plusGray";
  isIconVisible: boolean;
  content?: string;
  rightContent?: React.ReactNode;
  eventButtonType: "purple" | "gray";
  height?: string;
  justifyContent?: string;
  color?: string;
}

export const EventButton = ({
  key,
  height,
  justifyContent,
  event,
  eventButtonType,
  hasXButton,
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
        {rightContent === "xButton" && (
          <button type="button" onClick={xButtonEvent}>
            <CloseIcon width="13" height="13" />
          </button>
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
