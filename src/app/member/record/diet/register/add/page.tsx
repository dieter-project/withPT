"use client";

import { DietSearchModal } from '@/components/DietSearchModal';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/styles/Button';
import { Input, InputRowWrap, InputWrap, Select } from '@/styles/Input';
import { BaseContentWrap, ButtonAreaFixed, RowWrap } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { signIn, useSession } from 'next-auth/react';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { ContentsWrap, DietTypeInput } from './style';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { dietRecordActions } from '@/redux/reducers/dietRecordSlice';
import { DietFood } from '@/types/member/record';


const page = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [hasSearchResult, setHasSearchResult] = useState(false)
  const searchParams = useSearchParams();
  const [inputData, setInputData] = useState<DietFood>({
    name: "",
    capacity: 0,
    units: "g",
    calories: 0,
    carbohydrate: 0,
    protein: 0,
    fat: 0
  })
  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    if (searchParams.get('type')) {
      setHasSearchResult(true)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputData(prev => ({ ...prev, units: e.target.value }))
  }

  const handleAddDiet = () => {
    dispatch(dietRecordActions.addDietState(inputData));
    router.push('/member/record/diet/register')
  }

  useEffect(() => {

    console.log('inputData: ', inputData);
  }, [inputData])

  return (
    <>
      <PageHeader back={true} title="음식 등록하기" />
      <ContentsWrap>
        {!hasSearchResult ? <div>
          <DietTypeInput>
            <LabelTitle>음식명</LabelTitle>
            <Input type="text" placeholder='음식명을 입력해주세요' name='name' onChange={handleChange} value={inputData.name || ""} />
          </DietTypeInput>
          <LabelTitle>내용량</LabelTitle>
          <InputRowWrap>
            <Input $width='10.625rem' placeholder='100' name='capacity' onChange={handleChange} value={inputData.capacity || ""}></Input>
            <Select name="units" id="" className="" onChange={handleSelect} defaultValue={inputData.units || ""}>
              <option value="g">g</option>
              <option value="ml">ml</option>
            </Select>
          </InputRowWrap>
          <LabelTitle>칼로리</LabelTitle>
          <InputRowWrap>
            <InputWrap>
              <Input $width='10.625rem' placeholder='100' name='calories' onChange={handleChange} value={inputData.calories || ""}></Input>
              <span>Kcal</span>
            </InputWrap>
          </InputRowWrap>
          <RowWrap $gap='0.625rem'>
            <div>
              <LabelTitle>탄수화물</LabelTitle>
              <InputRowWrap>
                <InputWrap>
                  <Input placeholder='100' name='carbohydrate' onChange={handleChange} value={inputData.carbohydrate || ""}></Input>
                  <span>g</span>
                </InputWrap>
              </InputRowWrap>
            </div>
            <div>
              <LabelTitle>단백질</LabelTitle>
              <InputRowWrap>
                <InputWrap>
                  <Input placeholder='100' name='protein' onChange={handleChange} value={inputData.protein || ""}></Input>
                  <span>g</span>
                </InputWrap>
              </InputRowWrap>
            </div>
            <div>
              <LabelTitle>지방</LabelTitle>
              <InputRowWrap>
                <InputWrap>
                  <Input placeholder='100' name='fat' onChange={handleChange} value={inputData.fat || ""}></Input>
                  <span>g</span>
                </InputWrap>
              </InputRowWrap>
            </div>
          </RowWrap>
        </div> : <></>
        }
        <ButtonAreaFixed>
          <Button $variant="primary" onClick={handleAddDiet}>저장하기</Button>
        </ButtonAreaFixed>
      </ContentsWrap>
    </>
  );
};

export default page;
