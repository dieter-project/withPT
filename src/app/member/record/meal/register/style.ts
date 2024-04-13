import styled from "styled-components"

export const MealTime = styled.div`
  width: 7.5rem;
  height: 40px;
  border: 1px solid var(--border-gray300);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1.5rem;
`

export const MealList = styled.ul`
  margin-bottom: 1.5rem;
  li{
    width: 100%;
    height: 3rem;
    background-color: var(--purple50);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.625rem;
    cursor: pointer;

    >div {
      padding: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      .amount {
        font-size: var(--font-s);
      }
    }

    .active {
      border: 1px solid var(--primary);
      background-color: var(--purple50);
      color: var(--primary);
    }
  }
`

export const MealImgWrap = styled.ul`
  li {
    width: 111px;
    height: 111px;
    border-radius: 0.5rem;
    background-color: var(--purple50);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`