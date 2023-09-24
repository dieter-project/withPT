'use client';

import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import { Button } from '@/styles/Button';
import { Container } from '@/styles/Container';
import { LabelTitle } from '@/styles/Text';
import { api } from '@/utils/axios';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { styled } from 'styled-components'


const ScheduleListWrap = styled.section`
`

const ScheduleDate = styled.div`
  border-bottom: 1px solid var(--border-gray);
  padding: 0 10px;
  `

const ScheduleDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 12px 10px 0;
  div {
    display: flex;
    align-items: center;
    &:first-child {
      display: flex;
      font-weight: var(--font-semibold);
      &::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--primary);
        margin-right: 10px;
      }
    }
    &:last-child {
      font-size: var(--font-s);
    }
  }
`


const page = () => {
  const title = '나의 수업일정'

  const getSchedule = async () => {
    const response = await api.get('')  
  }

  return (
    <Container>
      <PageTitle title={title}/>
      <div>
        <section>
          <div>달력</div>
        </section>
        <ScheduleListWrap>
          <LabelTitle>수업일정</LabelTitle>
          <div>
            <ul>
              <li>
                <ScheduleDate>
                  <LabelTitle>11. 15 목요일</LabelTitle>
                </ScheduleDate>
                <ScheduleDetail>
                  <div>10:00 ~ 10:50</div>
                  <div>with 김땡땡 트레이너</div>
                </ScheduleDetail>
              </li>
              <li>
                <ScheduleDate>
                  <LabelTitle>11. 17 토요일</LabelTitle>
                </ScheduleDate>
                <ScheduleDetail>
                  <div>14:00 ~ 14:50</div>
                  <div>with 근육맨 트레이너</div>
                </ScheduleDetail>
              </li>
            </ul>
          </div>
          <div>
            <Button variant='primary'>수업 예약하기</Button>
          </div>
        </ScheduleListWrap>
      </div>
    </Container>
  )
}

export default page