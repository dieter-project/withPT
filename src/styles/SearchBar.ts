import { styled } from "styled-components";
import Image from "next/image";
import searchIcon from "../../../../../public/searchLight.png";

export const SearchBar = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--inputpurple);
  background-image: url("../../../../../public/searchLight.png");
  background-repeat: no-repeat;
  padding: 0.88rem;
`;
