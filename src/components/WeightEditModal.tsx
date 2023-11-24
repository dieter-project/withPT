'use client'

import React, { SetStateAction, useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { styled } from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

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
      border-radius: 50%;
      padding: 0.25rem;
    }
  }
`

const WeightForm = styled.div`
  
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
  setActiveDate
}: ModalProps) => {
  const [value, onChange] = useState<Value>(new Date());
  
  useEffect(() => {
    // console.log('value: ', value?.toString());
    setActiveDate(value)
  }, [value])

  const handleOnClose = () => {
    setDisplayModal(false)
    setSlideUpModal(false)
  }

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
        <div>
          <div>신체 정보 수정</div>
          <WeightForm>
            <div>
              
            </div>
          </WeightForm>
        </div>
      </div>
      <div
        className={`overlay ${slideUpModal ? "show" : ""}`}
        onClick={handleOnClose}
      ></div>
    </ModalContainer>
  )
}
