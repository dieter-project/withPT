import styled from "styled-components";

export const ScheduleDate = styled.div`
  border-bottom: 1px solid var(--border-gray300);
  padding: 0 0.625rem;
`;

export const ScheduleDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding: 0.75rem 0.625rem 0;
  div {
    display: flex;
    align-items: center;
    &:first-child {
      display: flex;
      font-weight: var(--font-semibold);
      &::before {
        content: "";
        display: block;
        width: 0.625rem;
        height: 0.625rem;
        border-radius: 50%;
        background-color: var(--primary);
        margin-right: 0.625rem;
      }
    }
    &:last-child {
      font-size: var(--font-s);
    }
  }
`;
