"use client";
import styled from "styled-components";
import Link from "next/link";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import { useState, useEffect } from "react";
import tabBar from "../../public/tabBar.png";

const MainContainer = styled.div``;

const MainHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const ManageContentWrap = styled.div`
  height: 100vh;
  margin-bottom: 0.2rem;
  padding: 3.5rem 1.2rem 5rem;
  overflow: auto;
`;

const MainTitle = styled.h4`
  font-weight: bold;
  margin: 0 auto;
`;

const NewMemberRegist = styled.div`
  background-color: #868e96;
  color: white;
  padding: 0.6rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: center;
  border-radius: 0.5rem;
`;

const ManageTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ManageTitle = styled.h4`
  color: black;
  font-size: 1rem;
  margin-right: 0.2rem;
  display: inline-block;
`;
const ManageTitlesubTxt = styled.span`
  color: gray;
`;

const ManageTitleDate = styled.span`
  color: black;
`;

const CenterNameItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 1rem 0.5rem;
  margin-bottom: 0.3rem;
  border-radius: 0.5rem;
  font-weight: bold;
`;

const CalendarWrap = styled.div`
  background-color: #f4f4f4;
  border-radius: 0.5rem;
`;

const ScheduleLink = styled(Link)`
  display: block;
  text-align: center;
  background-color: #dacece;
  border-radius: 0.5rem;
  padding: 0.3rem;
`;

const MainFooter = styled.footer`
  display: fixed;
  height: 3rem;
  padding: 1rem 2rem 1rem;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const FooterCtgWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterCtgItem = styled.button`
  all: unset;
  align-items: center;
`;

const FooterItemImg = styled.img`
  display: block;
`;

export default function ManageMain() {
  return (
    <MainContainer>
      <MainHeader>
        <MainTitle>수업관리</MainTitle>
      </MainHeader>
      <ManageContentWrap>
        <div>
          <Link href="/trainer/management/member/regist">
            {" "}
            <NewMemberRegist>신규 회원 등록하기</NewMemberRegist>
          </Link>
          <ManageTitleWrap>
            <div>
              <ManageTitle>회원관리</ManageTitle>
              <ManageTitlesubTxt>총 인원수 : 31명</ManageTitlesubTxt>
            </div>
            <ManageTitleDate>2023.11월</ManageTitleDate>
          </ManageTitleWrap>

          <CenterNameItem href="#!">
            <span>아자 아자 피트니스 센터</span>
            <span>5명</span>
          </CenterNameItem>
          <CenterNameItem href="#!">
            <span>으라차차 피트니스 센터</span>
            <span>5명</span>
          </CenterNameItem>
          <CenterNameItem href="#!">
            <span>득근득근 피트니스 센터</span>
            <span>5명</span>
          </CenterNameItem>
        </div>

        <div>
          <h4>스케줄</h4>
          <CalendarWrap>
            <div>달력</div>
            <div>
              <ScheduleLink href="#!"> 수업 일정 확인하기</ScheduleLink>
            </div>
          </CalendarWrap>
        </div>
      </ManageContentWrap>
      <MainFooter>
        <FooterCtgWrap>
          <li>
            <FooterCtgItem>
              <FooterItemImg src="#!"></FooterItemImg>
              <span>홈</span>
            </FooterCtgItem>
          </li>
          <li>
            <FooterCtgItem>
              <FooterItemImg src="#!"></FooterItemImg>
              <span>수업관리</span>
            </FooterCtgItem>
          </li>
          <li>
            <FooterCtgItem>
              <FooterItemImg src="#!"></FooterItemImg>
              <span>채팅</span>
            </FooterCtgItem>
          </li>
          <li>
            <FooterCtgItem>
              <FooterItemImg src="#!"></FooterItemImg>
              <span>마이페이지</span>
            </FooterCtgItem>
          </li>
        </FooterCtgWrap>
      </MainFooter>
    </MainContainer>
  );
}
