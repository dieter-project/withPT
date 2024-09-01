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
import { useDispatch } from 'react-redux';
import { dietRecordActions } from '@/redux/reducers/dietRecordSlice';


const page = () => {
  const dietInit = {
    uploadDate: format(new Date(), "yyyy-MM-dd"),
    mealCategory: "BREAKFAST",
    mealTime: "10:10",
    dietFoods: [],
  }
  const [displayModal, setDisplayModal] = useState(false);
  const [diet, setDiet] = useState<MealRecord>(dietInit)
  const router = useRouter()
  const state = useAppSelector(state => state.dietRecord);
  const dispatch = useDispatch()

  useEffect(() => {
    if (state.length > 0) {
      setDiet(prev => ({
        ...prev,
        dietFoods: [
          {
            name: "test",
            capacity: 10,
            units: "g",
            calories: 10,
            carbohydrate: 10,
            protein: 10,
            fat: 10
          }
        ]
      }
      ))
    }
  }, [state])


  useEffect(() => {

    console.log('diet: ', diet);
  }, [diet])

  const handleSubmit = async () => {
    // dispatch(dietRecordActions.dietStateReset())
    const formData = new FormData();
    formData.append('request', new Blob([JSON.stringify(diet)], {
      type: "application/json",
    }))
    const { data } = await postDiet(formData)
    console.log('data: ', data);
  }


  return (
    <>
      {displayModal && (
        <TimeModal
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          diet={diet}
          setDiet={setDiet}
        />
      )}
      <PageHeader back={true} title="식단 입력" />
      <BaseContentWrap>
        <ContentSection>
          <LabelTitle>분류</LabelTitle>
          <CategoryPartList>
            {MEAL_CATEGORY.map((category, idx) => {
              return (
                <li key={idx} className={`${category.value === diet.mealCategory ? "active" : ""}`} onClick={() => {
                  setDiet(prev => ({
                    ...prev,
                    mealCategory: category.value
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
            {diet.dietFoods?.map((food, idx) => {
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
