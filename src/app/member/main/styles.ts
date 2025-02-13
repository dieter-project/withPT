import { BaseContentWrap } from "@/styles/Layout"
import { styled } from "styled-components"

export const MainWrap = styled(BaseContentWrap)`
  width: 100%;
  height: 100%;
  background-color: var(--purple50);
  .section-contents {
    background-color: var(--white);
    border-radius: 0.5rem;
    padding: 1.25rem;
    margin-bottom: 1.5rem;
  }
`
export const MyGoal = styled.section`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    padding: 0 1.25rem;
    background-color: var(--white);

    > div:first-child {
      font-size: var(--font-s);
      font-weight: var(--font-semibold);
      color: var(--primary);
  }
`

export const GoalContents = styled.div`
  display: flex;
  width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
  > div {
    width: 50%;
    span { width: 20% } 
    div { 
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > div:last-child {
      font-weight: var(--font-semibold);
    }

    &:first-child {
      display: flex;
      align-items: center;

      span {
        display: block;
        width: 1.25rem;
        height: 1.25rem;
        background: url(/svgs/icon_goal_diet.svg) no-repeat;
        background-position: center;
        background-size: contain;
        margin-right: 0.25rem;
      }
      
      &::after {
        display: block;
        content: '';
        width: 1px;
        height: 1.25rem;
        border-right: 1px solid var(--black);
        margin: 0 0.5rem;
      }
    }
    
    &:last-child {
      display: flex;
      span {
        display: block;
        width: 1.625rem;
        height: 1.625rem;
        background: url(/svgs/icon_goal_workout.svg) no-repeat;
        background-position: center;
        background-size: contain;
        margin-right: 0.25rem;
      }
    }
  }
`

export const TodayTab = styled.section`
  width: 100%;
  color: #A8A8A8;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.25rem;
  div {
    flex: 1;
    text-align: center;
    padding-bottom: 0.625rem;
    cursor: pointer;
  }
  .active {
    color: var(--black);
    font-weight: var(--font-semibold);
    border-bottom: 2px solid var(--black);
  }
`

export const TodayDiet = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    > div {
      width: 50%;
    }
  } 
`

export const TodayDietContents = styled.div`
  .title { 
    font-size: var(--font-s);
    color: var(--font-gray700);
  }
  span {
    font-weight: var(--font-semibold);
    font-size: var(--font-l);
  }
`

export const TodayDietList = styled.ul`
  margin-top: 0.625rem;
  margin-bottom: 0.5rem;
  li {
    display: flex;
    align-items: center;
    font-size: var(--font-s);
    line-height: var(--font-xxxl);

    &::before {
      content: '';
      display: block;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
    &:nth-child(1)::before{
      background-color: var(--carbohydrate);
    } 
    &:nth-child(2)::before {
      background-color: var(--protein);
    }
    &:nth-child(3)::before {
      background-color: var(--fat);
    }

    strong {
      margin-left: 0.25rem;
    }
  }
`

export const MoveButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: var(--primary);
  border-radius: 0.5rem;
  color: var(--white);
  font-size: var(--font-s);
  font-weight: var(--font-semibold);
`

export const EmptyTodayDiet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;

  > div {
    color: var(--font-secondary);
    &:first-of-type {
      font-weight: var(--font-semibold);
      margin: 0.25rem;
    }
  }

`