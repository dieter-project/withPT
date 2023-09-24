'use client';

import Header from '@/components/Header';
import { Container } from '@/styles/Container';
import { api } from '@/utils/axios';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { styled } from 'styled-components'
import Timeline from '../../../../public/svgs/icon_timeline.svg'
import { LabelTitle } from '@/styles/Text';
import { WorkoutList } from '@/styles/WorkoutList';

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--purple50);
  padding: 20px;
  .section-contents {
    background-color: var(--white);
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 24px;
  }
`
const MyGoal = styled.section`
  > div {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div:first-child {
      font-size: var(--font-s);
      font-weight: var(--font-semibold);
      color: var(--primary);
    }
  }
  .goal-contents {
    display: flex;
  }
`

const TodayRecordWrap = styled.section`
  .today-tab {
    width: 100%;
    color: #A8A8A8;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    div {
      flex: 1;
      text-align: center;
      padding-bottom: 10px;
      cursor: pointer;
    }
    .active {
      color: var(--black);
      font-weight: var(--font-semibold);
      border-bottom: 2px solid var(--black);
    }
  }
`

const TodayMeal = styled.div`
  >div {
    display: flex;
    justify-content: space-between;
  } 
  .title {
    font-size: var(--font-s);
    color: var(--font-gray700);
  }
  span {
    font-weight: var(--font-semibold);
  }
  ul {
    margin-top: 10px;
    margin-bottom: 24px;
    li {
      display: flex;
      align-items: center;
      font-size: var(--font-s);
      line-height: var(--font-xxxl);
      &::before {
        content: '';
        display: block;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        margin-right: 8px;
      }
      &:nth-child(1)::before{
        background-color: var(--yellow);
      } 
      &:nth-child(2)::before {
        background-color: var(--coral);
      }
      &:nth-child(3)::before {
        background-color: var(--mint);
      }
    }
  }
`

const MoveButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: var(--primary);
  border-radius: 8px;
  color: var(--white);
  font-size: 14px;
  font-weight: var(--font-semibold);
`
const TrainerWrap = styled.section`
  ul {
    scroll-snap-type: x mandatory;
    display: flex;
    overflow-x: scroll;
    li {
      scroll-snap-align: center;
      min-width: 90%;
      display: flex;
      justify-content: space-between;
      &:not(:last-child) {
        margin-right: 20px;
      }
      > div {
        &:first-child {
          display: flex;
          .profile {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #eee;
            margin-right: 8px;
          }
          .name {
            font-weight: var(--font-semibold);
            margin-bottom: 4px;
          }
          .gym {
            font-size: var(--font-s);
            color: var(--font-gray700);
            margin-bottom: 4px;
          }
          .time {
            display: flex;
            font-size: var(--font-xs);
            color: var(--font-gray500);
            margin-bottom: 4px;
            span {
              display: block;
              width: 18px;
              height: 18px;
            }
          }
          .reminder {

          }
        }
        &:last-child {
          width: 8px;
          height: 8px;
          border-right: 1px solid var(--black);
          border-bottom: 1px solid var(--black);
          transform: rotate(-45deg);
          overflow: hidden;
          text-indent: -999px;
        }
      }
    }
  }
`

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [tabClick, setTabClick] = useState('1')
  const data = {

  }

  useEffect(()=>{
    console.log('session: ', session);
  }, [])

  const handleGetMember = async () => {
    try {
      const response = await api.get(`/`)
      console.log('response: ', response);
    } catch (error) {
      console.log('error: ', error);
    }
  }
  
  return (
    <>
      <Header/>
      <MainWrap>
        <MyGoal>
          <div className='section-contents'>
            <div>나의 목표</div>
            <div className='goal-contents'>
              <div>탄단지식단</div>
              <div>주 2회이상 운동</div>
            </div>
          </div>
        </MyGoal>
        <TodayRecordWrap>
          <LabelTitle>11.04 목요일</LabelTitle>
          <div className='section-contents'>
            <div className='today-tab'>
              <div 
                className={tabClick === '1' ? 'active' : ''}
                onClick={() => setTabClick('1')}
              >오늘의 식단</div>
              <div
                className={tabClick === '2' ? 'active' : ''}
                onClick={() => setTabClick('2')}
              >오늘의 운동</div>
            </div>
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
        </TodayRecordWrap>
        <section>
          <LabelTitle>수업일정</LabelTitle>
          <div className='section-contents'>
            달력
            <MoveButton onClick={() => router.push('/member/schedule')}>수업 일정 확인하기</MoveButton>
          </div>
        </section>
        <TrainerWrap>
          <LabelTitle>담당 트레이너</LabelTitle>
          <div className='trainer-container'>
            <ul>
              <li className='section-contents'>
                <div>
                  <div className='profile'>이미지</div>
                  <div>
                    <div className='name'>김땡땡 트레이너</div>
                    <div className='gym'>아자아자 피트니스 센터</div>
                    <div className='time'>
                      <span><Timeline /></span>
                      <div>10:00 ~ 22:00</div>
                    </div>
                  <div className='remainder'>잔여: 16회 / 36회</div>
                  </div>
                </div>
                <div>바로가기</div>
              </li>
              <li className='section-contents'
               onClick={() => router.push(`/member/trainer/${"1"}`)}>
                <div>
                  <div className='profile'>이미지</div>
                  <div>
                    <div className='name'>김땡땡 트레이너</div>
                    <div className='gym'>아자아자 피트니스 센터</div>
                    <div className='time'>10:00 ~ 22:00</div>
                    <div className='remainder'>잔여: 16회 / 36회</div>
                  </div>
                </div>
                <div>바로가기</div>
              </li>
              <li className='section-contents'
               onClick={() => router.push(`/member/trainer/${"1"}`)}>
                <div>
                  <div className='profile'>이미지</div>
                  <div>
                    <div className='name'>김땡땡 트레이너</div>
                    <div className='gym'>아자아자 피트니스 센터</div>
                    <div className='time'>10:00 ~ 22:00</div>
                    <div className='remainder'>잔여: 16회 / 36회</div>
                  </div>
                </div>
                <div>바로가기</div>
              </li>
            </ul>
          </div>
        </TrainerWrap>
      </MainWrap>
    </>
  )
}

export default page