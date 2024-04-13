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
import { GraphWrap, MealList, MyGoal, NutritionProgress, ProgressWrap, TrainerFeedback } from './style';
import { api } from '@/utils/axios';


const page = () => {
  const [todayRecord, setTodayRecord] = useState([]);
  const router = useRouter();
  const title = '식단'

  const handleGetMeal = async () => {
    const { data } = await api.get('/')
    console.log('response data: ', data);
    setTodayRecord(data.data)
  }

  useEffect(() => {
    // handleGetMeal()
  }, [])

  return (
    <>
      <Header title={title} back={true} calendar={true} />
      <BaseContentWrap>
        <section>
          달력
        </section>
        <MyGoal>
          <div className='section-contents'>
            <div>나의 목표</div>
            <div className='goal-contents'>
              <div></div>
              <div>탄단지식단</div>
            </div>
          </div>
        </MyGoal>
        <ContentSection>
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
                              fontSize: '1rem',
                              color: '#6C69FF',
                              fontWeight: 'bold',
                              label: "섭취 칼로리",
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
        </ContentSection>
        <ContentSection>
          <LabelTitle>식단</LabelTitle>
          {todayRecord?.length < 1 
            ? <AddRecordButton variant='purple' onClick={() => router.push('/member/record/meal/register')}>
              <div>!</div>
              <p>눌러서 식단을 입력해주세요</p>
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