import { BaseHeader } from '@/styles/Layout';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useRef } from 'react'
import { styled } from 'styled-components';

interface Props {
  back: boolean;
  title: string;
  rightElement: {
    path: string;
    component: React.ReactNode;
  };
}

const HeaderWrap = styled(BaseHeader)`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BackButton = styled.button`
  width: 0.75rem;
  height: 0.75rem;
  border-left: 2px solid var(--black);
  border-bottom: 2px solid var(--black);
  transform: rotate(45deg);
  overflow: hidden;
  text-indent: -999px;
`

const PageHeader = ({ back, title, rightElement }: Props) => {
  const { path, component } = rightElement;
  const router = useRouter();

  return (
    <HeaderWrap>
      <div>
        {
          back &&
          <BackButton
            onClick={() => router.back()}
            className='back-btn'
          >뒤로</BackButton>
        }
      </div>
      <h1>{title}</h1>
      <div>{component}</div>
    </HeaderWrap>
  )
}

export default PageHeader;