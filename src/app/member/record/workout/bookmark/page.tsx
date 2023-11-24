'use client';

import PageTitle from '@/components/PageTitle';
import { Container } from '@/styles/Container';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { styled } from 'styled-components'


const Button = styled.button`
  width: 100%;
  height: 45px;
  border: 1px solid #e8e8e8;
  text-align: center;
  line-height: 2.5rem;
`


const page = () => {
  const title = '식단 입력'
  
  return (
    <Container>
      <PageTitle title={title}/>
      <div>
        <div>운동 종류</div>
        <ul>
          <li>
            <div>레그프레스</div>
            <div>레그 프레스 35kg x 12회 x 3set</div>
          </li>
        </ul>
        <button>추가하기</button>
      </div>
      <button>저장하기</button>
    </Container>
  )
}

export default page