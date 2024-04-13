import { BaseHeader } from '@/styles/Layout';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { SetStateAction } from 'react'
import { styled } from 'styled-components';

interface HeaderProps {
  title?: string;
  back?: boolean;
  page?: string;
  bookmark?: boolean;
  calendar?: boolean;
  setting?: boolean;
  setIsPopupMenuOpen?: SetStateAction<boolean>;
}

const HomeHeader = styled(BaseHeader)`
  padding: 0 1.25rem;
  `

const PageHeader = styled(BaseHeader)`
  padding: 0 1.25rem;
  height: 3.5rem;
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
const HeaderIcon = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  overflow: hidden;
  text-indent: -999px;
`

const BellIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_bell.svg) no-repeat;
  background-position: center;
`
const BookmarkIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_bookmark.svg) no-repeat;
  background-position: center;
`
const CalendarIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_calendar.svg) no-repeat;
  background-position: center;
`
const SettingIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_setting.svg) no-repeat;
  background-position: center;
`

const Header = ({
  title,
  back,
  page,
  bookmark,
  calendar,
  setting,
  setIsPopupMenuOpen
}: HeaderProps) => {
  const router = useRouter();

  if (page === 'home') {
    return (
      <HomeHeader>
        <h1><Image src={'/svgs/logo.svg'} width={64} height={21} alt='Logo'/></h1>
        <BellIcon>알림</BellIcon>
      </HomeHeader>
    )
  } else {
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
          {bookmark && <BookmarkIcon>북마크</BookmarkIcon>}
          {calendar && <CalendarIcon>달력</CalendarIcon>}
          {setting && <SettingIcon>설정</SettingIcon>}
        </div>
      </PageHeader>
    )
  }

}

export default Header;