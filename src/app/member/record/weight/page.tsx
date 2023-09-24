'use client';

import Header from '@/components/Header';
import { Container } from '@/styles/Container';
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
  
  return (
    <Container>
      <Header/>
      <div>
        <section>
          달력
        </section>
        <section>
          <div>
            <div>
              <div>목표 체중까지 -7kg 남았어요</div>
              <div>어제보다 -1kg 감량 성공했어요!</div>
            </div>
            <div>사진</div>
          </div>
          <div>
            <h3>체중</h3>
            <div>
              <div>눌러서 운동을 입력해주세요.</div>
              <div>+</div>
            </div>
          </div>
          <div>
            <h3>신체 정보</h3>
            <ul>
              <li>
                <div></div>
                <div>22%</div>
                <div>골격근량</div>
              </li>
            </ul>
            <div>지난 인바디 기록은 8월 10일이에요</div>
          </div>
          <div>
            <h3>눈바디</h3>
            <ul>
              <li>+</li>
            </ul>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default page