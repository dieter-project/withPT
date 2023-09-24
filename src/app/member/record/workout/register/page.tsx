'use client';

import PageTitle from '@/components/PageTitle';
import { Button } from '@/styles/Button';
import { Container } from '@/styles/Container';
import { LabelTitle } from '@/styles/Text';
import { WorkoutList } from '@/styles/WorkoutList';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { styled } from 'styled-components'

const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`

const WorkoutImgList = styled.ul`
  li {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    button {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
`

const ListAddButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: var(--purple50);
  border-radius: 8px;
  color: var(--font-secondary);
`

const page = () => {
  const title = '운동 입력'
  
  return (
    <Container>
      <PageTitle title={title}/>
      <div>
        <div>2023년 11월 15일(목)</div>
        <div>
          <LabelTitle>오늘 한 운동 3</LabelTitle>
          <WorkoutList>
            <div>
              <ul>
                <li>
                  <div>이미지</div>
                  <div>
                    <div>힙 어브덕션</div>
                    <div className='workout-contents'>횟수</div>
                  </div>
                </li>
                <li>
                  <div>이미지</div>
                  <div>
                    <div>힙 어브덕션</div>
                    <div className='workout-contents'>횟수</div>
                  </div>
                </li>
                <li>
                  <div>이미지</div>
                  <div>
                    <div>힙 어브덕션</div>
                    <div className='workout-contents'>횟수</div>
                  </div>
                </li>
              </ul>
            </div>
          </WorkoutList>
        </div>
        <div>
          <LabelTitle>운동 사진</LabelTitle>
          <WorkoutImgList>
            <li>
              <img src="" alt="" />
              <button>X</button>
            </li>
            <ListAddButton>+</ListAddButton>
          </WorkoutImgList>
        </div>
      </div>
      <ButtonWrap>
        <Button variant='secondary'>운동추가</Button>
        <Button variant='primary'>기록완료</Button>
      </ButtonWrap>
    </Container>
  )
}

export default page