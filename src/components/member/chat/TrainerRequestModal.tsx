import { Button, CloseBtn } from '@/styles/Button'
import { ModalContainer, Title } from '@/styles/components/Modal';
import { ModalProps } from '@/types/style';
import React from 'react'
import styled from 'styled-components'


const RequestPopupTop = styled.div`
  text-align: center;
  padding-bottom: 1.5rem;
  font-size: var(--font-l);
  > div:last-child {
    color: var(--primary);
    font-weight: var(--font-semibold);
  }
`
const RequestPopupBody = styled.div`
  border-top: 1px solid var(--border-gray300);
  border-bottom: 1px solid var(--border-gray300);
  padding: 1.5rem;
  > div {
    display: flex;
    gap: 1.5rem;
    > div:first-child {
      color: var(--gray);
      flex: 2;
    }
    > div:last-child {
      flex: 8;
      font-size: var(--font-l);
    }
  }
`
const RequestPopupBottom = styled.div`
  width: 100%;
  text-align: center;
  color: var(--gray);
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  > div {
    margin-top: 1rem;
  }
`
const ModalContentWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const TrainerRequestModal = ({ 
  displayModal, 
  setDisplayModal, 
}: ModalProps) => {
  const handleOnClose = () => {
    setDisplayModal(false)
  }
  return (
    <ModalContainer>
      <div className='modal'>
        <div>
          <CloseBtn onClick={() => setDisplayModal(false)}/>
        </div>
        <ModalContentWrap>
          <RequestPopupTop>
            <div>화살표</div>
            <div>수업 변경 요청</div>
          </RequestPopupTop>
          <RequestPopupBody>
            <div>
              <div>트레이너</div>
              <div>ㅇㅇㅇ트레이너</div>
            </div>
            <div>
              <div>센터명</div>
              <div>아자아자 피트니스</div>
            </div>
            <div>
              <div>기존</div>
              <div>11월 15일 수요일 10:00</div>
            </div>
            <div>
              <div>변경</div>
              <div>11월 17일 금요일 13:00</div>
            </div>
          </RequestPopupBody>
          <RequestPopupBottom>
            <Button $variant='primary'>변경 수락하기</Button>
            <div>요청 철회하기</div>
          </RequestPopupBottom>
        </ModalContentWrap>
      </div>
      <div
        className='overlay'
        onClick={handleOnClose}
      ></div>
    </ModalContainer>
  )
}
