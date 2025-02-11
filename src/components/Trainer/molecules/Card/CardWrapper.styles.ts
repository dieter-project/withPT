import styled from "styled-components";

export const CardWrapper = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#4A90E2" : "#E0E0E0")};
  border-radius: 8px;
  background-color: ${({ isSelected }) => (isSelected ? "#F4F8FF" : "#FFFFFF")};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
