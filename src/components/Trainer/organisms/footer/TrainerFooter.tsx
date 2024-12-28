import React from "react";
import { styled } from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";
import { FooterIconProps } from "@/types/common/icon";

const MainFooter = styled.footer`
  position: fixed;
  z-index: 100;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.7rem;
  padding: 0 1rem;
  background-color: #ffffff;
`;

const FooterCtgItem = styled(Link)`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

const FooterText = styled.div`
  color: var(--font-secondary);
`;

const footerRoutes: FooterIconProps[] = [
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

const TrainerFooter = () => {
  const pathname = usePathname();

  return (
    <MainFooter>
      {footerRoutes.map(route => {
        const isActive = pathname.includes(route.href);
        return (
          <FooterCtgItem href={`/trainer/${route.href}`} key={route.href}>
            <Icon name={isActive ? route.activeIcon : route.icon} size={20} />
            <FooterText>{route.text}</FooterText>
          </FooterCtgItem>
        );
      })}
    </MainFooter>
  );
};

export default TrainerFooter;
