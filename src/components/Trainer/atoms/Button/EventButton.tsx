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
}

const ICON_CONFIG: Record<IconType, { name: string; size: number }> = {
  plusCircleMono: { name: "plusCircleMono", size: 25 },
  plusGray: { name: "plusGray", size: 25 },
  plusPurple: { name: "plusPurple", size: 15 },
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
}: EventButtonProps & { $display?: string }) => {
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
      {isIconVisible && iconType && (
        <Icon
          name={ICON_CONFIG[iconType].name}
          size={ICON_CONFIG[iconType].size}
        />
      )}
      <div>{content}</div>
      {rightContent === "checkRegister" && (
        <CheckRegisterItem status="gray" label="등록 전" />
      )}
      {rightContent === "done" && (
        <CheckRegisterItem status="purple" label="등록 완료" />
      )}
      {rightContent === "xButton" && (
        <div onClick={xButtonEvent}>
          <Icon name="closeX" size={13} />
        </div>
      )}
    </ButtonLayout>
  );
};

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

// const IconWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;
