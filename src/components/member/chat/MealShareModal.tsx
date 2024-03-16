import { Button, CloseBtn } from '@/styles/Button'
import { ModalContainer, Title } from '@/styles/components/Modal';
import { ModalProps } from '@/types/style';
import React from 'react'
import styled from 'styled-components'


const MealList = styled.ul`
  li {
    width: 100%;
    padding: 0.825rem;
    font-weight: var(--font-medium);
  }
  li.active {
    background-color: var(--purple50);
    border-radius: 0.5rem;
    color: var(--primary);
    border: 1px solid var(--primary);
  }
`
const ModalContents = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MealShareModal = ({ 
  displayModal, 
  setDisplayModal, 
}: ModalProps) => {
  const handleOnClose = () => {
    setDisplayModal(false)
  }
  const handleSubmit = async () => {
  }
  return (
    <ModalContainer>
      <div className='modal'>
        <div>
          <CloseBtn onClick={() => setDisplayModal(false)}/>
        </div>
        <div>
          <Title>식단 선택</Title>
          <ModalContents>
            <MealList>
              <li className='active'>오늘 식단</li>
              <li>11월 13일 월요일 식단</li>
              <li>11월 9일 목요일 식단</li>
            </MealList>
            <Button variant='primary' onClick={handleSubmit}>전송하기</Button>
          </ModalContents>
        </div>
      </div>
      <div
        className='overlay'
        onClick={handleOnClose}
      ></div>
    </ModalContainer>
  )
}
