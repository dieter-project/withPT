"use client";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { startOfWeek, addDays, format } from "date-fns";
import Image from "next/image";
import arrowRightIcon from "../../../../../../public/Trainer/icons/arrowRightGray.png";
import ContentHeader from "@/components/TrainerPageTitle";
import { ListButton } from "@/styles/TrainerButton";
import Footer from "@/components/TrainerFooter";

const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const MainHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 3rem;
  background-color: #ffffff;
  padding: 1rem;
  z-index: 100;
  text-align: center;
  font-weight: bold;
`;

const ManageContentWrap = styled.div`
  padding: 3rem 1.2rem 5rem;
`;

const ManageMemberWrap = styled.div`
  margin-top: 1.5rem;
`;

const ManageTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ManageTitle = styled.h4`
  font-weight: 600;
`;

const CenterNameItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  background-color: var(--purple50);
  padding: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
`;

const CenterName = styled.span`
  font-weight: 600;
`;

const MemberNum = styled.span`
  font-weight: 400;
  position: absolute;
  right: 3%;
`;

const ArrowRightIcon = styled(Image)`
  position: absolute;
  top: 26%;
  right: 2%;
`;

const MainFooter = styled.footer`
  position: fixed;
  display: flex;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 3rem;
  padding: 0 1rem;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const FooterCtgItem = styled.button`
  all: unset;
  text-align: center;
  width: 100%;
`;

const FooterItemImg = styled.img``;

const FooterImgSpan = styled.span`
  display: block;
`;

export default function MemberRegist() {
  const title = "신규회원 등록";
  return (
    <MainContainer>
      <ContentHeader title={title}></ContentHeader>
      <ManageContentWrap>
        <ManageMemberWrap>
          <ManageTitleWrap>
            <ManageTitle>센터 목록</ManageTitle>
          </ManageTitleWrap>

          <Link href="/trainer/membermanagement/member/regist/search">
            <ListButton>
              <CenterName>아자 아자 피트니스 센터</CenterName>
              <ArrowRightIcon
                src={arrowRightIcon}
                alt="회원 등록 페이지 아이콘"
              />
            </ListButton>
          </Link>
          <Link href="/trainer/membermanagement/member">
            <ListButton>
              <CenterName>아자 아자 피트니스 센터</CenterName>
              <ArrowRightIcon
                src={arrowRightIcon}
                alt="회원 등록 페이지 아이콘"
              />
            </ListButton>
          </Link>
          <Link href="/trainer/membermanagement/member">
            <ListButton>
              <CenterName>아자 아자 피트니스 센터</CenterName>
              <ArrowRightIcon
                src={arrowRightIcon}
                alt="회원 등록 페이지 아이콘"
              />
            </ListButton>
          </Link>
        </ManageMemberWrap>
      </ManageContentWrap>
      <Footer />
    </MainContainer>
  );
}
