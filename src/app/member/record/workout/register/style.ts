import { LabelTitle } from "@/styles/Text";
import styled from "styled-components";

export const DateText = styled(LabelTitle)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
  &::before {
    content: "";
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    background: url(/svgs/icon_workout.svg) no-repeat;
    background-position: center;
    margin-right: 4px;
  }
`;

export const AddRecordButton = styled.button`
  width: 100%;
  height: 110px;
  background: url(/assets/plus.png) no-repeat;
  background-color: var(--purple50);
  background-position: center;
  border-radius: 0.5rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const WorkoutImgList = styled.ul`
  li {
    width: 150px;
    height: 150px;
    border-radius: 0.5rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    button {
      position: absolute;
      top: 0.625rem;
      right: 0.625rem;
    }
  }
`;