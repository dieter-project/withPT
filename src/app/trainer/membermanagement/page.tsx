"use client";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "@/styles/TrainerButton";
import { ListButton } from "@/styles/TrainerButton";
import Footer from "@/components/TrainerFooter";
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
  line-height: 3.63rem;
  background-color: #ffffff;
  z-index: 100;
  text-align: center;
  font-weight: 600;
  font-size: var(--font-xl);
`;

const MainContentWrap = styled.div`
  padding: 5rem 1.5rem 6.2rem;
`;

const RegisNewMember = styled(Link)`
  display: block;
  width: 100%;
  line-height: 3.5rem;
  text-align: center;
  background-color: var(--primary);
  color: var(--white);
  font-size: var(--font-m);
  border: none;
  border-radius: 0.5rem;
`;

const ManageMemberWrap = styled.div`
  margin-top: 2.5rem;
`;

const ManageTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ManageTitle = styled.h4`
  color: black;
  font-size: var(--font-m);
  margin-right: 0.2rem;
  display: inline-block;
`;

const ManageTitlesubTxt = styled.span`
  font-size: var(--font-m);
  color: var(--font-secondary);
`;

const ManageTitleDate = styled.span`
  font-size: 15px;
  color: black;
`;

const CenterNameItem = styled(Link)`
  width: 100%;
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

export default function ManageMain() {
  const today = new Date();
  const [startDate, setStartDate] = useState(startOfWeek(today));
  const endDate = addDays(startDate, 13);

  return (
    <MainContainer>
      <MainHeader>회원 관리</MainHeader>
      <MainContentWrap>
        <Link href="/trainer/membermanagement/member/regist">
          {" "}
          <Button variant="primary" height="3.5rem">
            신규 회원 등록하기
          </Button>
        </Link>
        <ManageMemberWrap>
          <ManageTitleWrap>
            <div>
              <ManageTitle>회원관리</ManageTitle>
              <ManageTitlesubTxt>총 인원수 : 31명</ManageTitlesubTxt>
            </div>
            <ManageTitleDate>2023.11월</ManageTitleDate>
          </ManageTitleWrap>

          <Link href="/trainer/membermanagement/member">
            <ListButton>
              <CenterName>아자 아자 피트니스 센터</CenterName>
              <MemberNum>5명</MemberNum>
            </ListButton>
          </Link>
          <Link href="#!">
            <ListButton>
              <CenterName>으라차차 피트니스 센터</CenterName>
              <MemberNum>5명</MemberNum>
            </ListButton>
          </Link>
          <Link href="#!">
            <ListButton>
              <CenterName>득근득근 피트니스 센터</CenterName>
              <MemberNum>5명</MemberNum>
            </ListButton>
          </Link>
        </ManageMemberWrap>
      </MainContentWrap>
      <Footer />
    </MainContainer>
  );
}
