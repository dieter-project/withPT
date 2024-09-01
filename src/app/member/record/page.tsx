'use client';

import React, { useEffect, useMemo, useState } from 'react'
import Header from '@/components/Header';
import { WeeklyCalendar } from '@/components/WeeklyCalendar';
import { BaseContentWrap, ContentSection } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { useRouter } from 'next/navigation';
import { ArrowWrap, RecordBoxWrap } from './styles';
import { NextArrow } from '../mypage/styles';
import { EXERCISE_GOAL, todayDate } from '@/constants/record';
import { getExerciseByDate } from '@/services/member/exercise';
import { getBody } from '@/services/member/body';
import { getDietByDate } from '@/services/member/diet';
import { getMemberInfo } from '@/services/member/member';
import { MemberInfo } from '@/types/member/member';
import { getRecord } from '@/services/member/record';


const page = () => {
  const dietInit = {}
  const workoutInit = {
    exercise: "",
    urls: ""
  }
  const weightInit = {
    currentTargetWeight: 0,
    weights: [
      {
        recentUploadDate: "",
        weight: 0
      }
    ],
    bodyInfo: {
      weight: 0,
      targetWeight: 0,
      record: true
    }
  }
  const [diet, setDiet] = useState(dietInit);
  const [workout, setWorkout] = useState(workoutInit);
  const [weight, setWeight] = useState(weightInit)
  const [memberInfo, setMemberInfo] = useState<MemberInfo>();
  const router = useRouter()

  const handleGetWorkout = async () => {
    try {
      const { data: { data } } = await getExerciseByDate(todayDate)
      setWorkout(data)
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const handleGetDiet = async () => {
    try {
      const { data: { data } } = await getDietByDate(todayDate)
      setDiet(data)
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const handleGetWeight = async () => {
    try {
      const { data: { data } } = await getBody(todayDate)
      setWeight(data)
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const dietSubText = useMemo(() => {
    // if (diet.length ) 
  }, [diet])

  const getMember = async () => {
    try {
      const { data: { data: memberInfo } } = await getMemberInfo()
      setMemberInfo(memberInfo);
    } catch (error) {
      console.log('error: ', error);
    }
  }
  // const workoutSubText = useMemo(async () => {
  //   if (memberInfo) {
  //     const findGoalFrequency = EXERCISE_GOAL.find(goal => {
  //       return goal.title === memberInfo.exerciseFrequency
  //     })

  //     const findFrequency = EXERCISE_GOAL.find(goal => {
  //       return goal.title === memberInfo.exerciseFrequency
  //     })
      
  //   }
  // }, [workout, memberInfo])

  const getRecords = async () => {
    try {
      const {data} = await getRecord(todayDate)
      console.log('data: ', data);
    } catch (error) {}
  }

  useEffect(() => {
    // handleGetWorkout()
    // handleGetWeight()
    // handleGetDiet()
    getMember()
    getRecords()
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
          <RecordBoxWrap variant='purple' onClick={() => router.push('/member/record/diet')}>
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
                <div className='record-value'>{weight.currentTargetWeight} kg</div>
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