'use client'

import { ScheduleDates } from '@/types/member/schedule';
import { format } from 'date-fns';
import { useSearchParams } from 'next/navigation';
import React, { ReactElement, useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import { TileArgs, Value, View } from 'react-calendar/dist/cjs/shared/types';
import { styled } from 'styled-components';

const CalendarWrap = styled.div`
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

const Dot = styled.div`
  width: 0.3125rem;
  height: 0.3125rem;
  border-radius: 50%;
  background-color: var(--primary);
  
`
interface Tile {
  date: TileArgs | Date
  view?: View
}
const MonthlyCalendar = ({ activeDate, setActiveDate, markDate, handleClick, onChange }: {
  activeDate: Value, 
  setActiveDate: React.Dispatch<React.SetStateAction<Value>>,
  markDate: string[],
  handleClick?: () => void;
  onChange: (value: Value) => void;
}) => {
  const searchParams = useSearchParams();
  const dateParams = searchParams.get("date")
  // const [value, onChange] = useState<ScheduleDates>(new Date(dateParams || ""));
  // console.log('value: ', value);
  
  useEffect(() => {
    if (dateParams) {
      setActiveDate(new Date(dateParams))
    }
  }, [])

  const tileContent = ({date, view} : TileArgs): ReactElement => {
    // console.log('date: ', format(date, 'yyyy-MM-dd'));
    let html = []
    if (markDate.find(x => x === format(date, 'yyyy-MM-dd'))) {
      html.push(<Dot></Dot>)
    }
    return (
      <>
        <div>
          {html}
        </div>
      </>
    )

  }
  

  // const markDate = [
  //   '2023-12-02',
  //   '2023-12-04',
  //   '2023-12-10',
  //   '2023-12-12',
  //   '2023-12-23',
  //   '2023-12-27',
  // ]
  return (
    <CalendarWrap>
    <Calendar
      calendarType="gregory"
      formatDay={(locale, date) => format(date, 'd')}
      next2Label={null}
      prev2Label={null}
      showNeighboringMonth={false}
      value={activeDate}
      onChange={onChange}
      onClickDay={handleClick}
      tileContent={(date) => tileContent(date)}
    />
    </CalendarWrap>
  )
}

export default MonthlyCalendar;