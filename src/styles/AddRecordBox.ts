import { styled } from "styled-components";

export const AddRecordBox = styled.div`
  width: 100%;
  padding: 20px;
  background-color: var(--purple50);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  
  p {
    font-size: var(--font-s);
    color: var(--font-secondary);
    margin-bottom: 10px;
  }
  
  div {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: var(--purple200);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }
`