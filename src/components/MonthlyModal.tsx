"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { styled } from "styled-components";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const ModalContainer = styled.div`
  position: fixed;
  bottom: -150vh;
  background-color: var(--white);
  width: 100%;
  left: 0;
  padding: 0 12px 12px;
  transition: bottom 0.3s ease-out;
  z-index: 150;

  .overlay {
    background-color: rgba(0, 0, 0, 0.55);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: none;
    z-index: 5;
  }

  .overlay.show {
    display: block;
  }

  .modal {
    width: 100%;
    height: 60vh;
    position: fixed;
    bottom: -150vh;
    left: 0;
    background-color: var(--white);
    padding: 0.75rem 0.75rem;
    transition: bottom 0.3s ease-out;
    border-radius: 0.5rem 0.5rem 0 0;
    z-index: 10;
  }

  .modal.show {
    bottom: 0;
    transition: bottom 0.3s ease-out;
  }

  .react-calendar {
    font-family: var(--font);
    border: none;
    width: 100%;
  }

  .react-calendar__navigation {
    justify-content: center;
  }
  .react-calendar__navigation__label {
    flex-grow: 0;
    font-weight: var(--font-semibold);
  }
  .react-calendar__tile {
    color: var(--font-gray700);
    height: 4rem;
    /* display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center; */
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
    abbr {
      background-color: var(--primary);
      color: var(--white);
      width: 1.875rem;
      height: 1.875rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.25rem;
    }
  }
`

const DotWrap = styled.div`
  /* display: flex; */
  /* gap: 0.25rem; */
  /* position: absolute; */
  left: 50%;
  /* transform: translate3d(-50%, 0, 0); */
  margin-top: 0.25rem;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
`

const Dot = styled.div<{ $type: string }>`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background-color: ${props => props.$type === "meal" ? "var(--coral)" :props.$type === "workout" ? "var(--yellow)": "var(--mint)"};
`


interface ModalProps {
  displayModal: boolean;
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
  slideUpModal: boolean;
  setSlideUpModal: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveDate: React.Dispatch<React.SetStateAction<Value>>;
}

export const MonthlyModal = ({
  displayModal,
  setDisplayModal,
  slideUpModal,
  setSlideUpModal,
  setActiveDate,
}: ModalProps) => {
  const [value, onChange] = useState<Value>(new Date());
  const markDate = [
    '2024-07-02',
    '2024-07-04',
    '2024-07-10',
    '2024-07-11',
    '2024-07-23',
    '2024-07-27',
  ]
  const mealMarkDate = [
    '2024-07-03',
    '2024-07-04',
    '2024-07-11',
    '2024-07-23',
    '2024-07-27',
  ]

  useEffect(() => {
    // console.log('value: ', value?.toString());
    setActiveDate(value);
  }, [value]);

  const handleOnClose = () => {
    setDisplayModal(false);
    setSlideUpModal(false);
  };

  useEffect(() => {
    if (displayModal) {
      setTimeout(() => {
        setSlideUpModal(true);
      }, 10);
    } else {
      setSlideUpModal(false);
    }
  }, [displayModal]);

  return (
    <ModalContainer>
      <div
        className={`modal`}
        style={{ bottom: slideUpModal ? "0" : "-100%" }}>
        <Calendar
          calendarType="gregory"
          formatDay={(locale, date) => format(date, 'd')}
          next2Label={null}
          prev2Label={null}
          showNeighboringMonth={false}
          value={value}
          onChange={onChange}
          tileContent={({ date, view }) => {
            let html = []
            let meal = []
            if (markDate.find(x => x === format(date, 'yyyy-MM-dd'))) {
              html.push(<Dot $type="meal"></Dot>)
            }
            if (mealMarkDate.find(x => x === format(date, 'yyyy-MM-dd'))) {
              meal.push(<Dot $type="workout"></Dot>)
            }
            return (
              <>
                <DotWrap>
                  {html}
                  {meal}
                </DotWrap>
              </>
            )

          }}
        />
      </div>
      <div
        className={`overlay ${slideUpModal ? "show" : ""}`}
        onClick={handleOnClose}
      ></div>
    </ModalContainer>
  );
};
