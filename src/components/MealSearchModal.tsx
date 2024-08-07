import { CloseBtn, InputResetBtn } from '@/styles/Button'
import { Input } from '@/styles/Input'
import { ModalTitle } from '@/styles/components/Modal'
import React, { SetStateAction, useEffect, useState } from 'react'
import { styled } from 'styled-components'

const MealSearchModalWrap = styled.div`
  .container {
    width: 100%;
    height: 90vh;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    background-color: var(--white);
    padding: 1.25rem;
    border-radius: 1rem 1rem 0 0;
  }
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 200;
  }
`

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  input {
    width: 90%;
  }
`

const ListTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    font-size: var(--font-xs);
    color: var(--font-gray500);
  }
  button {
    font-size: var(--font-xxs);
    color: var(--font-gray500);
    width: 47px;
    height: 21px;
    background-color: #f3f3f3;
    border-radius: 4px;
  }
`

const RecentRegistMealList = styled.ul`
  display: flex;
  gap: 0.625rem;
  margin-top: 1.25rem;
  margin-bottom: 54px;

  li {
    width: 110px;
    height: 85px;
    position: relative;
    font-size: var(--font-s);
    font-weight: var(--font-semibold);
    background-color: var(--purple50);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    button {
      position: absolute;
      top: 0.625rem;
      right: 0.625rem;
    }
  }
  `

const RecentSearchtMealList = styled.ul`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--font-s);
    font-weight: var(--font-medium);
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--border-gray300);
  }
  .not-result {
    font-weight: var(--font-medium);
    div {
      &:first-child {
        flex: 9;
        text-align: center;
      }
    }
  }
`

const EmptyText = styled.div`
  font-size: 0.875rem;
  text-align: center;
`

export const MealSearchModal = ({
  setSearchOpen
}: {
  setSearchOpen: React.Dispatch<SetStateAction<boolean>>
}) => {
  const [meals, setMeals] = useState([])

  useEffect(() => {

  }, [])

  return (
    <MealSearchModalWrap>
      <div className='container'>
        <ModalTitle>음식종류 검색</ModalTitle>
        <div>
          <InputWrap>
            <Input type="text" placeholder='종류를 검색해보세요' />
            <div>
              <InputResetBtn />
            </div>
          </InputWrap>
          {meals.length > 0
            ? <div>
              <ListTop>
                <div>최근에 등록된 식단</div>
                <button className='all-delete'>전체삭제</button>
              </ListTop>
              <RecentSearchtMealList>
                <li>
                  <div>햇반 작은 공기</div>
                  <div>
                    <CloseBtn />
                  </div>
                </li>
                <li>
                  <div>두부</div>
                  <div>
                    <CloseBtn />
                  </div>
                </li>
              </RecentSearchtMealList>
            </div>
            : <EmptyText>
                최근 검색한 기록이 없습니다
            </EmptyText>
          }


        </div>
      </div>
      <div className='mask' onClick={() => setSearchOpen(false)}></div>
    </MealSearchModalWrap>
  )
}
