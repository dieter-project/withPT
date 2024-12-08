"use client";

import React from "react";
import { TrainerLayout } from "@/app/trainer/layout";
import { useState, useEffect } from "react";
import { api } from "@/utils/axios";
import styled from "styled-components";
import Link from "next/link";
import ContentHeader from "@/components/TrainerPageTitle";
import { Button } from "@/styles/Trainer/TrainerButton";
import { ListButton } from "@/styles/Trainer/TrainerButton";
import { startOfWeek, addDays, format } from "date-fns";

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
  font-size: var(--font-s);
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
  const title = "회원관리";
  const today = new Date();
  const [startDate, setStartDate] = useState(startOfWeek(today));
  const endDate = addDays(startDate, 13);

  const getResponseTest = async () => {
    try {
      const response = await api.get(`/api/v1/gyms/personal-trainings`);
      const responseStatus = response.data.status;
      const responseData = response.data;
      console.log("통신 결과", responseData);
      if (responseStatus === "success") {
        console.log(responseData);
      }
    } catch (error) {
      console.log("error fetching", error);
    }
  };

  useEffect(() => {
    getResponseTest();
  }, []);

  return (
    <TrainerLayout
      title={title}
      hasHeader={true}
      hasFooter={false}
      variant="withBack"
    >
      <Link href="/trainer/membermanagement/member/register">
        <Button $variant="primary" height="3.5rem">
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
    </TrainerLayout>
  );
}
