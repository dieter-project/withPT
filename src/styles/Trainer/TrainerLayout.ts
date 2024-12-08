import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  margin: 0;
  padding: 0;
`;

export const ContentBody = styled.div`
  position: relative;
  padding: 4.5rem 1rem 4.7rem 1rem;
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
