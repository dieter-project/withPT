'use client';

import PageHeader from '@/components/PageHeader';
import { BaseContentWrap, ContentSection } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { api } from '@/utils/axios';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import ReactApexChart from 'react-apexcharts';
import { styled } from 'styled-components'

const DateText = styled(LabelTitle)`
  text-align: center;
`

const ImgContainer = styled.div`
  div {
    width: 100%;
    height: 21.25rem;
    margin-bottom: 1.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const GraphWrap = styled.div`
  margin-bottom: 1.5rem;
  .bar {
    width: 100%;
    height: 15px;
    border-radius: 2px;
    display: flex;

    > div {
      &:nth-child(1) {
        flex: 30%;
        background-color: var(--yellow);
      }
      &:nth-child(2) {
        flex: 40%;
        background-color: var(--coral);
      }
      &:nth-child(3) {
        flex: 20%;
        background-color: var(--mint);
      }
    }
  }
  .legend {
    display: flex;
    margin-top: 1.125rem;
    font-size: var(--font-xs);
    > div {
        display: flex;
        align-items: center;

        &::before {
          content: "";
          display: block;
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 2px;
          margin-right: 5px;
        }

        &:nth-child(1) {
          &::before {
            background-color: var(--yellow);
          }
        }
        &:nth-child(2) {
          &::before {
            background-color: var(--coral);
          }
        }
        &:nth-child(3) {
          &::before {
            background-color: var(--mint);
          }
        }

        span {
          display: block;
          margin-left: 0.625rem;
          margin-right: 0.625rem;
        }
      }
  }
`

const MealList = styled.div`
  .list-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div:last-child {
      font-size: var(--font-s);
      strong {
        font-weight: var(--font-semibold);
      }
    }
  }
  ul {
    border-bottom: 1px solid var(--border-gray300);
    margin: 0.625rem 0;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.625rem 0;

      .detail {
        font-size: var(--font-s);
      }
    }
  }
`

const page = ({ params }: { params: { id: number } }) => {
  const title = '식단'
  const mealId = params.id
  
  useEffect(() => {
    console.log('mealId: ', mealId);
  }, [])

  const getMeal = async () => {
    const response = await api.get(``)
  }
  
  return (
    <>
      <PageHeader title={title} back={true}/>
      <BaseContentWrap>
        <ContentSection>
          <DateText>2023년 11월 15일(목) 08:30 am</DateText>
          <ImgContainer>
            <div>
              <img src="" alt="" />
            </div>
          </ImgContainer>
        </ContentSection>
        <ContentSection>
          <LabelTitle>영양소 비율</LabelTitle>
          <GraphWrap>
            <div className='bar'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='legend'>
              <div>
                <div>탄수화물</div> 
                <span>50g</span>
              </div>
              <div>
                <div>단백질</div>
                <span>20g</span>
              </div>
              <div>
                <div>지방</div>
                <span>10g</span>
              </div>
            </div>
          </GraphWrap>
        </ContentSection>
        <ContentSection>
          <MealList>
            <div className='list-top'>
              <LabelTitle>식단</LabelTitle>
              <div>총 칼로리 <strong>360 kcal</strong></div>
            </div>
            <ul>
              <li>
                <div>
                  <div>그릭요거트</div>
                  <div className='detail'>1개, 150g</div>
                </div>
                <div>
                  180 kcal
                </div>
              </li>
            </ul>
          </MealList>
        </ContentSection>
      </BaseContentWrap>
    </>
  )
}

export default page