'use client';

import Header from '@/components/Header';
import { AddRecordBox } from '@/styles/AddRecordBox';
import { Container } from '@/styles/Container';
import { LabelTitle } from '@/styles/Text';
import { WorkoutList } from '@/styles/WorkoutList';
import React, { useEffect } from 'react'
import { styled } from 'styled-components'

const GoalBox = styled.div`
  width: 100%;
  height: 114px;
  background-color: var(--purple50);
  border-radius: 8px;
  padding: 20px;

  p {
    font-size: var(--font-s);
    color: var(--font-secondary);
  }
  
  div {
    font-size: var(--font-xl);
    font-weight: var(--font-semibold);
  }
`

const WorkoutImg = styled.div`
  width: 100%;
  height: 194px;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const page = () => {
  
  return (
    <Container>
      <Header/>
      <div>
        <section>
          달력
        </section>
        <section>
          <GoalBox>
            <p>이번주 목표까지 3회 남았어요</p>
            <div>운동을 아직 하지 않으셨어요ㅜ</div>
          </GoalBox>
          <div>
            <LabelTitle>운동</LabelTitle>
            <AddRecordBox>
              <p>눌러서 운동을 입력해주세요.</p>
              <div>+</div>
            </AddRecordBox>
          </div>
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
          <WorkoutImg>
            <img src="" alt="" />
          </WorkoutImg>
        </section>
      </div>
    </Container>
  )
}

export default page