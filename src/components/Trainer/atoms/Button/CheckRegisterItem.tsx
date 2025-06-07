import styled from "styled-components";
import { Icon } from "@/components/common/svgIcon/SvgIcon";

interface CheckRegisterItemProps {
  status?: "gray" | "purple";
  label: string;
}

export const CheckRegisterItem = ({
  status = "gray",
  label,
}: CheckRegisterItemProps) => {
  return (
    <CheckMessageWrapper>
      <Icon
        name={status === "gray" ? "checkCircleMono" : "checkCircleActive"}
        size={26}
      />
      <Message $status={status}>{label}</Message>
    </CheckMessageWrapper>
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
