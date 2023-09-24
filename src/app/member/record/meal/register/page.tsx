'use client';

import PageTitle from '@/components/PageTitle';
import { TimehModal } from '@/components/TimeModal';
import { Button } from '@/styles/Button';
import { CategoryPartList } from '@/styles/CategoryPartList';
import { Container } from '@/styles/Container';
import { LabelTitle } from '@/styles/Text';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'


const CategoryList = styled.ul`
  
`

const MealTime = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid var(--border-gray);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 24px;
`

const MealList = styled.ul`
  margin-bottom: 24px;
  li{
    width: 100%;
    height: 73px;
    border: 1px solid var(--border-gray);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    >div {
      padding: 20px;
      .amount {
        font-size: var(--font-s);
      }
    }
  }
`

const MealImgWrap = styled.ul`
  li {
    width: 111px;
    height: 111px;
    border-radius: 8px;
    background-color: var(--purple50);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const page = () => {
  const title = '식단 입력'
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {modalOpen && <TimehModal setModalOpen={setModalOpen}/>}
      <Container>
        <PageTitle title={title}/>
        <div>
          <div>
            <LabelTitle>분류</LabelTitle>
            <CategoryPartList>
              <li>아침</li>
              <li>아점</li>
              <li>점심</li>
              <li>점저</li>
              <li>저녁</li>
              <li>간식</li>
            </CategoryPartList>
          </div>
          <div>
            <LabelTitle>식사 시간</LabelTitle>
            <MealTime onClick={() => setModalOpen(true)}>식사시간 입력</MealTime>
          </div>
          <div>
            <LabelTitle>음식 종류</LabelTitle>
            <MealList>
              <li>
                <div>
                  <div>견과류</div>
                  <div className='amount'>20g</div>
                </div>
                <div>
                  X
                </div>
              </li>
              <li>
                <div>
                  <div>요거트</div>
                  <div className='amount'>150g</div>
                </div>
                <div>
                  X
                </div>
              </li>
              <Button variant='secondary' onClick={()=>setModalOpen(true)}>추가하기</Button>
            </MealList>
          </div>
          <div>
            <LabelTitle>사진</LabelTitle>
            <MealImgWrap>
              <li>+</li>
            </MealImgWrap>
          </div>
        </div>
        <Button variant='primary'>저장하기</Button>
      </Container>
    </>
  )
}

export default page