'use client';

import PageTitle from '@/components/PageTitle';
import { Button } from '@/styles/Button';
import { CategoryPartList } from '@/styles/CategoryPartList';
import { Container } from '@/styles/Container';
import { Input, InputRowWrap, InputWrap } from '@/styles/Input';
import { LabelTitle } from '@/styles/Text';
import { ToggleButton } from '@/styles/TogglButton';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { styled } from 'styled-components'

const BookmarkSaveToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`
const page = () => {
  const title = '운동 입력'
  
  return (
    <Container>
      <PageTitle title={title}/>
      <div>
        <Button variant='outline'>북마크에서 가져오기</Button>
        <div>
          <LabelTitle>운동명</LabelTitle>
          <Input type="text" placeholder='제목을 입력하세요' />
        </div>
        <div>
          <LabelTitle>분류</LabelTitle>
          <CategoryPartList>
            <li>유산소</li>
            <li className='active'>무산소</li>
            <li>스트레칭</li>
          </CategoryPartList>
        </div>
        <div>
          <LabelTitle>부위</LabelTitle>
          <CategoryPartList>
            <li>전신</li>
            <li>팔</li>
            <li>복근</li>
            <li className='active'>하체</li>
            <li>등</li>
            <li>어깨</li>
          </CategoryPartList>
        </div>
        <div>
          <LabelTitle>운동 내용</LabelTitle>
          <InputRowWrap>
            <InputWrap>
              <Input type="text" />
              <span>kg</span>
            </InputWrap> x 
            <InputWrap>
              <Input type="text" />
              <span>회</span>
            </InputWrap> x 
            <InputWrap>
              <Input type="text" />
              <span>set</span>
            </InputWrap>
          </InputRowWrap>
        </div>
      </div>
      <BookmarkSaveToggle>
        <LabelTitle>북마크에 저장하기</LabelTitle>
        <ToggleButton>
          <input role="switch" type="checkbox" />
        </ToggleButton>
      </BookmarkSaveToggle>
      <div>
        <Button variant='primary'>추가하기</Button>
      </div>
    </Container>
  )
}

export default page