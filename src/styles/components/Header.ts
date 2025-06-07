import styled from "styled-components";

export const BackButton = styled.button`
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
  cursor: pointer;
`

export const BellIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_bell.svg) no-repeat;
  background-position: center;
`

export const BookmarkIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_bookmark.svg) no-repeat;
  background-position: center;
`

export const CalendarIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_calendar.svg) no-repeat;
  background-position: center;
`

export const SettingIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_setting.svg) no-repeat;
  background-position: center;
`