"use client";
import styled from "styled-components";
import { TrainerLayout } from "@/app/trainer/layout";
import Image from "next/image";

const TrainerAlertList = styled.ul``;

const TrainerAlertWrap = styled.li`
  border-bottom: 1px solid var(--border-gray);
  padding: 1rem 0;
`;

const AlertTopic = styled.span`
  color: gray;
  font-size: var(--font-xs);
  font-weight: 500;
`;

const AlertTime = styled.span`
  color: var(--font-gray500);
  font-size: var(--font-xxs);
`;

const TrainerAlertTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
  margin-bottom: 0.3rem;
`;

const TrainerAlertContent = styled.div`
  color: black;
  font-size: var(--font-s);
  font-weight: 500;
`;

export default function MainAlert() {
  return (
    <TrainerLayout
      title="알림"
      hasHeader={true}
      variant="withBack"
      padding="4.4rem 0.6rem"
    >
      <TrainerAlertList>
        <TrainerAlertWrap>
          <TrainerAlertTop>
            <AlertTopic>식단 피드백</AlertTopic>
            <AlertTime>10분 전</AlertTime>
          </TrainerAlertTop>
          <TrainerAlertContent>
            신형만 회원님으로부터 식단 피드백 요청이 도착했어요.
          </TrainerAlertContent>
        </TrainerAlertWrap>
        <TrainerAlertWrap>
          <TrainerAlertTop>
            <AlertTopic>공지사항</AlertTopic>
            <AlertTime>3시간 전</AlertTime>
          </TrainerAlertTop>
          <TrainerAlertContent>
            김땡땡 트레이너 님으로부터 전체 공지가 도착했어요.
          </TrainerAlertContent>
        </TrainerAlertWrap>
      </TrainerAlertList>
    </TrainerLayout>
  );
}
