"use client";

import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

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
      <div className={`modal`} style={{ bottom: slideUpModal ? "0" : "-100%" }}>
        <Calendar
          calendarType="gregory"
          formatDay={(locale, date) => format(date, "d")}
          next2Label={null}
          prev2Label={null}
          showNeighboringMonth={false}
          value={value}
          onChange={onChange}
        />
      </div>
      <div
        className={`overlay ${slideUpModal ? "show" : ""}`}
        onClick={handleOnClose}
      ></div>
    </ModalContainer>
  );
};
