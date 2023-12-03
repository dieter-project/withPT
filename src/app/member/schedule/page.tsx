"use client";

import PageTitle from "@/components/PageTitle";
import { Button } from "@/styles/Button";
import { BaseContentWrap, ContentSection, RoundBox } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { api } from "@/utils/axios";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { styled } from "styled-components";

const ScheduleDate = styled.div`
  border-bottom: 1px solid var(--border-gray);
  padding: 0 0.625rem;
`;

const ScheduleDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding: 0.75rem 0.625rem 0;
  div {
    display: flex;
    align-items: center;
    &:first-child {
      display: flex;
      font-weight: var(--font-semibold);
      &::before {
        content: "";
        display: block;
        width: 0.625rem;
        height: 0.625rem;
        border-radius: 50%;
        background-color: var(--primary);
        margin-right: 0.625rem;
      }
    }
    &:last-child {
      font-size: var(--font-s);
    }
  }
`;

const page = () => {
  const title = "나의 수업일정";

  const getSchedule = async () => {
    const response = await api.get("");
  };

  return (
    <>
      <PageTitle title={title} />
      <BaseContentWrap>
        <ContentSection>
          <RoundBox variant="outline">달력</RoundBox>
        </ContentSection>
        <ContentSection>
          <LabelTitle>수업일정</LabelTitle>
          <div>
            <ul>
              <li>
                <ScheduleDate>
                  <LabelTitle>11. 15 목요일</LabelTitle>
                </ScheduleDate>
                <ScheduleDetail>
                  <div>10:00 ~ 10:50</div>
                  <div>with 김땡땡 트레이너</div>
                </ScheduleDetail>
              </li>
              <li>
                <ScheduleDate>
                  <LabelTitle>11. 17 토요일</LabelTitle>
                </ScheduleDate>
                <ScheduleDetail>
                  <div>14:00 ~ 14:50</div>
                  <div>with 근육맨 트레이너</div>
                </ScheduleDetail>
              </li>
            </ul>
          </div>
          <div>
            <Button variant="primary">수업 예약하기</Button>
          </div>
        </ContentSection>
      </BaseContentWrap>
    </>
  );
};

export default page;
