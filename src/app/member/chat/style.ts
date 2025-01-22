import styled from "styled-components"

export const EmptyChat = styled.div`
  padding: 5rem 0;
  color: var(--font-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  strong {
    font-weight: var(--font-semibold);
  }
`
export const ExclamationMark = styled.span`
  width: 1.375rem;
  height: 1.375rem;
  display: block;
  border-radius: 50%;
  background: url('/svgs/icon_exclamation_circle.svg') no-repeat;
  background-position: center;
`

export const ChatTrainerListWrap = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 0 1rem; */
`

export const ChatTrainerList = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-top: 1px solid var(--border-gray300); */
  padding: 1rem 0.625rem;
  cursor: pointer;
  
  &:last-of-type {
    border-bottom: 1px solid var(--border-gray300);
  }

  > div:first-child {
    display: flex;
    gap: 1.25rem;
    align-items: center;
  }
`
export const ProfileCircle = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ChatTrainerListInfo = styled.div`
  > div {
    &:first-child {
      font-weight: var(--font-semibold);
    }
    &:last-child {
      font-size: 0.875rem;
      color: var(--font-gray500);
    }
  }
`

export const NewChatButton = styled.button`
  width: 3.75rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 0.375rem;
  font-size: 0.875rem;
`

export const ChatDate = styled.div`
  font-size: 0.75rem;
  color: var(--font-gray500);
`