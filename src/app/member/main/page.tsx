'use client';

import Header from '@/components/Header';
import { api } from '@/utils/axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { LabelTitle } from '@/styles/Text';
import { WorkoutList } from '@/styles/WorkoutList';
import { ContentSection } from '@/styles/Layout';
import MemberBottomNav from '@/components/MemberBottomNav';
import { MemberIndividualTrainerSwipe } from '@/components/MemberIndividualTrainerSwipe';
import { 
  GoalContents, 
  MainWrap, 
  MoveButton, 
  MyGoal, 
  TodayMeal, 
  TodayTab 
} from './styles';



const page = () => {
  const router = useRouter();
  const [tabClick, setTabClick] = useState('1')
  const data = {

  }

  useEffect(()=>{
    handleGetExercise()
  }, [])

  const handleGetExercise = async () => {
    try {
      const response = await api.get(`/api/v1/members/exercise?dateTime=2023-11-24`)
      console.log('response: ', response);
    } catch (error) {
      console.log('error: ', error);
    }
  }
  
  return (
    <>
      <Header page='home'/>
      <MainWrap>
        <ContentSection>
          <MyGoal>
            <div>나의 목표</div>
            <GoalContents>
              <div>
                <span></span>
                <div>탄단지식단</div>
              </div>
              <div>
                <span></span>
                <div>주 2회이상 운동</div>
              </div>
            </GoalContents>
          </MyGoal>
        </ContentSection>
        <ContentSection>
          <LabelTitle>11.04 목요일</LabelTitle>
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
              ? <TodayMeal>
                  <div>
                    <div>
                      <div className='title'>섭취칼로리</div>
                      <div><span>1018Kcal</span> / 1550 Kcal</div>
                      <ul>
                        <li>탄수화물</li>
                        <li>단백질</li>
                        <li>지방</li>
                      </ul>
                    </div>
                    <div>
                      <ReactApexChart
                        type="donut"
                        series={[44, 55, 41]}
                        options={{
                          chart: {
                            type: 'donut',
                          },
                          colors: ['#FFE926', '#FF5E5E', '#33DFD5'],
                          dataLabels: {
                            enabled: false,
                            dropShadow: {
                              enabled: false,
                            }
                          },
                          legend: {
                            show: false,
                          }
                        }}
                      />

                    </div>
                  </div>
                  <MoveButton onClick={() => router.push('/')}>오늘의 식단 확인하기</MoveButton>
                </TodayMeal>
              : <WorkoutList>
                  <div>
                    <ul>
                      <li>
                        <div>이미지</div>
                        <div>
                          <div>힙 어브덕션</div>
                          <div className='workout-contents'>횟수</div>
                        </div>
                      </li>
                      <li>
                        <div>이미지</div>
                        <div>
                          <div>힙 어브덕션</div>
                          <div className='workout-contents'>횟수</div>
                        </div>
                      </li>
                      <li>
                        <div>이미지</div>
                        <div>
                          <div>힙 어브덕션</div>
                          <div className='workout-contents'>횟수</div>
                        </div>
                      </li>
                    </ul>
                    <MoveButton onClick={() => router.push('/')}>오늘의 운동 확인하기</MoveButton>
                  </div>
                </WorkoutList>
            }
            </div>
          </div>
        </ContentSection>
        <ContentSection>
          <LabelTitle>수업일정</LabelTitle>
          <div className='section-contents'>
            달력
            <MoveButton onClick={() => router.push('/member/schedule')}>수업 일정 확인하기</MoveButton>
          </div>
        </ContentSection>
        <ContentSection>
          <LabelTitle>담당 트레이너</LabelTitle>
          <MemberIndividualTrainerSwipe/>
        </ContentSection>
        <MemberBottomNav />
      </MainWrap>
    </>
  )
}

export default page