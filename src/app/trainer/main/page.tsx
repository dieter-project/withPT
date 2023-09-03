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

const MainHeader = styled.header`
  position: fixed;
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
  height: 100vh;
  margin-bottom: 0.2rem;
  padding: 3.5rem 1.2rem 5rem;
  overflow: auto;
`;

const MainTitle = styled.h4`
  font-weight: bold;
`;

const TrainerMainWrap = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  margin-top: 0.3rem;
`;

const TrainerScheduleContentWrap = styled.div``;

const TrainerScheduleTap = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TrainerScheduleItem = styled.button`
  all: unset;
  font-weight: bold;
`;

const ScheduleContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid gray;
`;

const CheckAllScheduleBtn = styled.button`
  width: 100%;
  background-color: #eaeaea;
  color: #000000;
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem;
  margin-top: 1rem;
  font-weight: bold;
`;

const MonthMemberWrap = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const MonthMemberMonth = styled.span`
  font-weight: bold;
  color: gray;
  margin-right: 0.5rem;
`;

const MonthMemberNum = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const MemberInfo = styled.div`
  margin-top: 0.3rem;
  font-size: 0.9rem;
  text-align: center;
`;

const MemberInfoType = styled.span``;

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

export default function Main() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("today");

  //오늘 날짜, 요일 계산해서 보여주기 (date-fns 사용)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 날짜를 "MM.dd EEEE" 형식으로 포맷팅
  const formattedDate = format(currentTime, "MM.dd EEEE", { locale: ko }); // 'ko'는 한국어를 나타내는 로케일 식별자입니다.
  const formattedDate2 = format(currentTime, "M", { locale: ko });
  // 클릭한 탭 보여주기
  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <MainContainer>
      <MainHeader>
        <img src="#!" alt="메인 로고 이미지"></img>
        <img src="#!" alt="카테고리 탭 로고"></img>
      </MainHeader>
      <MainContentWrap>
        <MainTitle>{formattedDate}</MainTitle>
        <TrainerMainWrap>
          <TrainerScheduleTap>
            <TrainerScheduleItem onClick={() => setActiveTab("today")}>
              오늘의 일정
            </TrainerScheduleItem>
            <TrainerScheduleItem onClick={() => setActiveTab("notification")}>
              도착한 알림
            </TrainerScheduleItem>
          </TrainerScheduleTap>
          <TrainerScheduleContentWrap>
            {activeTab === "today" ? ( // "오늘의 일정" 탭이 활성화되었을 때
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
            ) : (
              /* "도착한 알림" 탭이 활성화되었을 때 */
              <div className="trainer-schedule-content">
                <ScheduleContentItem>
                  <div>
                    <span>식단피드백 요청</span>
                    <span>|김땡땡 회원님</span>
                  </div>{" "}
                  <span>9:45</span>
                </ScheduleContentItem>
                <ScheduleContentItem>
                  <span>식단피드백 요청|맥도날드 회원님</span>
                  <span>10:12</span>
                </ScheduleContentItem>
                <ScheduleContentItem>
                  <span>식단피드백 요청|김땡땡 회원님</span> <span>10:31</span>
                </ScheduleContentItem>
                <ScheduleContentItem>
                  <span>식단피드백 요청|김땡땡 회원님</span> <span>11:11</span>
                </ScheduleContentItem>
              </div>
            )}

            <CheckAllScheduleBtn>오늘일정 전체 확인하기</CheckAllScheduleBtn>
          </TrainerScheduleContentWrap>
        </TrainerMainWrap>
      </MainContentWrap>
      <MainContentWrap>
        <MainTitle>회원 통계</MainTitle>
        <TrainerMainWrap>
          <MonthMemberWrap>
            <MonthMemberMonth>{formattedDate2}월 회원수 </MonthMemberMonth>
            <MonthMemberNum> 31명</MonthMemberNum>
          </MonthMemberWrap>
          <div style={{ backgroundColor: "darkGray", padding: "7rem" }}>
            그래프
          </div>
          <MemberInfo>신규회원 6명 | 재등록회원 5명</MemberInfo>
        </TrainerMainWrap>
      </MainContentWrap>
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
