import React, { useState } from "react";
import { styled } from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import home from "./../../public/Trainer/Footer/home.png";
import homeLight from "./../../public/Trainer/Footer/homeLight.png";
import manageCourse from "./../../public/Trainer/Footer/manageCourse.png";
import manageCourseLight from "./../../public/Trainer/Footer/manageCourseLight.png";
import manageMember from "./../../public/Trainer/Footer/manageMember.png";
import manageMemberLight from "./../../public/Trainer/Footer/manageMemberLight.png";
import chatLight from "./../../public/Trainer/Footer/chatLight.png";
import myPageLight from "./../../public/Trainer/Footer/myPageLight.png";
import myPage from "./../../public/Trainer/Footer/myPage.png";

const MainFooter = styled.footer`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.7rem;
  left: 0;
  bottom: 0;
  padding: 0 1rem;
  background-color: #ffffff;
  z-index: 100;
`;

const FooterCtgItem = styled(Link)`
  text-align: center;
  width: 100%;
`;

const FooterImgSpan = styled.span`
  display: block;
  color: var(--font-secondary);
  font-size: var;
`;

const TrainerFooter = () => {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState("");

  const isPageActive = page => {
    return pathname === page ? "active" : "";
  };
  return (
    <MainFooter>
      <FooterCtgItem
        href="/trainer/main"
        onClick={() => setActivePage("/trainer/main")}
      >
        <Image
          src={pathname === "/trainer/main" ? home : homeLight}
          alt="홈 아이콘"
          style={{ display: "inline-block" }}
        />
        <FooterImgSpan>홈</FooterImgSpan>
      </FooterCtgItem>

      <FooterCtgItem href="/trainer/coursemanagement">
        <Image
          src={
            pathname === "/trainer/coursemanagement"
              ? manageCourse
              : manageCourseLight
          }
          alt="수업관리 아이콘"
          style={{ display: "inline-block" }}
        />
        <FooterImgSpan>수업관리</FooterImgSpan>
      </FooterCtgItem>
      <FooterCtgItem href="/trainer/membermanagement">
        <Image
          src={
            pathname === "/trainer/membermanagement"
              ? manageMember
              : manageMemberLight
          }
          alt="회원관리 아이콘"
          style={{ display: "inline-block" }}
        />
        <FooterImgSpan>회원관리</FooterImgSpan>
      </FooterCtgItem>

      <FooterCtgItem href="/trainer/chat">
        <Image
          src={chatLight}
          alt="채팅 아이콘"
          style={{ display: "inline-block" }}
        />
        <FooterImgSpan>채팅</FooterImgSpan>
      </FooterCtgItem>

      <FooterCtgItem href="/trainer/mypage">
        <Image
          src={pathname === "/trainer/mypage" ? myPage : myPageLight}
          alt="마이페이지 아이콘"
          style={{ display: "inline-block" }}
        />
        <FooterImgSpan>마이페이지</FooterImgSpan>
      </FooterCtgItem>
    </MainFooter>
  );
};

export default TrainerFooter;
