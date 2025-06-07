import React from 'react'
import styled from 'styled-components'

const MenuWrap = styled.div`
  position: absolute;
  width: 9.25rem;
  height: auto;
  top: 2.75rem;
  right: 1rem;
  z-index: 100;
  `

const Menu = styled.div`
  position: relative;
  width: 9.25rem;
  height: 6.625rem;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 2px 2px 12px 1px rgba(0,0,0,0.2);
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  &::after {
    content: '';
    width: 1rem;
    height: 1rem;
    background-color: #FFFF;
    border-radius: 4px;
    box-shadow: -2px 2px rgb(178 178 178 / 0.3);
    transform: rotate(135deg);
    position: absolute;
    top: -0.5rem;
    right: 0.5rem;
    z-index: 2;
  }

  > div {
    text-align: center;
    padding: 0.625rem;
    cursor: pointer;
  }

  > div:first-child {
    border-bottom: 1px solid var(--border-gray);
  }
`

const SettingMenu = ({ contents }: { contents: React.ReactNode }) => {
  return (
    <MenuWrap>
      <Menu>{contents}</Menu>
    </MenuWrap>
  )
}

export default SettingMenu