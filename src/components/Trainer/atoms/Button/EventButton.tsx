import { styled } from "styled-components";
import { CheckRegisterItem } from "@/components/trainer/atoms/Button/CheckRegisterItem";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";

type ButtonVariant = "purple" | "gray";
type IconType = "plusCircleMono" | "plusGray" | "plusPurple";
type RightContentType = "checkRegister" | "xButton" | "done";

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
                <Icon name="plusCircleMono" size={25} />
              )}
              {iconType === "plusGray" && <Icon name="plusGray" size={25} />}
              {iconType === "plusPurple" && (
                <Icon name="plusPurple" size={15} />
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
            <Icon name="closeXIcon" size={13} />
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
