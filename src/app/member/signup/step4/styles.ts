import { styled } from "styled-components"

export const RadioButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--font-gray500);
  input[type='radio'] {
    display: none;
  }

  input[type='radio'] + span {
    width: 100%;
    height: 60px;
    border: 1px solid var(--border-gray);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--font-semibold);
    cursor: pointer;
  }

  input[type='radio']:checked + span {
    background-color: var(--purple50);
    border: 1px solid var(--primary);
    color: var(--primary);
  }

  label {
    position: relative;
    
    
  }
`

export const RecommendBadge = styled.div`
  width: 45px;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6px;
  right: 9px;
  color: var(--white);
  font-size: var(--font-xxs);
  font-weight: var(--font-semibold);
  background: var(--primary);
  border-radius: 4px;
`