'use client'
import { css, styled } from "styled-components";

interface BoxProps {
  variant: string;
}

interface BottomProps {
  nav: string;
}

export const BaseContainer = styled.div`
  min-height: 100vh;
`

export const BaseContentWrap = styled.div`
  padding: 4rem 1.25rem;
`;

export const ContentSection = styled.section`
  margin-bottom: 1.5rem;
`

export const BaseHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  z-index: 100;
`
export const BottomNavigation = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 4.375rem;
  padding: 0 1rem;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
  border-top: 1px solid var(--border-gray300);
`

export const NavItem = styled.div`
  all: unset;
  width: 100%;
  text-align: center;
  a {
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
    align-items: center;
  }
`

export const FormWrap = styled.div`
  margin-bottom: 1.5rem;
`

export const RoundBox = styled.div<BoxProps>`
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  ${props => props.variant === 'outline' && css`
    border: 1px solid var(--border-gray300);
  `}
  ${props => props.variant === 'purple' && css`
    background-color: var(--purple50);
  `}
`

export const ButtonAreaFixed = styled.div<{ $nav?: boolean; }>`
  position: fixed;
  bottom: ${props => props.$nav ? '4.375rem': '0'};
  left: 0;
  padding: 2.4rem 1.25rem 1.25rem;
  width: 100%;
  z-index: 100;
  background-color: transparent;
`;