import styled from "styled-components";

export const BookmarkList = styled.div`
  ul {
    li {
      padding: 1rem 0;
      border-top: 1px solid var(--border-gray300);
      display: flex;
      align-items: center;
      > div:first-child {
        margin-right: 1.2rem;
      }
    }
  }
`;

export const NameText = styled.div`
  font-size: var(--font-l);
  font-weight: var(--font-semibold);
`;

export const DetailText = styled.div`
  display: flex;
  div {
    font-size: var(--font-s);
    color: var(--font-gray700);
  }
`;

export const EmptyBookmark = styled.div`
  width: 100%;
  height: calc(100vh - (4.375rem + 3rem + 5.1rem));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--font-secondary);

  > div {
    &:first-of-type {
      font-weight: var(--font-semibold);
      margin: 0.5rem 0;
    }
    &:last-of-type {
      font-weight: var(--font-regular);
    }
  }
`;
