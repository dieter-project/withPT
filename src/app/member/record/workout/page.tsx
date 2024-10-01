'use client';

import Header from '@/components/Header';
import { WorkoutPayload } from '@/redux/reducers/workoutRecordSlice';
import { AddRecordButton } from '@/styles/AddButton';
import { BaseContentWrap, ContentSection } from '@/styles/Layout';
import { GoalBox } from '@/styles/RecordPage';
import { LabelTitle } from '@/styles/Text';
import { api } from '@/utils/axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Plus from '../../../../../public/svgs/icon_plus.svg'
import { TitleWrap, WorkoutImg, WorkoutImgGrid, WorkoutList, WorkoutListDetail, WorkoutListTitle } from './style';
import { format } from 'date-fns';
import { useAppSelector } from '@/redux/hooks';


const page = () => {
  const [workout, setWorkout] = useState<WorkoutPayload[]>([])
  const router = useRouter()
  const date = format(new Date(), 'yyyy-MM-dd')
  const user = useAppSelector((state) => state.member)
  const handleGetWorkout = async () => {
    const { data } = await api.get(`/api/v1/members/exercise?dateTime=${date}`)
    console.log('data: ', data);

    setWorkout(data.exercise)
  }

  const handleGetWorkoutGoal = async () => {

  }

  useEffect(() => {
    handleGetWorkout()
    handleGetWorkoutGoal()
  }, [])

  return (
    <>
      <Header back={true} bookmark={true} calendar={true} />
      <BaseContentWrap>
        <section>
          달력
        </section>
        <ContentSection>
          <GoalBox>
            <div>
              <p>이번주 목표까지 3회 남았어요</p>
              {(workout?.length === 0 || workout === undefined) 
                ? <div>운동을 아직 하지 않으셨어요ㅜ</div> 
                : <div>오늘도 오운완! 잘하셨어요 {user.name}님:)</div>}
            </div>
            <div>
              <img src="/images/weight_achv.png" alt="" />
            </div>
          </GoalBox>
        </ContentSection>
        <ContentSection>
          <TitleWrap>
            <LabelTitle>운동</LabelTitle>
            {workout?.length > 0 && <Plus fill="#444444" width="1rem" height="1rem" />}
          </TitleWrap>
          {workout?.length > 0
            ? <>
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
            : <AddRecordButton variant='purple' onClick={() => router.push('/member/record/workout/register')}>
              <div>!</div>
              <p>눌러서 운동을 입력해주세요.</p>
            </AddRecordButton>
          }
          {workout?.length > 0 &&
            <div>
              <TitleWrap>
                <LabelTitle>운동 사진</LabelTitle>
                <Plus fill="#444444" width="1rem" height="1rem" />
              </TitleWrap>
              <WorkoutImgGrid>
                <ul>
                  {workout?.map(() => {
                    return (
                      <li>
                        <WorkoutImg>
                          <img src="" alt="" />
                        </WorkoutImg>
                      </li>
                    )
                  })
                  }
                </ul>
              </WorkoutImgGrid>
            </div>
          }
        </ContentSection>
      </BaseContentWrap>
    </>
  )
}

export default page