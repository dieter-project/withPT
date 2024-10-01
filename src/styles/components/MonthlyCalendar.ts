import styled from "styled-components"

export const CalendarWrap = styled.div`
    .react-calendar {
    font-family: var(--font);
    border: none;
    width: 100%;
  }

  .react-calendar__navigation {
    text-align: center;
    margin-bottom: 1.25rem;
  }

  .react-calendar__navigation__label {
    margin: 0 1rem;
    font-weight: var(--font-semibold);
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: var(--font-xs);
    color: var(--font-gray700);
  }

  .react-calendar__month-view__weekdays__weekday > abbr{
    text-decoration: none;
  }

  .react-calendar__tile {
    color: var(--font-gray700);
    height: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    abbr {
      margin-top: 0.5rem;
    }
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--now {
    background: none;
    font-weight: var(--font-semibold);
    color: var(--black);
  }
  .react-calendar__tile--active {
    background: none;
    gap: 5px;
    abbr {
      color: white;
      background-color: var(--primary);
      color: var(--white);
      width: 1.875rem;
      height: 1.875rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.3125rem;
    }
  }
`

export const Dot = styled.div`
  width: 0.3125rem;
  height: 0.3125rem;
  border-radius: 50%;
  background-color: var(--primary);
  
`