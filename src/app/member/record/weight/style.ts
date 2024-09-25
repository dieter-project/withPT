import { Button } from "@/styles/Button"
import { RoundBox } from "@/styles/Layout"
import { VariantProps } from "@/types/style"
import styled, { css } from "styled-components"

export const WeightBox = styled(RoundBox)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WeightValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    font-size: 32px;
    font-weight: var(--font-semibold);
  }
  span {
    font-size: var(--font-xxxl);
  }
`
interface WeightInput {
  isFocus: boolean
}
export const WeightInput = styled.div<WeightInput>`
  width: 240px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  input, input[type="text"] {
    width: 80px;
    border: none;
    border-radius: 0;
    background: none;
    font-size: 32px;
    font-weight: var(--font-semibold);
    text-align: right;
  }
  span {
    font-size: var(--font-xxxl);
  }

  ${props => props.isFocus && css`
    border-bottom: 1px solid var(--primary);
  `}
`
export const WeightSaveBtn = styled(Button)`
  width: 4rem;
  height: 2.75rem;
`
export const WeightDetail = styled.div`
  display: flex;
  gap: 0.625rem;
  .detail-box {
    width: 100%;
    height: 100px;
    background-color: var(--purple50);
    border-radius: 0.5rem;
  }
`

export const AddDetailButton = styled(RoundBox)`
  height: 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const PlusRound = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 50%;
  background-color: var(--purple200);
`

export const CompositionValueText = styled.div`
  font-size: var(--font-l);
  font-weight: var(--font-semibold);
  margin-top: 4px;
`

export const CompositionText = styled.div`
  font-size: var(--font-s);
  color: var(--font-gray700);
  margin-top: 0.5rem;
`

export const TitleWrap = styled.div<VariantProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: ${props => props.variant === 'bodyphoto' ? 'space-between' : 'start'};
  margin-bottom: 0.625rem;

  > div {
    margin-bottom: 0;
  }
  .recent-date {
    font-size: var(--font-xs);
    color: var(--font-secondary);
  }
  .bodyphoto-history {
    font-size: var(--font-s);
    color: var(--font-gray500);
    cursor: pointer;
  }
`