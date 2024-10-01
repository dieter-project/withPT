import { styled } from 'styled-components'

export const WeeklyContainer = styled.section`
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-gray300);
  width: 100%;
  height: 3.75rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
  /* justify-content: center; */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const WeeklyScrollWrap = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: calc(100vw - 40px);
  scroll-snap-align: start;
`

export const WeeklyScrollItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DayText = styled.div`
  font-size: var(--font-xs);

  &.active {
    color: var(--white);
    width: 27px;
    height: 27px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    text-align: center;
  }
`

export const DateText = styled.div`
  color: var(--font-gray700);
  font-weight: var(--font-medium);
  
  &.active {
    font-weight: var(--font-semibold);
    color: var(--black);
  }
`

export const DotWrap = styled.div`
  display: flex;
  gap: 4px;
  span {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--border-gray300);
  }
`
