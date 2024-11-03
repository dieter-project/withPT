import styled from "styled-components";
import CheckedIconGray from "/public/svgs/icon_check_circle_mono.svg";

interface CheckRegisterItemProps {
  status: "gray" | "purple";
  label: string;
}

export const CheckRegisterItem = ({
  status,
  label,
}: CheckRegisterItemProps) => {
  return (
    <>
      <CheckMessageWrapper>
        <CheckedIconGray width="30" height="30" />
        <Message $status={status}>{label}</Message>
      </CheckMessageWrapper>
    </>
  );
};

const CheckMessageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Message = styled.span<{ $status: "gray" | "purple" }>`
  color: ${({ $status }) =>
    $status === "gray" ? "var(--font-gray400)" : "var(--primary)"};
  font-size: 1rem;
  margin-left: 0.3rem;
`;
