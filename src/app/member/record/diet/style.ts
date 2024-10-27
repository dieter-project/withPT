import { RoundBox } from "@/styles/Layout";
import styled, { css } from "styled-components";

interface ProgressProps {
  type: string;
}

export const MyGoal = styled.section`
  > div {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--purple50);
    border-radius: 0.5rem;

    > div:first-child {
      font-size: var(--font-s);
      font-weight: var(--font-semibold);
      color: var(--primary);
    }
  }
  .goal-contents {
    display: flex;
  }
`

export const GraphWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  
  .nutrition-graph {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const NutritionProgress = styled.div`
  width: 100%;
  gap: 0.625rem;
  display: flex;
`

export const ProgressWrap = styled.div<ProgressProps>`
  width: 100%;
  text-align: center;

  div {
    font-size: var(--font-xs);
    span {
      color: var(--font-gray500);
    }
  }
  progress {
    width: 100%;
    height: 6px;
    &::-webkit-progress-bar {
      background-color: var(--purple100);
    }
    ${props => props.type === 'carb' && css`
      &::-webkit-progress-value {
        border-radius:0.625rem;
        background: var(--carbohydrate);
      }
    `}
    ${props => props.type === 'prot' && css`
      &::-webkit-progress-value {
        border-radius:0.625rem;
        background: var(--protein);
      }
    `}
    ${props => props.type === 'fats' && css`
      &::-webkit-progress-value {
        border-radius:0.625rem;
        background: var(--fat);
      }
    `}
  }
`

export const DietSectionTitle = styled.div`
  border-bottom: 1px solid var(--border-gray);
`

export const DietList = styled.li`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border-gray);
  }

  .diet-img {
    width: 140px;
    height: 140px;
    border-radius: 0.5rem;
    margin-right: 0.625rem;
    img {
      object-fit: cover;
    }
  }
  .diet-detail {
    flex: 1;
    > div {
      &:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.25rem;
      }
    }
    .time {
      font-weight: var(--font-semibold);
    }
    .calorie {
      color: var(--font-gray700);
    }
    .nutrition { 
      font-size: var(--font-s);
    }
    .menu {
      font-size: var(--font-xs);
      color: var(--font-gray500);
    }
  }
`

export const TrainerFeedback = styled(RoundBox)`
  font-size: var(--font-s);
`