'use client';

import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import { Container } from '@/styles/Container';
import { api } from '@/utils/axios';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { styled } from 'styled-components'


const NotificationListWrap = styled.section`
  li {
    padding: 12px 0;
    
    &:not(:last-child) {
      border-bottom: 1px solid var(--border-gray);
    }
    > div {
      &:first-child {
        display: flex;
        justify-content: space-between;
        font-size: var(--font-xs);
        color: #707070;
      }
      &:last-child {
        font-size: var(--font-s);
        margin-top: 8px;
      }
    }
  }
`


const page = () => {
  const title = '알림'

  const getNotification = async () => {
    const response = await api.get('')  
  }

  const beforeTimeFormat = (time: string) => {
    const now = Date.now()
    const timeDate = new Date(time).getTime()
    const before = now - timeDate
  
    // console.log('now: ', now);
    // console.log('timeDate: ', timeDate);
    // console.log('before: ', before);
    // console.log(Math.floor(before / (1000 * 60)));
    
    if ( Math.floor(before / (1000 * 60)) > 1000*60*60*24 ) {
      // return '일 전'
    }
    
  }

  useEffect(() => {
    beforeTimeFormat('2023-09-01 00:01:01')
  }, [])

  return (
    <Container>
      <PageTitle title={title}/>
      <NotificationListWrap>
        <ul>
          <li>
            <div>
              <div className='category'>식단 피드백</div>
              <div className='time'>분 전</div>
            </div>
            <div>김땡땡 트레이너 님으로부터 식단 피드백이 도착했어요.</div>
          </li>
          <li>
            <div>
              <div className='category'>식단 피드백</div>
              <div className='time'>10분 전</div>
            </div>
            <div>김땡땡 트레이너 님으로부터 식단 피드백이 도착했어요.</div>
          </li>
          <li>
            <div>
              <div className='category'>식단 피드백</div>
              <div className='time'>10분 전</div>
            </div>
            <div>김땡땡 트레이너 님으로부터 식단 피드백이 도착했어요.</div>
          </li>
        </ul>
      </NotificationListWrap>
    </Container>
  )
}

export default page