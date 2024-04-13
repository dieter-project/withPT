import { styled } from "styled-components";

export const CategoryPartList = styled.ul`
  display: flex;
  gap: 0.5rem;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    white-space: nowrap;
    /* min-width: 60px;
    height: 40px; */
    padding: 0.5rem 1rem;
    border: 1px solid var(--border-gray300);
    color: var(--border-gray400);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .active {
    border: 1px solid var(--primary);
    background: var(--purple100);
    color: var(--primary);
  }
`