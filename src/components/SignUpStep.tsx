import { NextPage } from 'next';
import React from 'react'
import { styled } from 'styled-components';

interface Props {
  active: string;
}
const step = ['1', '2', '3', '4', '5']

const SignUpStepWrap = styled.ol`
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
  li {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    background-color: var(--purple100);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: var(--font-secondary);
    margin-right: 8px;
  }
  .active {
    background-color: var(--primary);
    color: var(--white);
  }
`

const JoinStep: React.FC<Props> = ({ active }) => {

  return (
    <SignUpStepWrap>
      {step.map((element, index)=> {
        return (
          <li key={index} className={active === element ? 'active' : ""}>{element}</li>
        )
      })}
    </SignUpStepWrap>
  )
}

export default JoinStep;