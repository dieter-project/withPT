import { styled } from "styled-components";
import { RoundBox } from "./Layout";

export const AddRecordButton = styled(RoundBox)`
  width: 100%;
  padding: 1.25rem;
  background-color: var(--purple50);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  line-height: 2.5rem;
  cursor: pointer;
  
  p {
    font-size: var(--font-s);
    color: var(--font-secondary);
  }
  
  div {
    width: 1.375rem;
    height: 1.375rem;
    border-radius: 50%;
    background-color: var(--purple200);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-s);
  }
`
export const AddImgButton = styled.button`
  width: 110px;
  height: 110px;
  background: url(/assets/plus.png) no-repeat;
  background-color: var(--purple50);
  background-position: center;
  border-radius: 0.5rem;
`