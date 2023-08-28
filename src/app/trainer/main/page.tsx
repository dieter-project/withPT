"use client";
import styled from "styled-components";
import Link from "next/link";

const MainContainer = styled.div`
  background-color: #efefef;
`;

const MainNav = styled.nav`
  display: fixed;
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const MainContentWrap = styled.div`
  margin-bottom: 3rem;
  padding: 3rem 1rem;
`;

const MainTitle = styled.h4`
  font-weight: bold;
`;

const TrainerMainWrap = styled.div`
  background-color: #ffffff;
  padding: 1rem;
`;

const TrainerScheduleContentWrap = styled.div``;

const TrainerScheduleTap = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
`;

const TrainerScheduleItem = styled.span`
  font-weight: bold;
`;

const ScheduleContentItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckAllScheduleBtn = styled.button`
  width: 100%;
  background-color: #eaeaea;
  color: #000000;
  border: none;
  padding: 0.5rem;
`;

const MainFooter = styled.footer`
  display: fixed;
  display: flex;
`;

const FooterCtgWrap = styled.div``;

export default function Main() {
  return (
    <MainContainer>
      <MainNav>
        <img src="#!" alt="메인 로고 이미지"></img>
        <img src="#!" alt="카테고리 탭 로고"></img>
      </MainNav>
      <MainContentWrap>
        <MainTitle>11. 04 목요일</MainTitle>
        <TrainerMainWrap>
          <TrainerScheduleTap>
            <TrainerScheduleItem>오늘의 일정</TrainerScheduleItem>
            <TrainerScheduleItem>도착한 알림</TrainerScheduleItem>
          </TrainerScheduleTap>
          <TrainerScheduleContentWrap>
            <div className="trainer-schedule-content">
              <ScheduleContentItem>
                <span>10:00 ~ 10:50</span> <span>김땡땡 회원님</span>
              </ScheduleContentItem>
              <ScheduleContentItem>
                <span>12:00 ~ 12:50</span> <span>맥도날드 회원님</span>
              </ScheduleContentItem>
              <ScheduleContentItem>
                <span>13:00 ~ 13:50</span> <span>배고파요 회원님</span>
              </ScheduleContentItem>
              <ScheduleContentItem>
                <span>10:00 ~ 10:50</span> <span>사보리노 회원님</span>
              </ScheduleContentItem>
            </div>
            <CheckAllScheduleBtn>오늘일정 전체 확인하기</CheckAllScheduleBtn>
          </TrainerScheduleContentWrap>
        </TrainerMainWrap>
      </MainContentWrap>
      <MainContentWrap>
        <h4>회원 통계</h4>
        <div className="member-statics-wrap">
          <h4>
            <span>11월 회원수</span>
            <span>31명</span>
          </h4>
          <div>그래프</div>
          <div>
            <span>신규회원</span> <span>6명의 신규회원이 생겼어요</span>
          </div>
          <div>
            <span>재등록회원</span> <span>5명의 회원이 재등록했어요</span>
          </div>
        </div>
      </MainContentWrap>
      <MainFooter>
        <FooterCtgWrap>
          <li>
            <div>
              <img src="#!"></img>
              <span>홈</span>
            </div>
          </li>
          <li>
            <div>
              <img src="#!"></img>
              <span>홈</span>
            </div>
          </li>
          <li>
            <div>
              <img src="#!"></img>
              <span>채팅</span>
            </div>
          </li>
          <li>
            <div>
              <img src="#!"></img>
              <span>마이페이지</span>
            </div>
          </li>
        </FooterCtgWrap>
      </MainFooter>
    </MainContainer>
  );
}
