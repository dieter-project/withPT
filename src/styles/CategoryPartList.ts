import { styled } from "styled-components";

export const CategoryPartList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  gap: 8px;
  overflow-x: scroll;

  li {
    white-space: nowrap;
    /* min-width: 60px;
    height: 40px; */
    padding: 8px 16px;
    border: 1px solid var(--border-gray);
    border-radius: 8px;
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