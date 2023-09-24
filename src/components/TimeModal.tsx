import { Button } from '@/styles/Button'
import { Input } from '@/styles/Input'
import React, { Dispatch, SetStateAction } from 'react'
import { styled } from 'styled-components'

type setStateProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const TimeModalWrap = styled.div`
  .container {
    width: 100%;
    height: 60vh;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    background-color: var(--white);
    padding: 20px;
    border-radius: 16px 16px 0 0;
  }
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 90%;
  }
`


export const TimehModal = ({ setModalOpen }: setStateProps) => {
  return (
    <TimeModalWrap>
      <div className='container'>
        <div>시간 입력</div>
        <div>
          <InputWrap>
            <input type="time" /> : <input type="time" />
            <select name="" id="">
              <option value="">오전</option>
              <option value="">오후</option>
            </select>
          </InputWrap>
          <div>
          </div>
        </div>
        <div>
          <Button variant='primary'>저장하기</Button>
        </div>
      </div>
      <div className='mask' onClick={() => setModalOpen(false)}></div>
    </TimeModalWrap>
  )
}
