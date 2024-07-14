import { BaseHeader } from '@/styles/Layout';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React from 'react'
import { styled } from 'styled-components';

interface Props {
  title: string;
  rightElement?: HTMLDivElement
}

const TitleWrap = styled(BaseHeader)`
  div {
    position: absolute;
    left: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
  }
  button {
    width: 0.75rem;
    height: 0.75rem;
    border-left: 2px solid var(--black);
    border-bottom: 2px solid var(--black);
    transform: rotate(45deg);
    overflow: hidden;
    text-indent: -999px;
  }
  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: var(--font-semibold);
  }
`

const PageHeader = ({ title, rightElement }: Props) => {
  const router = useRouter();

  return (
    <TitleWrap>
      <div>
        <button 
          onClick={() => router.back()} 
          className='back-btn'
        >뒤로</button>
      </div>
      <h1>{title}</h1>
    </TitleWrap>
  )
}

export default PageHeader;