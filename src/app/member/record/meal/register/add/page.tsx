"use client";

import { MealSearchModal } from '@/components/MealSearchModal';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/styles/Button';
import { Input, InputRowWrap, InputWrap } from '@/styles/Input';
import { BaseContentWrap } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { ContentsWrap, MealTypeInput } from './style';


const page = () => {
  const title = '추가하기'
  const [searchOpen, setSearchOpen] = useState(false)
  
  return (
    <>
      {searchOpen && <MealSearchModal setSearchOpen={setSearchOpen}/> }
      <PageHeader title={title}/>
      <ContentsWrap>
        <div>
          <MealTypeInput>
            <LabelTitle>종류입력</LabelTitle>
            <Input type="text" placeholder='종류를 검색해보세요' onFocus={() => {setSearchOpen(true)}}/>
          </MealTypeInput>
          <InputRowWrap>
            <LabelTitle>그람 수</LabelTitle>
            <InputWrap>
              <Input type="text" name="" id="" className="" />
              <span>g</span>
            </InputWrap>
          </InputRowWrap>
        </div>
        <div>
          <Button $variant="primary">저장하기</Button>
        </div>
      </ContentsWrap>
    </>
  );
};

export default page;
