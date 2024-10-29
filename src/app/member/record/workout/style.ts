import { RoundBox } from "@/styles/Layout"
import styled from "styled-components"

export const WorkoutImg = styled.div`
  width: 100%;
  height: 194px;
  border-radius: 0.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const WorkoutImgGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

export const WorkoutList = styled(RoundBox)`
  display: flex;
  align-items: center;
  background-color: var(--purple50);
  padding: 0.625rem;
  margin-bottom: 0.625rem;
  border-radius: 0.5rem;
`

export const WorkoutListTitle = styled.div`
  font-size: var(--font-s);
`
export const WorkoutListDetail = styled.div`
  font-size: var(--font-xs);
  color: var(--font-gray700);
  display: flex;
`

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AddButton = styled.button`
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  text-indent: -999px;
  background: url(/svgs/icon_plus.png) no-repeat;
`

export const WorkoutIcon = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.625rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 1.875rem;
  }
`