import { Button, CloseBtn } from '@/styles/Button'
import { ModalContainer, Title } from '@/styles/components/Modal';
import { ModalProps } from '@/types/style';
import React, { useState } from 'react'
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

export const NewClassRequestModal = ({
  displayModal,
  setDisplayModal,
}: ModalProps) => {
  const [choiseDate, setChoiseDate] = useState([])

  const handleOnClose = () => {
    setDisplayModal(false)
  }
  const handleSubmit = async () => {
  }
  return (
    <ModalContainer $full>
      <div className='modal'>
        <div>
          <CloseBtn onClick={() => setDisplayModal(false)} />
        </div>
        <div>
          <Title>수업등록 요청</Title>
          <ModalContents>
            <div>
              <h3>트레이너 정보</h3>
              <div>
                <div>ㅇㅇㅇ 트레이너</div>
                <div>아자아자피트니스</div>
              </div>
            </div>
            <div>
              <div>
                <h3>날짜 선택</h3>
                <div>펼치기</div>
              </div>
              <div>
                달력
              </div>
            </div>
            <div>
              <div>
                <h3>시간 선택</h3>
                <div>펼치기</div>
              </div>
              <div>
                <div>
                  <div>오전</div>
                  <div>
                    <ul>
                      <li>10:00</li>
                      <li>11:00</li>
                      <li>12:00</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>오후</div>
                  <div>
                    <ul>
                      <li>10:00</li>
                      <li>11:00</li>
                      <li>12:00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Button $variant='primary'>수업 요청하기</Button>
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
