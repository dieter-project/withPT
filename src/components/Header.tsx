import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React from 'react'
import { styled } from 'styled-components';

interface Props {
  title: string;
}

const HeaderContainer = styled.header`
  div.wrap {
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
`

const Header= () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <div className='wrap'>
        <h1>logo</h1>
        <div>
          알림
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header;