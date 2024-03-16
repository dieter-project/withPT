'use client';

import { WeeklyCalendar } from '@/components/WeeklyCalendar';
import Header from '@/components/Header';
import { BaseContentWrap, ContentSection, RoundBox } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { ArrowWrap, RecordBoxWrap } from './styles';
import { api } from '@/utils/axios';
import { NextArrow } from '../mypage/styles';
import { todayDate } from '@/constants/record';


const page = () => {
  const [meal, setMeal] = useState({});
  const [workout, setWorkout] = useState({
    exercise: "",
    urls: ""
  });
  const [weight, setWeight] = useState({})
  const router = useRouter()
  const handleGetWorkout = async () => {
    const { data: { data: workoutData } } = await api.get(`/api/v1/members/exercise?dateTime=${todayDate}`)
    setWorkout({ ...workout, ...workoutData })
  }

  const handleGetMeal = async () => {
    const response = await api.get(``)
    console.log('response: ', response);
  }

  const handleGetWeight = async () => {
    const { data: { data: weightData } } = await api.get(`/api/v1/members/body?dateTime=${todayDate}`)
    setWeight({ ...weight, ...weightData })
  }
  useEffect(() => {
    handleGetWorkout()
    handleGetWeight()
    // handleGetMeal()
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
        <WeeklyCalendar />
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
            <ArrowWrap>
              <NextArrow />
            </ArrowWrap>
          </RecordBoxWrap>
        </ContentSection>
        <ContentSection>
          <LabelTitle>운동</LabelTitle>
          <RecordBoxWrap variant='purple' onClick={() => router.push('/member/record/workout')}>
            <div>
              <div>
                <p>오늘은 운동을 하셨나요?</p>
                <div className='record-value'>
                  {workout.exercise.length < 1 ? "운동 기록 없음" : "운동 성공"}
                </div>
              </div>
              <div className='caption'>
                {workout.exercise.length < 1
                  ? <>
                    <span>!</span>
                    운동을 입력해 주세요!
                  </>
                  : <>
                    <span>♥</span>
                    오운완 성공!
                  </>}
              </div>
            </div>
            <div className='img-wrap'>
              <img src="" alt="" />
            </div>
            <ArrowWrap>
              <NextArrow />
            </ArrowWrap>
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
            <ArrowWrap>
              <NextArrow />
            </ArrowWrap>
          </RecordBoxWrap>
        </ContentSection>
      </BaseContentWrap>
    </>
  )
}

export default page