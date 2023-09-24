'use client';

import PageTitle from '@/components/PageTitle';
import { Container } from '@/styles/Container';
import { api } from '@/utils/axios';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Timeline from '../../../../../public/svgs/icon_timeline.svg'
import { LabelTitle } from '@/styles/Text';

const TrainerWrap = styled.section`
  margin-bottom: 24px;
  ul {
    display: flex;
    overflow-x: scroll;
    li {
      padding: 20px;
      min-width: 90%;
      display: flex;
      justify-content: space-between;
      background-color: var(--purple50);
      border-radius: 8px;
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

const TrainerInfoWrap = styled.div`
  margin-bottom: 24px;
  .trainer-contents {
    width: 100%;
    height: auto;
    background-color: var(--purple50);
    border-radius: 8px;
    padding: 20px;
    margin-top: 10px;
    .info {
      display: flex;
      >div {
        &:first-child {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #d9d9d9;
          margin-right: 10px;
        }
      }
    }
    .history {
      ul {
        border-top: 1px solid #D9D9D9;
        border-bottom: 1px solid #D9D9D9;
        margin: 10px 0;
        li {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          div {
            font-size: var(--font-xs);
            font-weight: var(--font-medium);
          }
        }
      }
      >div {
        text-align: center;
        font-size: var(--font-s);
        font-weight: var(--font-semibold);
      }
    }
  }
`

const TrainerScheduleWrap = styled.div`
  ul {
    display: flex;
    gap: 12px;
    li {
      width: 50%;
      border: 1px solid var(--border-gray);
      border-radius: 10px;
      padding: 20px;
      div {
        &:first-child {
          color: var(--font-gray700);
        }
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
    <Container>
      <PageTitle title={title}/>
      <div>
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
            </ul>
          </div>
        </TrainerWrap>
        <TrainerInfoWrap>
          <LabelTitle>트레이너 정보</LabelTitle>
          <div className='trainer-contents'>
            <div className='history'>
              <ul>
                <li>
                  <div>2022.06</div>
                  <div>보디빌더 대회 최우수상</div>
                </li>
              </ul>
              <div>더보기</div>
            </div>
          </div>
        </TrainerInfoWrap>
        <TrainerScheduleWrap>
          <LabelTitle>트레이너 수업 일정</LabelTitle>
          <div>
            <ul>
              <li>
                <div>월/수/목</div>
                <div>10:00 ~ 18:00</div>
              </li>
            </ul>
          </div>
        </TrainerScheduleWrap>
      </div>
    </Container>
  )
}

export default page