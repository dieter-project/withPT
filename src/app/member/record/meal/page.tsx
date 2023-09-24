'use client';

import Header from '@/components/Header';
import { AddRecordBox } from '@/styles/AddRecordBox';
import { Container } from '@/styles/Container';
import { LabelTitle } from '@/styles/Text';
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
  width: 100%;
  height: 269px;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--purple50);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  .nutrition-graph {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  `

const NutritionProgress = styled.div`
  width: 100%;
  gap: 10px;
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
        border-radius:10px;
        background: var(--yellow);
      }
    `}
    ${props => props.type === 'prot' && css`
      &::-webkit-progress-value {
        border-radius:10px;
        background: var(--coral);
      }
    `}
    ${props => props.type === 'fats' && css`
      &::-webkit-progress-value {
        border-radius:10px;
        background: var(--mint);
      }
    `}
  }
`

const MealWrap = styled.div`
  li {
    display: flex;
    .detail {
      &:not(:first-child) {
        font-size: 12px;
      }
    }
  }
`

const MealList = styled.li`
  .meal-img {
    width: 140px;
    height: 140px;
    border-radius: 8px;
    margin-right: 10px;
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
        margin-bottom: 20px;
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

const TrainerFeedback = styled.div`
  width: 100%;
  padding: 20px;
  background-color: var(--purple50);
  border-radius: 8px;
  font-size: var(--font-s);
`

const page = () => {
  const [todayRecord, setTodayRecord] = useState([])

  return (
    <Container>
      <Header/>
      <div>
        <section>
          달력
        </section>
        <section>
          <MyGoal>
            <div className='section-contents'>
              <div>나의 목표</div>
              <div className='goal-contents'>
                <div>탄단지식단</div>
                <div>주 2회이상 운동</div>
              </div>
            </div>
          </MyGoal>
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
          <MealWrap>
            <LabelTitle>식단</LabelTitle>
            {todayRecord == null
              ? <AddRecordBox>
                  <p>식단을 입력해주세요</p>
                  <div>+</div>
                </AddRecordBox>
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
          </MealWrap>
          <div>
            <LabelTitle>트레이너 피드백</LabelTitle>
            <TrainerFeedback>
              단백질이 부족해요ㅜ 매 끼니에 단백질을 더 드셔야 합니다!
            </TrainerFeedback>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default page