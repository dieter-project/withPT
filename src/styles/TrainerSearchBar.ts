import { styled } from "styled-components";
import Image from "next/image";

export const SearchBarWrap = styled.div`
  width: 100%;
  padding: 0 1rem;
  background-color: var(--purple50);
  border-radius: 0.5rem;
  background-size: 100% 100%;
`;

export const SearchIcon = styled(Image)`
  display: inline-block;
  width: 8%;
  line-height: 1.5rem;
`;

export const SearchBarInput = styled.input`
  display: inline-block;
  width: 90%;
  border: none;
  padding: 0.81rem;
  background-color: var(--purple50);
  color: black;

  &::placeholder {
    color: gray;
  }

  &:focus {
    outline: none;
  }
`;
