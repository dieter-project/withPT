'use client';

import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import { BaseContentWrap } from '@/styles/Layout';
import { api } from '@/utils/axios';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { styled } from 'styled-components'


const NotificationList = styled.ul`
  li {
    padding: 0.75rem 0;
    
    &:not(:last-child) {
      border-bottom: 1px solid var(--border-gray300);
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
        margin-top: 0.5rem;
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
    <>
      <PageHeader title={title}/>
      <BaseContentWrap>
        <NotificationList>
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
        </NotificationList>
      </BaseContentWrap>
    </>
  )
}

export default page