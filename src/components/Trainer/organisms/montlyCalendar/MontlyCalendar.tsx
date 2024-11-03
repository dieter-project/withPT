"use client";

import { format } from "date-fns";
import React, { ReactElement, useState } from "react";
import Calendar from "react-calendar";
import { TileArgs, View } from "react-calendar/dist/cjs/shared/types";
import { styled } from "styled-components";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarContainer = styled.div`
  .react-calendar {
    font-family: var(--font);
    border: none;
    width: 100%;
  }

  .react-calendar__navigation {
    height: 3rem;
    padding: 0 4rem;
    border-bottom: none;
    font-size: var(--font-m);

    span {
      font-size: 15px;
      color: black;
      font-weight: var(--font-medium);
    }
  }

  .react-calendar__navigation button:disabled {
    border-radius: 20px 20px 0 0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    border-radius: 20px 20px 0 0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    border-radius: 20px 20px 0 0;
  }
  .react-calendar__month-view {
    abbr {
      border-bottom: none !important;
      font-size: 14px;
      font-weight: 400;
      text-decoration: none !important;
    }
  }

  .react-calendar__month-view__weekdays {
    abbr {
      font-size: 13px;
      font-weight: 500;
    }
  }

  .react-calendar__tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 3.3rem;
    text-align: center;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: none;
    color: black !important;
    abbr {
      position: relative;
      color: #fff;
      z-index: 1;
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 2rem;
        height: 2rem;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: var(--primary);
        z-index: -1;
      }
    }
  }

  .react-calendar__month-view__days__day--weekend:not(
      .react-calendar__month-view__days__day--neighboringMonth
    ) {
    color: #d10000 !important;
  }

  .react-calendar__month-view__days__day:not(
      .react-calendar__month-view__days__day--weekend
    )
    + .react-calendar__month-view__days__day--weekend:not(
      .react-calendar__month-view__days__day--neighboringMonth
    ) {
    color: black !important;
  }

  .react-calendar__tile--now {
    background: none;
  }
`;

const Dot = styled.div`
  width: 0.3125rem;
  height: 0.3125rem;
  border-radius: 50%;
  background-color: var(--primary);
`;
interface Tile {
  date: TileArgs | Date;
  view?: View;
}
const MonthlyCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  const tileContent = ({ date, view }: TileArgs): ReactElement => {
    let html = [];
    if (markDate.find(x => x === format(date, "yyyy-MM-dd"))) {
      html.push(<Dot></Dot>);
    }
    return (
      <>
        <div>{html}</div>
      </>
    );
  };

  const markDate = [
    "2023-12-02",
    "2023-12-04",
    "2023-12-10",
    "2023-12-12",
    "2023-12-23",
    "2023-12-27",
  ];
  return (
    <CalendarContainer>
      <Calendar
        calendarType="gregory"
        formatDay={(locale, date) => format(date, "d")}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        value={value}
        onChange={onChange}
        tileContent={date => tileContent(date)}
      />
    </CalendarContainer>
  );
};

export default MonthlyCalendar;
