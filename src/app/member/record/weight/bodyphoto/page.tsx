'use client';

import PageTitle from '@/components/PageTitle';
import { Checkbox } from '@/styles/Input';
import { BaseContentWrap } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const PhotoGrid = styled.ul`
  display: grid;
  gap: 4px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  li {
    background-color: var(--purple50);
    height: 130px;
    cursor: pointer;
    position: relative;
  }
`

const DozenIcon = styled.span`
  display: block;
  width: 0.9375rem;
  height: 0.9375rem;
  background: url('/svgs/icon_dozen.svg');
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`

const page = () => {
  const title = '눈바디 히스토리'
  const [bodyphoto, setBodyPhoto] = useState([['1', '1'], '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'])
  
  return (
    <>
      <PageTitle title={title}/>
      <BaseContentWrap>
        <PhotoGrid>
          {bodyphoto?.map((photo, index) => {
            return (
              <li key={index}>
                <div>
                  <img src="" alt="" />
                  { photo?.length > 1 && <DozenIcon/> }
                </div>
              </li>
            )
          })}
        </PhotoGrid>
      </BaseContentWrap>
    </>
  )
}

export default page