import { BottomNavigation, NavItem } from '@/styles/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { styled } from 'styled-components'

const NavText = styled.div`
  font-size: var(--font-xxs);
  color: var(--tab);
`

const MemberBottomNav = () => {
  const pathname = usePathname()
  // console.log('pathname: ', pathname);
  const navRoutes = [{
    href: 'main',
    src: '/svgs/icon_nav_home',
    text: '홈'
  }, {
    href: 'record',
    src: '/svgs/icon_nav_record',
    text: '기록'
  },
  {
    href: 'chat',
    src: '/svgs/icon_nav_message',
    text: '채팅'
  },
  {
    href: 'mypage',
    src: '/svgs/icon_nav_mypage',
    text: '마이페이지'
  }]

  return (
    <BottomNavigation>
      {navRoutes.map((route, index) => {
        return (
          <NavItem key={index}>
            <Link href={`/member/${route.href}`}>
              <div>
                <Image 
                  src={pathname.includes(route.href) ? `${route.src}_active.svg`: `${route.src}.svg`}
                  width={20}
                  height={20}
                  alt=''
                />
              </div>
              <NavText>{route.text}</NavText>
            </Link>
          </NavItem>
        )
      })}
    </BottomNavigation>
  )
}

export default MemberBottomNav