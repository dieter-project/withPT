"use client";
import styled from "styled-components";
import Link from "next/link";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import { useState, useEffect } from "react";
import tabBar from "../../public/tabBar.png";

const MainContainer = styled.div``;

const MainTitle = styled.h4`
  font-weight: bold;
  margin: 0 auto;
`;

const MainHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 3rem;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const MainContentWrap = styled.div`
  padding: 4rem 1.2rem 5rem;
`;

const Before = styled.span`
  position: absolute;
`;

const TrainerAlertList = styled.ul``;

const TrainerAlertWrap = styled.li`
  border-bottom: 1px solid gray;
  padding: 0.5rem;
`;

const AlertTopic = styled.span`
  color: gray;
`;

const AlertTime = styled.span`
  color: gray;
`;

const TrainerAlertTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
  margin-bottom: 0.3rem;
`;

const TrainerAlertContent = styled.div`
  color: black;
  font-size: 0.8rem;
  font-weight: bold;
`;

export default function MainAlert() {
  return (
    <MainContainer>
      <MainHeader>
        <Before>뒤</Before>
        <MainTitle>알림</MainTitle>
      </MainHeader>
      <MainContentWrap>
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
      </MainContentWrap>
    </MainContainer>
  );
}
