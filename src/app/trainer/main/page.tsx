"use client";
import styled from "styled-components";
import Link from "next/link";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import tabBar from "../../public/tabBar.png";

const MainContainer = styled.div`
  background-color: #efefef;
  min-height: 100vh;
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
`;

const IsTapActive = styled.div`
  width: 100%;
  text-align: center;
  color: var(--font-gray400);
  font-weight: bold;
  padding-bottom: 0.5rem;
  &.isActive {
    border-bottom: 1px solid black;
    color: black;
  }
`;

const TrainerScheduleItem = styled.button`
  all: unset;
`;

const ScheduleContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid gray;
`;

const CheckAllScheduleBtn = styled.button`
  width: 100%;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem;
  margin-top: 1rem;
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
  color: var(--primary);
  font-size: 2rem;
  font-weight: bold;
`;

const MemberNumberWrap = styled.div`
  margin-top: 0.3rem;
  font-size: 0.9rem;
  text-align: center;
`;

const MemberNumber = styled.span`
  color: var(--primary);
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

export default function Main() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState<"firstTab" | "secondTab">(
    "firstTab",
  );

  //오늘 날짜, 요일 계산해서 보여주기 (date-fns 사용)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = format(currentTime, "MM.dd EEEE", { locale: ko });
  const formattedDate2 = format(currentTime, "M", { locale: ko });

  //chart 관련
  // 현재 날짜 구하기
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.

  // x축 카테고리 생성
  const categories: string[] = [];
  for (let i = 5; i >= 0; i--) {
    const date = new Date(currentDate);
    date.setMonth(currentMonth - i);
    const month = date.toLocaleString("default", { month: "short" });
    categories.push(month);
  }

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
  };

  const apexChartData = {
    series: [
      {
        name: "Members",
        data: [10, 41, 35, 51, 49],
        color: "var(--primary)",
      },
    ],
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
            <IsTapActive className={activeTab === "firstTab" ? "isActive" : ""}>
              <TrainerScheduleItem onClick={() => setActiveTab("firstTab")}>
                오늘의 일정
              </TrainerScheduleItem>
            </IsTapActive>
            <IsTapActive
              className={activeTab === "secondTab" ? "isActive" : ""}
            >
              <TrainerScheduleItem onClick={() => setActiveTab("secondTab")}>
                도착한 알림
              </TrainerScheduleItem>
            </IsTapActive>
          </TrainerScheduleTap>
          <TrainerScheduleContentWrap>
            {activeTab === "firstTab" ? (
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
        <MainTitle>회원 통계</MainTitle>
        <TrainerMainWrap>
          <MonthMemberWrap>
            <MonthMemberMonth>{formattedDate2}월 회원수 </MonthMemberMonth>
            <MonthMemberNum> 31명</MonthMemberNum>
          </MonthMemberWrap>
          <div>
            {" "}
            <ReactApexChart
              options={options}
              series={apexChartData.series}
              type="line"
              // height={200}
            />
          </div>
          <MemberNumberWrap>
            신규회원 <MemberNumber>6</MemberNumber>명 | 재등록회원{" "}
            <MemberNumber>5</MemberNumber>명
          </MemberNumberWrap>
        </TrainerMainWrap>
      </MainContentWrap>
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
