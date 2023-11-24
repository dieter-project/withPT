'use client';

import Header from '@/components/Header';
import { BaseContentWrap, ContentSection, RoundBox } from '@/styles/Layout';
import { GoalBox } from '@/styles/RecordPage';
import { LabelTitle } from '@/styles/Text';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Plus from '../../../../../public/svgs/icon_plus.svg'
import { VariantProps } from '@/types/style';
import css from 'styled-jsx/css';
import { AddImgButton } from '@/styles/AddButton';
import { useRouter } from 'next/navigation';

const WeightBox = styled(RoundBox)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const WeightValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    font-size: 32px;
    font-weight: var(--font-semibold);
  }
  span {
    font-size: var(--font-xxxl);
  }
`

const WeightInput = styled.div`
  width: 240px;
  height: 48px;
  border-bottom: 1px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;

  input, input[type="text"] {
    width: 80px;
    border: none;
    border-radius: 0;
    background: none;
    font-size: 32px;
    font-weight: var(--font-semibold);
  }
  span {
    font-size: var(--font-xxxl);

  }
`

const WeightDetail = styled.div`
  display: flex;
  gap: 0.625rem;
  .detail-box {
    width: 100%;
    height: 100px;
    background-color: var(--purple50);
    border-radius: 0.5rem;
  }
`

const AddDetailButton = styled(RoundBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PlusRound = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 50%;
  background-color: var(--purple200);
`

const CompositionValueText = styled.div`
  font-size: var(--font-l);
  font-weight: var(--font-semibold);
  margin-top: 4px;
`

const CompositionText = styled.div`
  font-size: var(--font-s);
  color: var(--font-gray700);
`

const TitleWrap = styled.div<VariantProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: ${props => props.variant === 'bodyphoto' ? 'space-between' : 'start'};
  margin-bottom: 0.625rem;

  > div {
    margin-bottom: 0;
  }
  .recent-date {
    font-size: var(--font-xs);
    color: var(--font-secondary);
  }
  .bodyphoto-history {
    font-size: var(--font-s);
    color: var(--font-gray500);
    cursor: pointer;
  }
`

const page = () => {
  const [todayWeight, setTodayWeight] = useState(null)
  const router = useRouter()

  return (
    <>
      <Header />
      <BaseContentWrap>
        <section>
          달력
        </section>
        <ContentSection>
          <GoalBox variant='purple'>
            <p>목표 체중까지 -7kg 남았어요</p>
            <div>어제보다 -1kg 감량 성공했어요!</div>
          </GoalBox>
        </ContentSection>
        <ContentSection>
          <TitleWrap>
            <LabelTitle>체중</LabelTitle>
            <div className='recent-date'>최근기록 11월 15일</div>
          </TitleWrap>
          <WeightBox variant='purple'>
            {/* <WeightValue>
              <div>61.2</div>
              <span>kg</span>
            </WeightValue> */}
            <WeightInput>
              <input type="text" />
              <span>kg</span>
            </WeightInput>

          </WeightBox>
        </ContentSection>
        <ContentSection>
          <TitleWrap>
            <LabelTitle>신체 정보</LabelTitle>
            <div className='recent-date'>최근기록이 없습니다</div>
          </TitleWrap>
          <WeightDetail>
            {todayWeight
              ? <>
                <AddDetailButton variant='purple'>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionValueText>21.8%</CompositionValueText>
                  <CompositionText>골격근량</CompositionText>
                </AddDetailButton>
              </>
              : <>
                <AddDetailButton variant='purple'>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionText>골격근량</CompositionText>
                </AddDetailButton>
              </>}
            {todayWeight
              ? <>
                <AddDetailButton variant='purple'>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionValueText>29.1%</CompositionValueText>
                  <CompositionText>체지방률</CompositionText>
                </AddDetailButton>
              </>
              : <>
                <AddDetailButton variant='purple'>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionText>체지방률</CompositionText>
                </AddDetailButton>
              </>}
              {todayWeight 
                ? <>
                    <AddDetailButton variant='purple'>
                      <PlusRound>
                        <Plus fill="white" width="0.75rem" height="0.75rem" />
                      </PlusRound>
                      <CompositionValueText>22.4%</CompositionValueText>
                      <CompositionText>BMI</CompositionText>
                    </AddDetailButton>
                  </>
                : <>
                    <AddDetailButton variant='purple'>
                      <PlusRound>
                        <Plus fill="white" width="0.75rem" height="0.75rem" />
                      </PlusRound>
                      <CompositionText>BMI</CompositionText>
                    </AddDetailButton>
                  </>}
            
          </WeightDetail>
        </ContentSection>
        <ContentSection>
          <TitleWrap variant='bodyphoto'>
            <LabelTitle>눈바디</LabelTitle>
            <div className='bodyphoto-history' onClick={() => router.push('/member/record/weight/bodyphoto')}>눈바디 히스토리</div>
          </TitleWrap>
          <ul>
            <li>
              <div>
                <img src="" alt="" />
              </div>
            </li>
            <li>
              <AddImgButton></AddImgButton>
            </li>
          </ul>
        </ContentSection>
      </BaseContentWrap>
    </>
  )
}

export default page