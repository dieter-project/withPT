import { styled } from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--inputpurple);
  padding: 1rem;
`;

export const InputRowWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  line-height: 16px;
  margin-bottom: 20px;
  input {
    margin: 0 10px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

//단위 표시된 input용 style
export const InputWrap = styled.div`
  position: relative;

  span {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--font-s);
    font-weight: var(--font-semibold);
  }
`;
