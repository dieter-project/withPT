import { styled } from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--purple50);
  padding: 0 0.625rem;
`

export const InputRowWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.625rem;
  line-height: 1rem;
  margin-bottom: 1.25rem;
`

//단위 표시된 input용 style
export const InputWrap = styled.div`
  position: relative;
  
  span {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--font-s);
    font-weight: var(--font-semibold);
  }
`

export const Checkbox = styled.div`
  input[type="checkbox"] {
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid var(--font-gray500);
    border-radius: 6px;
  }

  input[type="checkbox"]:checked {
    border: none;
    background: url(/svgs/icon_checked.svg) no-repeat;
    background-color: var(--primary);
    background-position: center;
  }
`