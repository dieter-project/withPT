import { NextPage } from 'next';
import React from 'react'
import { styled } from 'styled-components';

interface Props {
  active: string;
}
const step = ['1', '2', '3', '4']

const SignUpStepWrap = styled.ol`
  display: flex;
  /* margin-top: 1.25rem; */
  margin-bottom: 40px;
  li {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    background-color: var(--purple100);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: var(--font-secondary);
    margin-right: 0.5rem;
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