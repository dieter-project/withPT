import React, { useState } from "react";
import { styled } from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
`;

const FooterText = styled.div`
  color: var(--font-secondary);
`;

const TrainerFooter = () => {
  const pathname = usePathname();

  const footerRoutes = [
    {
      href: "main",
      src: "/svgs/icon_nav_home",
      text: "홈",
    },
    {
      href: "coursemanagement",
      src: "/svgs/icon_nav_message",
      text: "수업관리",
    },
    {
      href: "membermanagement",
      src: "/svgs/icon_nav_membermanage",
      text: "회원관리",
    },
    { href: "chat", src: "/svgs/icon_nav_record", text: "채팅" },
    {
      href: "mypage",
      src: "/svgs/icon_nav_mypage",
      text: "마이페이지",
    },
  ];

  return (
    <MainFooter>
      {footerRoutes.map((route, index) => {
        return (
          <FooterCtgItem href={`/trainer/${route.href}`} key={index}>
            <Image
              src={
                pathname.includes(route.href)
                  ? `${route.src}_active.svg`
                  : `${route.src}.svg`
              }
              alt="footer 아이콘"
              style={{ display: "inline-block" }}
              width={20}
              height={20}
            />
            <FooterText>{route.text}</FooterText>
          </FooterCtgItem>
        );
      })}
    </MainFooter>
  );
};

export default TrainerFooter;
