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
import { DietImgWrap, DietList, DietTime } from './style';
import { DIET_CATEGORY } from '@/constants/record';
import { DietRquestDate } from '@/types/member/record';
import { useAppSelector } from '@/redux/hooks';
import { postDiet } from '@/services/member/diet';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { dietRecordActions } from '@/redux/reducers/dietRecordSlice';


const page = () => {
  const hours = String(new Date().getHours()).padStart(2, '0')
  const minutes = String(new Date().getMinutes()).padStart(2, '0')
  const dietInit = {
    uploadDate: format(new Date(), "yyyy-MM-dd"),
    dietCategory: "BREAKFAST",
    dietTime: `${hours}:${minutes}`,
    dietFoods: [],
  }
  const [displayModal, setDisplayModal] = useState(false);
  const [diet, setDiet] = useState<DietRquestDate>(dietInit)
  const router = useRouter()
  const state = useAppSelector(state => state.dietRecord);
  const dispatch = useDispatch()

  useEffect(() => {
    if (state.length > 0) {
      setDiet(prev => ({
        ...prev,
        dietFoods: state
      }
      ))
    }
  }, [state])

  const handleDietList = (idx: number) => {
    dispatch(dietRecordActions.deleteDietState(idx))
  }

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('request', new Blob([JSON.stringify(diet)], {
      type: "application/json",
    }))

    try 
    {
      const response = await postDiet(formData)
      if (response.status === 200) dispatch(dietRecordActions.dietStateReset)
    } catch (err) { }
  }

  useEffect(() => {
    // console.log('diet: ', diet);
  }, [diet])


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
            {DIET_CATEGORY.map((category, idx) => {
              return (
                <li key={idx} className={`${category.value === diet.dietCategory ? "active" : ""}`} onClick={() => {
                  setDiet(prev => ({
                    ...prev,
                    dietCategory: category.value
                  }))
                }}>{category.title}</li>
              )
            })}
          </CategoryPartList>
        </ContentSection>
        <ContentSection>
          <LabelTitle>식사 시간</LabelTitle>
          <DietTime onClick={() => setDisplayModal(true)}>
            식사시간 입력
          </DietTime>
        </ContentSection>
        <ContentSection>
          <LabelTitle>음식 종류</LabelTitle>
          <DietList>
            {diet.dietFoods?.map((food, idx) => {
              return (
                <li key={idx}>
                  <div>
                    <div>{food.name}</div>
                    <div className="amount">{food.capacity}{food.units}</div>
                  </div>
                  <div onClick={() => handleDietList(idx)}>X</div>
                </li>
              )
            })}
            <Button $variant='outline' onClick={() => router.push(`/member/record/diet/register/add`)}>추가하기</Button>
          </DietList>
        </ContentSection>
        <ContentSection>
          <LabelTitle>사진</LabelTitle>
          <DietImgWrap>
            <AddImgButton></AddImgButton>
          </DietImgWrap>
        </ContentSection>
        <Button $variant="primary" onClick={handleSubmit}>저장하기</Button>
      </BaseContentWrap>
    </>
  );
};

export default page;
