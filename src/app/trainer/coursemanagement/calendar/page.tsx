import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import AddContent from "../addcontent/page";
import "react-calendar/dist/Calendar.css";
import moment, { MomentInput } from "moment";

const ReactCalender = ({ onChange, value }) => {
  //기본적으로 캘린더가 선택할 수 있게 넣어줄 value이다.
  //value 값만 표시하게 할 게 아니라면 나중에 수정해주거나 지워주자.

  const CalendarContainer = styled.div`
    .react-calendar {
      font-family: var(--font);
      border: none;
      width: 100% !important;
    }

    .react-calendar__navigation {
      height: 3rem;
      border-bottom: none;

      span {
        color: black;
        font-size: 15px;
        font-weight: 400;
      }
    }

    .react-calendar__navigation button:disabled {
      border-radius: 20px 20px 0 0;
      /* background-color: pink; */
    }

    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      border-radius: 20px 20px 0 0;
      /* background-color: pink; */
    }

    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      border-radius: 20px 20px 0 0;
      /* background-color: pink; */
    }
    .react-calendar__month-view {
      abbr {
        // 텍스트
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
    /*hover, focus, 선택됐을 시 */
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus,
    .react-calendar__tile--active {
      border-radius: 50%;
      background: var(--primary) !important;
      color: black !important;
    }

    .react-calendar__tile--now {
      /* border-radius: 50%;
      background: paleturquoise !important; */
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
  `;

  const curDate = new Date(); // 현재 날짜
  const activeDate = moment(value).format("YYYY-MM-DD");

  const monthOfActiveDate = moment(value).format("YYYY-MM");
  const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);

  const getActiveMonth = activeStartDate => {
    const newActiveMonth = moment(activeStartDate).format("YYYY-MM");
    setActiveMonth(newActiveMonth);
  };

  return (
    <CalendarContainer>
      <Calendar
        locale="ko"
        onChange={onChange}
        value={value}
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format("D")}
        tileContent={AddContent}
        showNeighboringMonth={false}
        onActiveStartDateChange={({ activeStartDate }) =>
          getActiveMonth(activeStartDate)
        }
      />
    </CalendarContainer>
  );
};

export default ReactCalender;
