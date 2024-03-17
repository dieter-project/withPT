'use client'

import React, { ChangeEvent, SetStateAction, useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { Input, InputRowWrap, InputWrap, Select } from '@/styles/Input';
import { Button, CloseBtn } from '@/styles/Button';
import { todayDate } from '@/constants/record';
import { api } from '@/utils/axios';
import { WeightRecord } from '@/types/member/record';

const Title = styled.div`
  text-align: center;
  font-size: 1.125rem;
  font-weight: var(--font-semibold);
  margin-bottom: 2.75rem;
`
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

  .overlay {
    display: block;
  }

  .modal {
    width: 100%;
    height: 60vh;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: var(--white);
    padding: 0.75rem 0.75rem;
    animation: slideUp 0.3s ease-out;
    border-radius: 0.5rem 0.5rem 0 0;
    z-index: 10;

    > div:first-child {
      text-align: right;
    }
  }

  @keyframes slideUp {
    from {
      bottom: -100%;
    }
    to {
      bottom: 0;
    }
  }
  
`

const WeightForm = styled.div`
  padding: 0 0.5rem;
  label {
    font-weight: var(--font-semibold);
    white-space: nowrap;
  }
`

const DateWrap = styled.div`
  display: flex;
  gap: 0.5rem;
`

interface ModalProps {
  displayModal: boolean;
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
  todayWeight: WeightRecord;
  setTodayWeight:  React.Dispatch<React.SetStateAction<WeightRecord>>;
}

export const WeightEditModal = ({ 
  displayModal, 
  setDisplayModal, 
  todayWeight,
  setTodayWeight
}: ModalProps) => {
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: "",
    date: ""
  })
  const [dateArray, setDateArray] = useState<number[]>([])
  const handleOnClose = () => {
    setDisplayModal(false)
  }
  let monthArray = [];

  for (let i = 1; i <= 12; i++) {
    monthArray.push(i)
  }
  
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodayWeight({
      ...todayWeight,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    const recordDate = `${date.year}-${date.month}-${date.date}`
    setTodayWeight({
      ...todayWeight,
      weightRecordDate: recordDate
    })
    // const response = await api.post(``);
  }
  
  useEffect(() => {
    let newArray:number[] = [];
    let last = new Date(date.year, Number(date.month), 0);
    for (let i = 1; i <= last.getDate(); i++) {
      newArray.push(i)
    }
    setDateArray(newArray)
  }, [date.month])
  

  return (
    <ModalContainer>
      <div className='modal'>
        <div>
          <CloseBtn onClick={() => setDisplayModal(false)}/>
        </div>
        <div>
          <Title>신체 정보 수정</Title>
          <WeightForm>
            <InputRowWrap>
              <label>골격근량</label>
              <InputWrap>
                <Input 
                  value={todayWeight.skeletalMuscle}
                  name='skeletalMuscle'
                  onChange={handleInputChange}
                />
                <span>kg</span>
              </InputWrap>
            </InputRowWrap>
            <InputRowWrap>
              <label>체지방률</label>
              <InputWrap>
                <Input
                  value={todayWeight.bodyFatPercentage}
                  name='bodyFatPercentage'
                  onChange={handleInputChange}
                />
                <span>%</span>
              </InputWrap>
            </InputRowWrap>
            <InputRowWrap>
              <label>BMI</label>
              <InputWrap>
                <Input
                  value={todayWeight.bmi}
                  name='bmi'
                  onChange={handleInputChange}
                />
                <span>%</span>
              </InputWrap>
            </InputRowWrap>
            <InputRowWrap>
              <label>측정일</label>
              <DateWrap>
                <Input value={date.year}/>
                <Select onChange={(e) => {
                  setDate({
                    ...date,
                    month: e.target.value
                  })
                }}>
                  {monthArray.map((month, index) => {
                    return (
                      <option value={month} key={index}>{month}</option>
                    )
                  })}
                </Select>
                <Select onChange={(e) => {
                  setDate({
                    ...date,
                    date: e.target.value
                  })
                }}>
                  {dateArray.map((date, index) => {
                    return (
                      <option value={date} key={index}>{date}</option>
                    )
                  })}
                </Select>
              </DateWrap>
            </InputRowWrap>
            <Button variant='primary' onClick={handleSubmit}>저장하기</Button>
          </WeightForm>
        </div>
      </div>
      <div
        className='overlay'
        onClick={handleOnClose}
      ></div>
    </ModalContainer>
  )
}
