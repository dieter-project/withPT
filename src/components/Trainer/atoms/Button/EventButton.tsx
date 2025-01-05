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
  isIconVisible?: boolean;
  content?: React.ReactNode;
  rightContent?: RightContentType;
  eventButtonType: ButtonVariant;
  height?: string;
  justifyContent?: string;
  color?: string;
  padding?: string;
  $display?: string;
}

const ICON_CONFIG: Record<IconType, { name: string; size: number }> = {
  plusCircleMono: { name: "plusCircleMono", size: 25 },
  plusGray: { name: "plusGray", size: 25 },
  plusPurple: { name: "plusPurple", size: 15 },
};

const renderRightContent = (
  rightContent: RightContentType | undefined,
  xButtonEvent?: (e: React.MouseEvent<HTMLDivElement>) => void,
) => {
  switch (rightContent) {
    case "checkRegister":
      return <CheckRegisterItem status="gray" label="등록 전" />;
    case "done":
      return <CheckRegisterItem status="purple" label="등록 완료" />;
    case "xButton":
      return (
        <div onClick={xButtonEvent}>
          <Icon name="closeX" size={13} />
        </div>
      );
    default:
      return null;
  }
};

export const EventButton = ({
  padding,
  height,
  justifyContent,
  event,
  eventButtonType,
  xButtonEvent,
  isIconVisible = false,
  iconType,
  content,
  rightContent,
  color = "inherit",
  $display = "flex",
}: EventButtonProps) => {
  return (
    <ButtonLayout
      $color={color}
      $height={height}
      $padding={padding}
      $justifyContent={justifyContent}
      $eventButtonType={eventButtonType}
      $display={$display}
      onClick={event}
    >
      {/* 아이콘 표시 */}
      {isIconVisible && iconType && (
        <Icon
          name={ICON_CONFIG[iconType].name}
          size={ICON_CONFIG[iconType].size}
        />
      )}

      {/* 컨텐츠 */}
      <div>{content}</div>

      {/* 오른쪽 콘텐츠 */}
      {renderRightContent(rightContent, xButtonEvent)}
    </ButtonLayout>
  );
};

// 스타일 정의
const ButtonLayout = styled.button<{
  $eventButtonType: ButtonVariant;
  $height?: string;
  $padding?: string;
  $justifyContent?: string;
  $color?: string;
  $display?: string;
}>`
  display: ${({ $display }) => $display || "flex"};
  align-items: ${({ $display }) =>
    $display === "flex" ? "center" : "initial"};
  justify-content: ${({ $justifyContent, $display }) =>
    $display === "flex" ? $justifyContent || "center" : "initial"};
  width: 100%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  padding: ${({ $padding }) => $padding || "1.75rem 0.625rem"};
  border: ${({ $eventButtonType }) =>
    $eventButtonType === "purple" ? "none" : "1px solid var(--font-gray400)"};
  border-radius: 0.5rem;
  background-color: ${({ $eventButtonType }) =>
    $eventButtonType === "purple" ? "var(--purple50)" : "none"};
  height: ${({ $height }) => $height || "auto"};
  font-weight: 500;
  color: ${({ $color }) => $color || "inherit"};
  font-size: var(--font-m);
`;
