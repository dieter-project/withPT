import React from "react";
import Link from "next/link";
import { Icon } from "@/components/common/svgIcon/SvgIcon";
import { BottomNavigation, NavItem } from "@/styles/Layout";
import { FooterIconProps } from "@/types/common/icon";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";

const NavText = styled.div`
  font-size: var(--font-xxs);
  color: var(--tab);
`;

const BottomNav = ({ role }: { role: "member" | "trainer" }) => {
  const pathname = usePathname();
  const navRoutes: FooterIconProps[] =
    role === "member"
      ? [
          {
            href: "main",
            icon: "home",
            activeIcon: "homeActive",
            text: "홈",
          },
          {
            href: "record",
            icon: "message",
            activeIcon: "messageActive",
            text: "기록",
          },
          {
            href: "chat",
            icon: "record",
            activeIcon: "recordActive",
            text: "채팅",
          },
          {
            href: "mypage",
            icon: "myPage",
            activeIcon: "myPageActive",
            text: "마이페이지",
          },
        ]
      : [
          {
            href: "main",
            icon: "home",
            activeIcon: "homeActive",
            text: "홈",
          },
          {
            href: "coursemanagement",
            icon: "message",
            activeIcon: "messageActive",
            text: "수업관리",
          },
          {
            href: "membermanagement",
            icon: "memberManage",
            activeIcon: "memberManageActive",
            text: "회원관리",
          },
          {
            href: "chat",
            icon: "record",
            activeIcon: "recordActive",
            text: "채팅",
          },
          {
            href: "mypage",
            icon: "myPage",
            activeIcon: "myPageActive",
            text: "마이페이지",
          },
        ];

  return (
    <BottomNavigation>
      {navRoutes.map((route, index) => {
        const isActive = pathname.includes(route.href);
        return (
          <NavItem key={index}>
            <Link href={`/${role}/${route.href}`}>
              <div>
                <Icon
                  name={isActive ? route.activeIcon : route.icon}
                  size={20}
                />
              </div>
              <NavText>{route.text}</NavText>
            </Link>
          </NavItem>
        );
      })}
    </BottomNavigation>
  );
};

export default BottomNav;
