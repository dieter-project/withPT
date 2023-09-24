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
        <div>
          <div>운동명 입력</div>
          <input type="text" placeholder='제목을 입력하세요' />
        </div>
        <div>
          <div>분류</div>
          <ul>
            <li>유산소</li>
            <li>무산소</li>
            <li>스트레칭</li>
          </ul>
        </div>
        <div>
          <div>분류</div>
          <ul>
            <li>전신</li>
            <li>팔</li>
            <li>복근</li>
            <li>하체</li>
            <li>등</li>
            <li>어깨</li>
          </ul>
        </div>
        <div>
          <div>운동 내용</div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" /> x <input type="text" /> x <input type="text" />
          </div>
        </div>
      </div>
      <div>
        <div>북마크에 저장하기</div>
        <input type="radio" />
      </div>
      <button>저장하기</button>
    </Container>
  )
}

export default page