import { ChatBodySection } from '@/app/member/chat/room/[id]/style'
import React from 'react'
import styled, { css } from 'styled-components'

const ProfileImg = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ChatWrap = styled.div`
  display: flex;
  gap: 0.5rem;
`
const TrainerChatBlock = styled.div`
  padding: 1rem;
  background-color: var(--purple50);
  border-radius: 1rem;
`

const ChatTime = styled.div`
  font-size: var(--font-xs);
  color: var(--gray);
`

const ReadNum = styled.div`
  font-size: var(--font-xs);
  color: var(--primary);
`

const MyChatBlock = styled.div`
  padding: 1rem;
  background-color: var(--primary);
  color: var(--white);
  border-radius: 1rem;
`

const TrainerChat = () => {
  return (
    <ChatWrap>
      <ProfileImg>
        <img src="" alt="" />
      </ProfileImg>
      <TrainerChatBlock>식단은 하셨어요? 식단 알림전송이 안와서 확인차 여쭤봐요~</TrainerChatBlock>
      <ChatTime>20:45</ChatTime>
    </ChatWrap>
  )
}

const MyChat = () => {
  return (
    <ChatWrap>
      <div>
        <ReadNum>1</ReadNum>
        <ChatTime>20:45</ChatTime>
      </div>
      <MyChatBlock>아, 식단했는데 제가 보내는걸 깜빡했어요!</MyChatBlock>
    </ChatWrap>
  )
}
interface BlockType {
  type: 'diet' | 'accept' | 'refusal',
  person: 'trainer' | 'member'
}
const FeedbackBlockWrap = styled.div<BlockType>`
  width: 11.75rem;
  color: var(--white);
  border-radius: 1rem;
  text-align: center;
  color: var(--white);
  ${props => props.type === 'diet' && css`
    background-color: var(--block-orange);
  `}
  ${props => props.type === 'accept' && css`
    background-color: var(--block-green);
  `}
  ${props => props.type === 'refusal' && css`
    background-color: var(--block-red);
  `}
  > div:first-child {
    padding: 0.75rem
  }
  > div:last-child {
    border-top: 1px solid var(--white);
    padding: 0.75rem;
    font-size: var(--font-xs);
  }
`

const FeedbackBlock = ({type, person}: BlockType) => {
  return (
    <FeedbackBlockWrap type={type} person={person}>
      <div>
        <div>ooo {person === 'trainer' ? '회원님' : '트레이너'}</div>
        {/* <div>{type === '' ? '수업변경' : }</div> */}
      </div>
      <div>
        눌러서 확인하기
      </div>
    </FeedbackBlockWrap>
  )
}

export const ChatBody = () => {
  return (
    <ChatBodySection>
      <div>
        <TrainerChat />
        <MyChat />
        <FeedbackBlock type='diet' person='member'/>
      </div>
    </ChatBodySection>
  )
}
