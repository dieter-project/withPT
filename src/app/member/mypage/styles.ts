import { RoundBox } from "@/styles/Layout"
import { styled } from "styled-components"

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .profile-name {
    font-size: var(--font-xxl);
    font-weight: var(--font-semibold);
  }

  .profile-img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export const GoalListItem = styled(RoundBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.625rem;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    gap: 0.625rem;
  }
`
export const GoalIcon = styled.span`
  display: block;
  width: 2.875rem;
  height: 2.875rem;
  border-radius: 50%;
  background-color: var(--white);
`

export const GoalValue = styled.div`
  > div {
    &:first-child {
      font-size: var(--font-s);
      color: var(--font-gray700);
    }
    &:last-child {
      font-size: var(--font-l);
      font-weight: var(--font-semibold);
    }
  }  
`

export const MenuList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem;
  cursor: pointer;

  div {
    font-weight: var(--font-semibold);
  }

`

export const NextArrow = styled.span`
  display: block;
  width: 2rem;
  height: 2rem;
  background: url(/svgs/icon_nextarrow.svg) no-repeat;
  background-position: center;
`