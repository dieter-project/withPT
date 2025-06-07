import styled from "styled-components";

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;

  input[type="time"] {
    width: 100%;
    height: 3.5rem;
    text-align: center;
    border: none;
    padding: 0.5rem;
    font-size: 2rem;
  }

  input[type="time"]::-webkit-calendar-picker-indicator {
    display: none;
  }

  input[type="time"]::-webkit-datetime-edit-hour-field {
    border-bottom: 1px solid var(--primary);
    padding: 0.3rem 1.12rem;
  }

  input[type="time"]::-webkit-datetime-edit-minute-field {
    border-bottom: 1px solid var(--primary);
    padding: 0.3rem 1.12rem;
  }

  input[type="time"]::-webkit-datetime-edit-ampm-field {
    display: none;
  }

  input[type="time"]::-webkit-clear-button {
    display: none;
  }

  input[type="time"]::-webkit-inner-spin-button {
    display: none;
  }

  .time-text {
    display: flex;
    gap: 3rem;
    margin-top: 0.5rem;
    font-size: var(--font-s);
    color: var(--font-secondary);
  }
`;

export const TimeModalWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  > div:first-child {
    font-weight: var(--font-semibold);
    margin-top: 1.5rem;
  }

  .button-area {
    position: absolute;
    left: 0;
    bottom: 2.5rem;
    width: 100%;
  }
`;