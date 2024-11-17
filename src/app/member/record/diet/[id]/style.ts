import { LabelTitle } from "@/styles/Text";
import styled from "styled-components";

export const DateText = styled(LabelTitle)`
  text-align: center;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 21.25rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
  gap: 0.375rem;
  margin-bottom: 1.5rem;
  
  div {
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
    flex-shrink: 0;
    border-radius: 0.5rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const GraphWrap = styled.div`
  margin-bottom: 1.5rem;
  .bar {
    width: 100%;
    height: 15px;
    border-radius: 2px;
    display: flex;

    > div {
      &:nth-child(1) {
        background-color: var(--carbohydrate);
      }
      &:nth-child(2) {
        background-color: var(--protein);
      }
      &:nth-child(3) {
        background-color: var(--fat);
      }
    }
  }
  .legend {
    display: flex;
    margin-top: 1.125rem;
    font-size: var(--font-xs);
    > div {
      display: flex;
      align-items: center;

      &::before {
        content: "";
        display: block;
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 2px;
        margin-right: 5px;
      }

      &:nth-child(1) {
        &::before {
          background-color: var(--carbohydrate);
        }
      }
      &:nth-child(2) {
        &::before {
          background-color: var(--protein);
        }
      }
      &:nth-child(3) {
        &::before {
          background-color: var(--fat);
        }
      }

      span {
        display: block;
        margin-left: 0.625rem;
        margin-right: 0.625rem;
      }
    }
  }
`;

export const DietList = styled.div`
  .list-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div:last-child {
      font-size: var(--font-s);
      strong {
        font-weight: var(--font-semibold);
      }
    }
  }
  ul {
    border-top: 1px solid var(--border-gray300);
    margin: 0.625rem 0;
    li {
      display: flex;
      justify-content: space-between;
      align-items: start;
      padding: 0.625rem 0;

      &:not(:last-child) {
        border-bottom: 1px solid var(--border-gray300);
      }

      .detail {
        font-size: var(--font-s);
      }
    }
  }
`;
