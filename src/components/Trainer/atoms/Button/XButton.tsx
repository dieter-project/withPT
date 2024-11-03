import styled from "styled-components";
import CheckedIconGray from "/public/svgs/icon_checked.svg";

interface EventButtonItemProps {
  status: "gray" | "purple";
  label: string;
}

export const XButton = ({ status, label }: EventButtonItemProps) => {
  return (
    <>
      <CheckMessageWrapper>
        {/* <CheckIcon widthz /> */}
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
  font-size: 3rem;
`;
