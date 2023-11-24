'use client';

import Header from '@/components/Header';
import { Container } from '@/styles/Container';
import { LabelTitle, Subtext } from '@/styles/Text';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { styled } from 'styled-components'


const RecordBoxWrap = styled.div`
  width: 100%;
  height: 120px;
  background-color: var(--purple50);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  > div {
    &:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        font-size: 14px;
      }
      .record-value {
        font-size: var(--font-xl);
        font-weight: var(--font-semibold);
      }
      .caption {
        font-size: 12px;
        color: var(--font-gray700);
        display: flex;
        span {
          display: block;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: var(--purple200);
          color: var(--primary);
          text-align: center;
          margin-right: 8px;
        }
      }
    }
    .img-wrap {
      width: 92px;
      height: 92px;
      border-radius: 12px;
      img {
        object-fit: cover;
      }
    }
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
          <LabelTitle>식단</LabelTitle>
          <RecordBoxWrap>
            <div>
              <div>
                <p>오늘은 뭘 드셨나요?</p>
                <div className='record-value'>0 Kcal</div>
              </div>
              <div className='caption'>
                <span>!</span>식단을 입력해 주세요!
              </div>
            </div>
            <div className='img-wrap'>
              <img src="" alt="" />
            </div>
          </RecordBoxWrap>
        </section>
        <section>
          <LabelTitle>운동</LabelTitle>
          <RecordBoxWrap>
            <div>
              <div>
                <p>오늘은 운동을 하셨나요?</p>
                <div className='record-value'>운동 없음</div>
              </div>
              <div className='caption'>
                <span>!</span>운동을 입력해 주세요!
              </div>
            </div>
            <div className='img-wrap'>
              <img src="" alt="" />
            </div>
          </RecordBoxWrap>
        </section>
        <section>
          <LabelTitle>체중</LabelTitle>
          <RecordBoxWrap>
            <div>
              <div>
                <p>오늘의 체중은?</p>
                <div className='record-value'>0 kg</div>
              </div>
              <div className='caption'>
                <span>!</span>체중을 입력해 주세요!
              </div>
            </div>
            <div className='img-wrap'>
              <img src="" alt="" />
            </div>
          </RecordBoxWrap>
        </section>
      </div>
    </Container>
  )
}

export default page