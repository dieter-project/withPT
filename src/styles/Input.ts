import { styled } from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--purple50);
  padding: 0 0.625rem;
`

export const Select = styled.select`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--purple50);
  padding: 0 0.625rem;
  position: relative;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::after {
    width: 1.5rem;
    height: 1.5rem;
    content: "";
    display: block;
    position: absolute;
    background: url('/svgs/icon_select.svg') no-repeat;
    background-position: center;
    right: 0;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }
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
    font-size: var(—font-s);
    font-weight: var(—font-semibold);
  }
`

export const Checkbox = styled.div`
  input[type="checkbox"] {
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid var(—font-gray500);
    border-radius: 6px;
  }

  input[type="checkbox"]:checked {
    border: none;
    background: url(/svgs/icon_checked.svg) no-repeat;
    background-color: var(—primary);
    background-position: center;
  }
`

export const FileInput = styled.input`
  display: none;    
`