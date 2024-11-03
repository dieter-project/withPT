import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background-color: white;
  margin: 0;
  padding: 0;
`;

export const ContentBody = styled.div`
  padding: 5rem 1.3rem 3.2rem 1.3rem;
`;

export const ButtonAreaLayout = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2.4rem 1.6rem 1.6rem;
  z-index: 100;
  background-color: transparent;
`;

export const FlexWrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
`;
