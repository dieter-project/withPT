'use client';

import PageHeader from '@/components/PageHeader';
import { TimeModal } from '@/components/TimeModal';
import { AddImgButton } from '@/styles/AddButton';
import { Button } from '@/styles/Button';
import { CategoryPartList } from '@/styles/CategoryPartList';
import { BaseContentWrap, ContentSection } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { MealImgWrap, MealList, MealTime } from './style';
import { MEAL_CATEGORY } from '@/constants/record';
import { MealRecord } from '@/types/member/record';
import { useAppSelector } from '@/redux/hooks';
import { postDiet } from '@/services/member/diet';
import { format } from 'date-fns';


const page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [slideUpModal, setSlideUpModal] = useState(false);
  const [inputData, setInputData] = useState<MealRecord>({
    request: {
      uploadDate: format(new Date(), "yyyy-MM-dd"),
      mealCategory: "",
      mealTime: {
        hour: 0,
        minute: 0,
        second: 0,
        nano: 0
      },
      dietFoods: [],
    },
    file: []
  })
  const router = useRouter()
  const state = useAppSelector(state => state.dietRecord);

  useEffect(() => {
    if (state.length > 0) {
      setInputData(prev => ({
        ...prev,
        request: {
          ...prev.request,
          dietFoods: state
        }
      }))
    }
  }, [state])

  const handleSubmit = async () => {
    const { data } = await postDiet(inputData)
  }

  return (
    <>
      {displayModal && (
        <TimeModal
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          setInputData={setInputData}
        />
      )}
      <PageHeader back={true} title="식단 입력" />
      <BaseContentWrap>
        <ContentSection>
          <LabelTitle>분류</LabelTitle>
          <CategoryPartList>
            {MEAL_CATEGORY.map((category, idx) => {
              return (
                <li key={idx} className={`${category.value === inputData.request.mealCategory ? "active" : ""}`} onClick={() => {
                  setInputData(prev => ({
                    ...prev, request: {
                      ...prev.request,
                      mealCategory: category.value
                    }
                  }))
                }}>{category.title}</li>
              )
            })}
          </CategoryPartList>
        </ContentSection>
        <ContentSection>
          <LabelTitle>식사 시간</LabelTitle>
          <MealTime onClick={() => setDisplayModal(true)}>
            식사시간 입력
          </MealTime>
        </ContentSection>
        <ContentSection>
          <LabelTitle>음식 종류</LabelTitle>
          <MealList>
            {inputData.request.dietFoods?.map((food, idx) => {
              return (
                <li key={idx}>
                  <div>
                    <div>{food.name}</div>
                    <div className="amount">{food.capacity}{food.units}</div>
                  </div>
                  <div>X</div>
                </li>
              )
            })}
            <Button $variant='outline' onClick={() => router.push(`/member/record/meal/register/add`)}>추가하기</Button>
          </MealList>
        </ContentSection>
        <ContentSection>
          <LabelTitle>사진</LabelTitle>
          <MealImgWrap>
            <AddImgButton></AddImgButton>
          </MealImgWrap>
        </ContentSection>
        <Button $variant="primary" onClick={handleSubmit}>저장하기</Button>
      </BaseContentWrap>
    </>
  );
};

export default page;
