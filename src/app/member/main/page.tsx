'use client';

import Header from '@/components/Header';
import { api } from '@/utils/axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { ExclamationMark, LabelTitle } from '@/styles/Text';
import { ContentSection } from '@/styles/Layout';
import MemberBottomNav from '@/components/MemberBottomNav';
import { TrainerSwipe } from '@/components/TrainerSwipe';
import {
  EmptyTodayMeal,
  GoalContents,
  MainWrap,
  MoveButton,
  MyGoal,
  TodayMeal,
  TodayMealContents,
  TodayMealList,
  TodayTab
} from './styles';
import DonutChart from '@/components/member/main/DonutChart';
import WorkoutList from '@/components/member/WorkoutList';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { getExercise } from '@/services/member/exercise';
import { getLessonsDays, getPersonalTrainers } from '@/services/member/training';
import { MemberInfo } from '@/types/member/member';
import { getMemberInfo } from '@/services/member/member';
import { convertGoal } from '@/utils/convertGoal';
import { ScheduleDates } from '@/types/member/schedule';
import MonthlyCalendar from '@/components/member/MonthlyCalendar';

export type WorkoutType = {
  id: number,
  title: string,
  weight: number,
  set: number,
  times: number,
  hour: number,
  bodyPart: string,
  exerciseType: string
}

const page = () => {
  const router = useRouter();
  const [tabClick, setTabClick] = useState('1')
  const today = new Date();

  const [data, setData] = useState({
    goalMeal: "",
    goalWorkout: "",
    todayMeal: "",
    todayWorkout: [
      {
        id: 0,
        title: "string",
        weight: 0,
        set: 0,
        times: 0,
        hour: 0,
        bodyPart: "WHOLE_BODY",
        exerciseType: "AEROBIC"
      }
    ],
  });
  const [markDate, setMarkDate] = useState([]);
  const [activeDate, setActiveDate] = useState<ScheduleDates>(today);
  const [trainers, setTrainers] = useState([]);
  const [memberInfo, setMemberInfo] = useState<MemberInfo>({
    id: 0,
    email: "",
    oauthProvider: "",
    loginType: "",
    name: "",
    height: 0,
    weight: 0,
    birth: "",
    sex: "",
    imageUrl: "",
    dietType: "",
    exerciseFrequency: "",
    targetWeight: 0,
    role: "",
    joinDate: "",
    lastModifiedDate: ""
  })

  const handleGetTodayMeal = async () => {
    try {

    } catch (error) {
      console.log('error: ', error);
    }
  }

  const handleGetTodayWorkout = async () => {
    try {
      const response = await getExercise(format(today, 'yyyy-MM-dd'))
      setData(prev => ({
        ...prev,
        todayWorkout: response.data.data
      }))
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const handleGetRecordDate = async () => {
    try {

    } catch (error) {
      console.log('error: ', error);
    }
  }
  const handleGetTrainers = async () => {
    try {
      const response = await getPersonalTrainers(5)
      const { data: { data } } = response

      setTrainers(data)
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const getMember = async () => {
    try {
      const { data: { data } } = await getMemberInfo();
      setMemberInfo(data)
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const getLesson = async () => {
    try {
      const { data: { data } } = await getLessonsDays(format(today, "yyyy-MM"));
      getLessonsDays(data)
    } catch (error) {
      console.log('error: ', error);
    }
  }


  const onChange = (value: ScheduleDates) => {
    setActiveDate(value)
    router.push(`/member/schedule?date=${format(new Date(value as Date), "yyyy-MM-dd")}`)
  }

  useEffect(() => {
    getMember();
    handleGetTodayWorkout();
    getLesson();
    handleGetTrainers();
  }, [])

  return (
    <>
      <Header page='home' />
      <MainWrap>
        <ContentSection>
          <MyGoal>
            <div>나의 목표</div>
            <GoalContents>
              <div>
                <span></span>
                <div>{convertGoal("diet", memberInfo.dietType)}식단</div>
              </div>
              <div>
                <span></span>
                <div>{convertGoal("exercise", memberInfo.exerciseFrequency)}</div>
              </div>
            </GoalContents>
          </MyGoal>
        </ContentSection>
        <ContentSection>
          <LabelTitle>{format(new Date(), 'MM.dd EEEE', { locale: ko })}</LabelTitle>
          <div className='section-contents'>
            <TodayTab>
              <div
                className={tabClick === '1' ? 'active' : ''}
                onClick={() => setTabClick('1')}
              >오늘의 식단</div>
              <div
                className={tabClick === '2' ? 'active' : ''}
                onClick={() => setTabClick('2')}
              >오늘의 운동</div>
            </TodayTab>
            <div>
              {tabClick === '1'
                ? <>
                  {data.todayMeal.length > 0 ?
                    (
                      <TodayMeal>
                        <TodayMealContents>
                          <div>
                            <div className='title'>섭취칼로리</div>
                            <div><span>1018Kcal</span> / 1550 Kcal</div>
                            <TodayMealList>
                              <li>탄수화물 <strong>50%</strong></li>
                              <li>단백질 <strong>50%</strong></li>
                              <li>지방 <strong>50%</strong></li>
                            </TodayMealList>
                          </div>
                          <div>
                            <DonutChart />
                          </div>
                        </TodayMealContents>
                      </TodayMeal>
                    ) : (
                      <EmptyTodayMeal>
                        <ExclamationMark>!</ExclamationMark>
                        <div>아직 등록된 식단이 없어요.</div>
                        <div>
                          눌러서 오늘의 식단을 입력해 주세요
                        </div>
                      </EmptyTodayMeal>
                    )
                  }
                </>
                : <WorkoutList workout={data.todayWorkout} />
              }
            </div>
          </div>
        </ContentSection>
        <ContentSection>
          <LabelTitle>수업일정</LabelTitle>
          <div className='section-contents'>
            <MonthlyCalendar
              activeDate={activeDate}
              setActiveDate={setActiveDate}
              markDate={markDate}
              onChange={onChange}
            />
          </div>
        </ContentSection>
        {trainers.length > 0 &&
          <ContentSection>
            <LabelTitle>담당 트레이너</LabelTitle>
            <TrainerSwipe data={trainers} />
          </ContentSection>}
        <MemberBottomNav />
      </MainWrap>
    </>
  )
}

export default page