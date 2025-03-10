import React from "react";
import { styled } from "styled-components";

interface Props {
  active: string;
}
const step = ["1", "2", "3", "4"];

const SignUpStepWrap = styled.ol`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  li {
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--purple100);
    color: var(--purple200);
    margin-bottom: 0.2rem;
    margin-right: 0.62rem;
    padding: 0.25rem;
    border-radius: 0.5rem;
    font-size: var(--font-xs);
    font-weight: bold;
    text-align: center;
  }
  .active {
    background-color: var(--primary);
    color: var(--white);
  }
`;

const JoinStep: React.FC<Props> = ({ active }) => {
  return (
    <SignUpStepWrap>
      {step.map((element, index) => {
        return (
          <li key={index} className={active === element ? "active" : ""}>
            {element}
          </li>
        );
      })}
    </SignUpStepWrap>
  );
};

export default JoinStep;
