'use client';

import Header from '@/components/Header';
import { WorkoutPayload } from '@/redux/reducers/workoutRecordSlice';
import { AddRecordButton } from '@/styles/AddButton';
import { BaseContentWrap, ContentSection, RoundBox } from '@/styles/Layout';
import { GoalBox } from '@/styles/RecordPage';
import { LabelTitle } from '@/styles/Text';
import { api } from '@/utils/axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Plus from '../../../../../public/svgs/icon_plus.svg'

const WorkoutImg = styled.div`
  width: 100%;
  height: 194px;
  border-radius: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const WorkoutList = styled(RoundBox)`
    display: flex;
    background-color: var(--purple50);
    padding: 0.625rem;
    margin-bottom: 0.625rem;
    border-radius: 0.5rem;
    >div {
      &:first-child {
        width: 40px;
        height: 40px;
        background-color: #a3a3a3;
        border-radius: 0.5rem;
        margin-right: 0.625rem;
      }
    }
`

const WorkoutListTitle = styled.div`
  font-size: var(--font-s);
`
const WorkoutListDetail = styled.div`
  font-size: var(--font-xs);
  color: var(--font-gray700);
  display: flex;
`

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AddButton = styled.button`
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  text-indent: -999px;
  background: url(/svgs/icon_plus.png) no-repeat;
`

const page = () => {
  const [workout, setWorkout] = useState<WorkoutPayload[]>([])
  const router = useRouter()

  const handleGetWorkout = async () => {
    const response = await api.get('/api/v1/members/exercise')
    console.log('data: ', response.data);
  }

  const handleGetWorkoutGoal = async () => {

  }

  useEffect(() => {
    handleGetWorkout()
    handleGetWorkoutGoal()
    setWorkout([
      {
        exerciseDate: '2023-11-14',
        title: '힙 어브덕션',
        weight: 30,
        set: 3,
        times: 15,
        hour: null,
        bookmarkYn: null,
        bodyPart: '',
        exerciseType: 'ANAEROBIC',
      }, {
        exerciseDate: '2023-11-14',
        title: '불타는 전신 운동',
        weight: null,
        set: null,
        times: null,
        hour: 60,
        bookmarkYn: null,
        bodyPart: 'WHOLE_BODY',
        exerciseType: 'AEROBIC',
      }, {
        exerciseDate: '2023-11-14',
        title: '폼롤러 스트레칭',
        weight: null,
        set: null,
        times: null,
        hour: 20,
        bookmarkYn: null,
        bodyPart: 'WHOLE_BODY',
        exerciseType: 'STRETCHING',
      }
    ])
  }, [])

  return (
    <>
      <Header back={true} bookmark={true} calendar={true} />
      <BaseContentWrap>
        <section>
          달력
        </section>
        <ContentSection>
          <GoalBox variant='purple'>
            <p>이번주 목표까지 3회 남았어요</p>
            <div>운동을 아직 하지 않으셨어요ㅜ</div>
          </GoalBox>
        </ContentSection>
        <ContentSection>
          <TitleWrap>
            <LabelTitle>운동</LabelTitle>
            <Plus fill="#444444" width="1rem" height="1rem" />
          </TitleWrap>
          {workout === null
            ? <AddRecordButton variant='purple' onClick={() => router.push('/member/record/workout/register')}>
              <div>!</div>
              <p>눌러서 운동을 입력해주세요.</p>
            </AddRecordButton>
            : <>
              <div>
                <ul>
                  {workout?.map((workout, index) => {
                    return (
                      <li key={index}>
                        <WorkoutList variant='purple'>
                          <div>이미지</div>
                          <div>
                            <WorkoutListTitle>{workout.title}</WorkoutListTitle>
                            <WorkoutListDetail>
                              {workout.bodyPart && <div>{workout.bodyPart},</div>}
                              {workout.weight && <div>{workout.weight}kg </div>}
                              {workout.times && <div>x {workout.times}분</div>}
                              {workout.set && <div>x {workout.set}set</div>}
                              {workout.hour && <div>{workout.hour}분</div>}
                            </WorkoutListDetail>
                          </div>
                        </WorkoutList>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </>
          }

          <div>
            <TitleWrap>
              <LabelTitle>운동 사진</LabelTitle>
              <Plus fill="#444444" width="1rem" height="1rem" />
            </TitleWrap>
            <WorkoutImg>
              <img src="" alt="" />
            </WorkoutImg>
          </div>
        </ContentSection>
      </BaseContentWrap>
    </>
  )
}

export default page