import { BaseHeader } from '@/styles/Layout'
import { useRouter } from 'next/navigation'
import React from 'react'
import styled from 'styled-components'

interface ChatHeaderProps {
  title: string;
  back?: boolean;
}


const PageHeader = styled(BaseHeader)`
  padding: 0 1.25rem;
  height: 3.5rem;
  border-bottom: 1px solid var(--border-gray300);
  > div:last-child {
    display: flex;
    gap: 0.5rem;
  }
`

const BackButton = styled.button`
  width: 0.75rem;
  height: 0.75rem;
  border-left: 2px solid var(--black);
  border-bottom: 2px solid var(--black);
  transform: rotate(45deg);
  overflow: hidden;
  text-indent: -999px;
`

const ChatHeader = ({
  back,
  title,
}: ChatHeaderProps) => {
  const router = useRouter();

  return (
    <PageHeader>
      <div>
        {
          back &&
          <BackButton
            onClick={() => router.back()}
            className='back-btn'
          >뒤로</BackButton>
        }
      </div>
      <h1>{title}</h1>
      <div>
        {/* {bookmark && <BookmarkIcon>북마크</BookmarkIcon>}
        {calendar && <CalendarIcon>달력</CalendarIcon>}
        {setting && <SettingIcon>설정</SettingIcon>} */}
      </div>
    </PageHeader>
  )
}

export default ChatHeader