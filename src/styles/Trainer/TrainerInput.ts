import { styled } from "styled-components";

export const NoIconSelect = styled.select`
  width: 6rem;
  height: 3rem;
  padding-left: 1rem;
  margin-right: 10px;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--purple50);
`;

export const DeleteInputXbutton = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  background: url(/Trainer/icons/deleteIconGrayBg.png) no-repeat center;
  background-position: center;
  background-size: contain;
`;
