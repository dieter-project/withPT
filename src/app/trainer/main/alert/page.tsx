"use client";
import styled from "styled-components";
import Link from "next/link";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import { useState, useEffect } from "react";
import tabBar from "../../public/tabBar.png";

const MainContainer = styled.div`
  background-color: #efefef;
`;

const MainTitle = styled.h4`
  font-weight: bold;
`;

const MainHeader = styled.header`
  height: 3rem;
  display: fixed;
  display: flex;
  text-align: center;
  font-weight: bold;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const TrainerAlertWrap = styled.div`
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
        <h4>알림</h4>
      </MainHeader>
      <div>
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
      </div>
    </MainContainer>
  );
}
