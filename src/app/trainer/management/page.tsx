"use client";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { startOfWeek, addDays, format } from "date-fns";

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
  padding: 1rem 0;
  z-index: 100;
  text-align: center;
  font-weight: bold;
`;

const ManageContentWrap = styled.div`
  padding: 3rem 1.2rem 5rem;
`;

const RegisNewMember = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem;
  margin-top: 1rem;
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
  background-color: var(--purple50);
  padding: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
`;

const CenterName = styled.span`
  font-weight: 600;
`;

const CalanderWrap = styled.div`
  padding: 1rem;
  background-color: var(--purple50);
`;

const ScheduleLink = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
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

export default function ManageMain() {
  const today = new Date();
  const [startDate, setStartDate] = useState(startOfWeek(today));
  const endDate = addDays(startDate, 13);

  return (
    <MainContainer>
      <MainHeader>수업관리</MainHeader>
      <ManageContentWrap>
        <RegisNewMember href="/trainer/management/member/regist">
          {" "}
          신규 회원 등록하기
        </RegisNewMember>
        <ManageMemberWrap>
          <ManageTitleWrap>
            <div>
              <ManageTitle>회원관리</ManageTitle>
              <ManageTitlesubTxt>총 인원수 : 31명</ManageTitlesubTxt>
            </div>
            <ManageTitleDate>2023.11월</ManageTitleDate>
          </ManageTitleWrap>

          <CenterNameItem href="#!">
            <CenterName>아자 아자 피트니스 센터</CenterName>
            <span>5명</span>
          </CenterNameItem>
          <CenterNameItem href="#!">
            <CenterName>으라차차 피트니스 센터</CenterName>
            <span>5명</span>
          </CenterNameItem>
          <CenterNameItem href="#!">
            <CenterName>득근득근 피트니스 센터</CenterName>
            <span>5명</span>
          </CenterNameItem>
        </ManageMemberWrap>

        <ManageMemberWrap>
          <ManageTitle>스케줄</ManageTitle>
          <CalanderWrap>
            캘린더
            <ScheduleLink href="#!"> 수업 일정 확인하기</ScheduleLink>
          </CalanderWrap>
        </ManageMemberWrap>
      </ManageContentWrap>
      <MainFooter>
        <FooterCtgItem>
          <FooterItemImg src="#!"></FooterItemImg>
          <FooterImgSpan>홈</FooterImgSpan>
        </FooterCtgItem>

        <FooterCtgItem>
          <FooterItemImg src="#!"></FooterItemImg>
          <FooterImgSpan>수업관리</FooterImgSpan>
        </FooterCtgItem>

        <FooterCtgItem>
          <FooterItemImg src="#!"></FooterItemImg>
          <FooterImgSpan>채팅</FooterImgSpan>
        </FooterCtgItem>

        <FooterCtgItem>
          <FooterItemImg src="#!"></FooterItemImg>
          <FooterImgSpan>마이페이지</FooterImgSpan>
        </FooterCtgItem>
      </MainFooter>
    </MainContainer>
  );
}
