'use client';

import { WeeklyCalendar } from '@/components/WeeklyCalendar';
import Header from '@/components/Header';
import { BaseContentWrap, ContentSection, RoundBox } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { RecordBoxWrap } from './styles';
import { api } from '@/utils/axios';


const page = () => {
  const router = useRouter()

  const handleGetWorkout = async () => {
    const response = await api.get('/api/v1/members/exercise')
    console.log('response: ', response);
  }
  useEffect(() => {
    handleGetWorkout()
  }, [])
  
  return (
    <>
      <Header
        back={true}
        bookmark={true}
        calendar={true}
      />
      <BaseContentWrap>
        {/* <section>
          달력
        </section> */}
        <WeeklyCalendar/>
        <ContentSection>
          <LabelTitle>식단</LabelTitle>
          <RecordBoxWrap variant='purple' onClick={() => router.push('/member/record/meal')}>
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
        </ContentSection>
        <ContentSection>
          <LabelTitle>운동</LabelTitle>
          <RecordBoxWrap variant='purple' onClick={() => router.push('/member/record/workout')}>
            <div>
              <div>
                <p>오늘은 운동을 하셨나요?</p>
                <div className='record-value'>운동 기록 없음</div>
              </div>
              <div className='caption'>
                <span>!</span>운동을 입력해 주세요!
              </div>
            </div>
            <div className='img-wrap'>
              <img src="" alt="" />
            </div>
          </RecordBoxWrap>
        </ContentSection>
        <ContentSection>
          <LabelTitle>체중</LabelTitle>
          <RecordBoxWrap variant='purple' onClick={() => router.push('/member/record/weight')}>
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
        </ContentSection>
      </BaseContentWrap>
    </>
  )
}

export default page