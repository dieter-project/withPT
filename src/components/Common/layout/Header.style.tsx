import { BaseHeader } from "@/styles/Layout";
import styled from "styled-components";

export const HomeHeader = styled(BaseHeader)`
  padding: 0 1.25rem;
`;

export const PageHeader = styled(BaseHeader)`
  padding: 0 1.25rem;
  height: 3.5rem;
  > div:last-child {
    display: flex;
    gap: 0.5rem;
  }
`;

export const BackButton = styled.button`
  width: 0.75rem;
  height: 0.75rem;
  border-left: 2px solid var(--black);
  border-bottom: 2px solid var(--black);
  transform: rotate(45deg);
  overflow: hidden;
  text-indent: -999px;
`;
export const HeaderIcon = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  overflow: hidden;
  text-indent: -999px;
`;

export const BellIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_bell.svg) no-repeat;
  background-position: center;
  cursor: pointer;
`;
export const BookmarkIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_bookmark.svg) no-repeat;
  background-position: center;
`;
export const CalendarIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_calendar.svg) no-repeat;
  background-position: center;
`;
export const SettingIcon = styled(HeaderIcon)`
  background: url(/svgs/icon_setting.svg) no-repeat;
  background-position: center;
`;