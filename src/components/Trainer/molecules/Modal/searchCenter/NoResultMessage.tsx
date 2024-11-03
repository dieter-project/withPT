import React from "react";
import { styled } from "styled-components";

interface NoResultsMessageProps {
  message: string;
}

const NoResultsMessage: React.FC<NoResultsMessageProps> = ({ message }) => (
  <StyledNoResultMessage>{message}</StyledNoResultMessage>
);

export default NoResultsMessage;

const StyledNoResultMessage = styled.p`
  margin-top: 1rem;
  text-align: center;
`;
