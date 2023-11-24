'use client';

import Header from '@/components/Header';
import { TimeModal } from '@/components/TimeModal';
import { AddRecordButton } from '@/styles/AddButton';
import { BaseContentWrap, ContentSection, RoundBox } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { css, styled } from 'styled-components'

interface ProgressProps {
  type: string;
}

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

const GraphWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  .nutrition-graph {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  `

const NutritionProgress = styled.div`
  width: 100%;
  gap: 0.625rem;
  display: flex;
`

const ProgressWrap = styled.div<ProgressProps>`
  width: 100%;
  text-align: center;

  div {
    font-size: var(--font-xs);
    span {
      color: var(--font-gray500);
    }
  }
  progress {
    width: 100%;
    height: 6px;
    &::-webkit-progress-bar {
      background-color: var(--purple100);
    }
    ${props => props.type === 'carb' && css`
      &::-webkit-progress-value {
        border-radius:0.625rem;
        background: var(--yellow);
      }
    `}
    ${props => props.type === 'prot' && css`
      &::-webkit-progress-value {
        border-radius:0.625rem;
        background: var(--coral);
      }
    `}
    ${props => props.type === 'fats' && css`
      &::-webkit-progress-value {
        border-radius:0.625rem;
        background: var(--mint);
      }
    `}
  }
`


const MealList = styled.li`
  display: flex;
  .meal-img {
    width: 140px;
    height: 140px;
    border-radius: 0.5rem;
    margin-right: 0.625rem;
    img {
      object-fit: cover;
    }
  }
  .meal-detail {
    > div {
      &:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.25rem;
      }
    }
    .time {
      font-weight: var(--font-semibold);
    }
    .calorie {
      color: var(--font-gray700);
    }
    .nutrition { 
      font-size: var(--font-s);
    }
    .menu {
      font-size: var(--font-xs);
      color: var(--font-gray500);
    }
  }
`

const TrainerFeedback = styled(RoundBox)`
  font-size: var(--font-s);
`

const page = () => {
  const [todayRecord, setTodayRecord] = useState(null);
  const router = useRouter();
  
  return (
    <>
      <Header/>
      <BaseContentWrap>
        <section>
          달력
        </section>
        <MyGoal>
          <div className='section-contents'>
            <div>나의 목표</div>
            <div className='goal-contents'>
              <div>탄단지식단</div>
              <div>주 2회이상 운동</div>
            </div>
          </div>
        </MyGoal>
        <ContentSection>
          <RoundBox variant='purple'>
            <GraphWrap>
              <div>1일 목표칼로리 1500kcal</div>
              <div className='nutrition-graph'>
                <div>
                  <ReactApexChart
                    type="donut"
                    series={[44, 55]}
                    options={{
                      chart: {
                        type: 'donut',
                      },
                      colors: ['#FFE926', '#cccccc'],
                      dataLabels: {
                        enabled: false,
                        dropShadow: {
                          enabled: false,
                        }
                      },
                      legend: {
                        show: false,
                      },
                      plotOptions: {
                        pie: {
                          customScale: 0.7,
                          donut: {
                            size: '80%',
                            labels: {
                              show: true,
                              total: {
                                showAlways: false,
                                show: true,
                                fontSize: '2rem',
                                color: '#6C69FF',
                                fontWeight: 'bold',
                              },
                              value: {
                                fontSize: '3.5rem',
                                show: true,
                                color: '#6C69FF',
                                fontWeight: 'bold',
                              },
                            },
                          },
                        },
                      },
                    }}
                  />
                </div>
                <NutritionProgress>
                  <ProgressWrap type='carb'>
                    <div>탄수화물 0%</div>
                    <progress value='50'></progress>
                    <div>0g / <span>120g</span></div>
                  </ProgressWrap>
                  <ProgressWrap type='prot'>
                    <div>단백질 0%</div>
                    <progress value='50'></progress>
                    <div>0g / <span>120g</span></div>
                  </ProgressWrap>
                  <ProgressWrap type='fats'>
                    <div>지방 0%</div>
                    <progress value='50'></progress>
                    <div>0g / <span>120g</span></div>
                  </ProgressWrap>
                </NutritionProgress>
              </div>
            </GraphWrap>
          </RoundBox>
        </ContentSection>
        <ContentSection>
          <LabelTitle>식단</LabelTitle>
          {todayRecord == null
            ? <AddRecordButton variant='purple' onClick={() => router.push('/member/record/meal/register')}>
                <div>!</div>
                <p>식단을 입력해주세요</p>
              </AddRecordButton>
            : <div>
                <ul>
                  <MealList>
                    <div className='meal-img'>
                      <img src="" alt="" />  
                    </div>
                    <div className='meal-detail'>
                      <div>
                        <div className='time'>아침</div>
                        <div className='calorie'>360 kcal</div>
                      </div>
                      <div className='nutrition'>탄 50g 단 20g 지 10g</div>
                      <div className='menu'>메뉴</div>
                      <div className='menu'>메뉴</div>
                      <div className='menu'>메뉴</div>
                    </div>
                  </MealList>
                </ul>
              </div>
          }
        </ContentSection>
        <ContentSection>
          <LabelTitle>트레이너 피드백</LabelTitle>
          <TrainerFeedback variant='purple'>
            단백질이 부족해요ㅜ 매 끼니에 단백질을 더 드셔야 합니다!
          </TrainerFeedback>
        </ContentSection>
      </BaseContentWrap>
    </>
  )
}

export default page