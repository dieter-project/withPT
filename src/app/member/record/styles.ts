import { RoundBox } from "@/styles/Layout";
import { styled } from "styled-components";

export const RecordBoxWrap = styled(RoundBox)`
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
  
  > div {
    &:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        font-size: var(--font-s);
      }
      .record-value {
        font-size: var(--font-xl);
        font-weight: var(--font-semibold);
      }
      .caption {
        font-size: var(--font-xs);
        color: var(--font-gray700);
        display: flex;
        span {
          display: block;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: var(--purple200);
          color: var(--primary);
          text-align: center;
          margin-right: 0.5rem;
        }
      }
    }
    .img-wrap {
      width: 92px;
      height: 92px;
      border-radius: 0.75rem;
      img {
        object-fit: cover;
      }
    }
  }
`