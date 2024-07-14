'use client';

import PageHeader from '@/components/PageHeader';
import { api } from '@/utils/axios';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { LabelTitle } from '@/styles/Text';
import { BaseContentWrap, ContentSection, RoundBox } from '@/styles/Layout';
import { TrainerSwipe } from '@/components/TrainerSwipe';

const TrainerInfoWrap = styled(RoundBox)`
  width: 100%;
  height: auto;
  padding: 0 1.25rem;
  margin-top: 0.625rem;
  .info {
    display: flex;
    >div {
      &:first-child {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #d9d9d9;
        margin-right: 0.625rem;
      }
    }
  }
  ul {
    li {
      display: flex;
      justify-content: space-between;
      padding: 0.625rem 0;
      div {
        font-size: var(--font-xs);
        font-weight: var(--font-medium);
      }
    }
  }
`

const TrainerScheduleWrap = styled.ul`
  display: flex;
  gap: 0.75rem;
  li {
    width: 50%;
    border: 1px solid var(--border-gray300);
    border-radius: 0.625rem;
    padding: 1.25rem;
    div {
      &:first-child {
        color: var(--font-gray700);
      }
    }
  }
`

const page = ({ params }: { params: { id: number } }) => {
  const title = '담당 트레이너'
  const trainerId = params.id
  const [trainerData, setTrainerData] = useState({
    
  })
  
  useEffect(() => {
    console.log('trainerId: ', trainerId);
  }, [])

  const handleGetTrainer = async () => {
    try {
      const response = await api.get('')  

    } catch (error) {
      console.log('error: ', error);
    }
  }

  const handleMoreHistory = async () => {
    
  }

  return (
    <>
      <PageHeader title={title}/>
      <BaseContentWrap>
        <ContentSection>
          <LabelTitle>담당 트레이너</LabelTitle>
          <TrainerSwipe/>
        </ContentSection>
        <ContentSection>
          <LabelTitle>트레이너 정보</LabelTitle>
          <TrainerInfoWrap variant='purple'>
            <div className='history'>
              <ul>
                <li>
                  <div>2022.06</div>
                  <div>보디빌더 대회 최우수상</div>
                </li>
                <li>
                  <div>2022.06</div>
                  <div>보디빌더 대회 최우수상</div>
                </li>
                <li>
                  <div>2022.06</div>
                  <div>보디빌더 대회 최우수상</div>
                </li>
              </ul>
            </div>
          </TrainerInfoWrap>
        </ContentSection>
        <ContentSection>
          <LabelTitle>트레이너 수업 일정</LabelTitle>
          <TrainerScheduleWrap>
            <li>
              <div>월/수/목</div>
              <div>10:00 ~ 18:00</div>
            </li>
            <li>
              <div>월/수/목</div>
              <div>10:00 ~ 18:00</div>
            </li>
          </TrainerScheduleWrap>
        </ContentSection>
      </BaseContentWrap>
    </>
  )
}

export default page