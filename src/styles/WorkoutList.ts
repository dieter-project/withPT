import { styled } from "styled-components";

export const WorkoutList = styled.div`
  li {
    display: flex;
    padding: 0.625rem 0;
    margin-bottom: 0.625rem;
    &:not(:last-child) {
      border-bottom: 1px solid var(--border-gray);
    }
    >div {
      &:first-child {
        width: 40px;
        height: 40px;
        background-color: #a3a3a3;
        border-radius: 0.5rem;
        margin-right: 0.625rem;
      }
      &:last-child {
        .workout-contents {
          font-size: 12px;
          color: var(--font-gray700);
        }
      }
    }
  }
`