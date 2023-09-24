import { Input } from '@/styles/Input'
import React from 'react'
import { styled } from 'styled-components'

const MealSearchModalWrap = styled.div`
  .container {
    width: 100%;
    height: 90vh;
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
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 54px;

  li {
    width: 110px;
    height: 85px;
    position: relative;
    font-size: var(--font-s);
    font-weight: var(--font-semibold);
    background-color: var(--purple50);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    button {
      position: absolute;
      top: 10px;
      right: 10px;
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
    padding: 20px 0;
    border-bottom: 1px solid var(--border-gray);
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

export const MealSearchModal = () => {
  return (
    <MealSearchModalWrap>
      <div className='container'>
        <div>음식 종류 검색</div>
        <div>
          <InputWrap>
            <Input type="text" placeholder='종류를 검색해보세요'/>
            <div>취소</div>
          </InputWrap>
          <div>
            <ListTop>
              <div>최근에 등록된 식단</div>
              <button className='all-delete'>전체삭제</button>
            </ListTop>
            <div>
              <RecentRegistMealList>
                <li>
                  <div>견과류와 요거트</div>
                  <button>X</button>
                </li>
              </RecentRegistMealList>
            </div>
          </div>
          <div>
            <ListTop>
              <div>최근 검색어</div>
              <button className='all-delete'>전체삭제</button>
            </ListTop>
            <div>
              <RecentSearchtMealList>
                <li>
                  <div>햇반 작은 공기</div>
                  <div>X</div>
                </li>
                <li>
                  <div>두부</div>
                  <div>X</div>
                </li>
                <li className='not-result'>
                  <div>트러플소금으로 0개 검색되었습니다</div>
                  <button>X</button>
                </li>
              </RecentSearchtMealList>
            </div>
          </div>
        </div>
      </div>
      <div className='mask'></div>
    </MealSearchModalWrap>
  )
}