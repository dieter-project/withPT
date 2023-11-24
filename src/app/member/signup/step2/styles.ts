import { styled } from "styled-components";

export const RadioButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-bottom: 1.5rem;

  input[type='radio'] {
    display: none;
  }
  
  input[type='radio'] + .meal-item {
    width: 100%;
    height: 104px;
    overflow: hidden;
    padding: 1rem;
    background-color: var(--purple50);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  input[type='radio']:checked + .meal-item {
    background-color: var(--purple100);
    border: 1px solid var(--primary);
    color: var(--primary);
    p {
      white-space: normal;
    }
  }
`

export const MealText = styled.div`
  h3 {
    font-weight: var(--font-semibold);
  }
  div {
    font-size: var(--font-xs);
    font-weight: var(--font-semibold);
    margin-top: 0.625rem;
  }
  p {
    font-size: var(--font-xs);
    font-weight:  var(--font-regular);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const MealIcon = styled.span`
  display: block;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background-color: var(--white);
`