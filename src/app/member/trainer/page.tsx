'use client';

import PageTitle from '@/components/PageTitle';
import { api } from '@/utils/axios';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Timeline from '../../../../public/svgs/icon_timeline.svg'
import { LabelTitle } from '@/styles/Text';
import { BaseContentWrap, ContentSection, RoundBox } from '@/styles/Layout';

const TrainerList = styled.ul`
  display: flex;
  overflow-x: scroll;
  li {
    padding: 1.25rem;
    min-width: 90%;
    display: flex;
    justify-content: space-between;
    background-color: var(--purple50);
    border-radius: 0.5rem;
    &:not(:last-child) {
      margin-right: 1.25rem;
    }
    > div {
      &:first-child {
        display: flex;
        .profile {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #eee;
          margin-right: 0.5rem;
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
            width: 1.125rem;
            height: 1.125rem;
          }
        }
        .reminder {

        }
      }
      &:last-child {
        width: 0.5rem;
        height: 0.5rem;
        border-right: 1px solid var(--black);
        border-bottom: 1px solid var(--black);
        transform: rotate(-45deg);
        overflow: hidden;
        text-indent: -999px;
      }
    }
  }
`

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
    border: 1px solid var(--border-gray);
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
      <PageTitle title={title}/>
      <BaseContentWrap>
        <ContentSection>
          <LabelTitle>담당 트레이너</LabelTitle>
          <TrainerList>
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
            <li className='section-contents'>
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
          </TrainerList>
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