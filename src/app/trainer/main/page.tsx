"use client";
import styled from "styled-components";
import Link from "next/link";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import tabBar from "@/public/tabBar.png";
import Footer from "@/components/TrainerFooter";
import { Button } from "@/styles/Button";
import alert from "../../../../public/icons/alert.png";
import Image from "next/image";
import foodFeedbackImg from "../../../../public/Trainer/Main/foodFeedback.png";
import changeClassImg from "../../../../public/Trainer/Main/changeClass.png";
import newClassImg from "../../../../public/Trainer/Main/newClass.png";
const MainContainer = styled.div`
  background-color: var(--inputpurple);
  min-height: 100vh;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  width: 100%;
  height: 3.62rem;
  z-index: 100;
  padding: 0 1.25rem;
`;

const MainContentWrap = styled.div`
  padding: 5rem 1.5rem 6.2rem;
`;

const MainTitle = styled.h4`
  font-weight: 600;
  font-size: var(--font-xl);
`;

const TrainerMainWrap = styled.div`
  background-color: #ffffff;
  padding: 0.94rem 1.25rem;
  margin: 1.3rem 0;
  height: 18rem;
`;

const TrainerGraphWrap = styled.div`
  background-color: #ffffff;
  padding: 0.94rem 0.8rem;
  margin: 0.75rem 0;
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
  font-size: var(--font-l);
  width: 100%;
`;

const ScheduleContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-gray);
  font-weight: 600;
  font-size: var(--font-m);
  padding: 1rem;
`;

const AlertContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.91rem 0.62rem;
  border-bottom: 1px solid var(--border-gray);
  font-weight: 600;
  font-size: var(--font-m);
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
  font-size: var(--font-xs);
  font-weight: bold;
  color: gray;
  margin-right: 0.5rem;
  padding-top: 0.3rem;
`;

const MonthMemberNum = styled.span`
  color: var(--black);
  font-size: var(--font-xxl);
  font-weight: bold;
`;

const MemberNumberWrap = styled.div`
  margin-top: 0.3rem;
  font-size: var(--font-s);
  text-align: center;
`;

const MemberNumber = styled.span`
  color: var(--primary);
`;

const AlertTypeImg = styled(Image)`
  display: inline-block;
`;

const AlertTypeTxt = styled.span`
  padding: 0 0.49rem;
`;

const MemberName = styled.span`
  font-size: var(--font-s);
  padding: 0 0.62rem;
  border-left: 1px solid var(--border-lightgray);
`;

const MemberTime = styled.span`
  font-size: var(--font-s);
  font-weight: 400;
  color: var(--font-gray2d);
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
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        colors: ["var(--primary)"],
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
        <Link href="main/alert ">
          <Image src={alert} alt="카테고리 탭 로고"></Image>
        </Link>
      </MainHeader>
      <MainContentWrap>
        <MainTitle>{formattedDate}</MainTitle>
        <TrainerMainWrap>
          <TrainerScheduleTap>
            <IsTapActive className={activeTab === "firstTab" ? "isActive" : ""}>
              <TrainerScheduleItem
                onClick={() => setActiveTab("firstTab")}
                style={{ borderRight: "1px solid var(--gray)" }}
              >
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
                <ScheduleContentItem style={{ borderBottom: "none" }}>
                  <span>16:00 ~ 16:50</span> <span>사보리노 회원님</span>
                </ScheduleContentItem>
              </div>
            ) : (
              /* "도착한 알림" 탭이 활성화되었을 때 */
              <div className="trainer-schedule-content">
                <AlertContentItem>
                  <div>
                    <AlertTypeImg
                      src={foodFeedbackImg}
                      alt="식단 피드백 요청 이미지"
                      width="20"
                      height="20"
                    />
                    <AlertTypeTxt>식단피드백 요청</AlertTypeTxt>
                    <MemberName>김땡땡 회원님</MemberName>
                  </div>{" "}
                  <MemberTime>9:45</MemberTime>
                </AlertContentItem>
                <AlertContentItem>
                  <div>
                    <AlertTypeImg
                      src={changeClassImg}
                      alt="수업변경 요청 이미지"
                      width="20"
                      height="20"
                    />
                    <AlertTypeTxt>수업변경 요청</AlertTypeTxt>
                    <MemberName>맥도날드 회원님</MemberName>
                  </div>
                  <MemberTime>10:12</MemberTime>
                </AlertContentItem>
                <AlertContentItem>
                  <div>
                    <AlertTypeImg
                      src={newClassImg}
                      alt="신규 수업 요청 이미지"
                      width="20"
                      height="20"
                    />
                    <AlertTypeTxt>수업변경 요청</AlertTypeTxt>
                    <MemberName>맥도날드 회원님</MemberName>
                  </div>
                  <MemberTime>10:12</MemberTime>
                </AlertContentItem>
                <AlertContentItem>
                  <div>
                    <AlertTypeImg
                      src={foodFeedbackImg}
                      alt="식단 피드백 요청 이미지"
                      width="20"
                      height="20"
                    />
                    <AlertTypeTxt>수업변경 요청</AlertTypeTxt>
                    <MemberName>맥도날드 회원님</MemberName>
                  </div>
                  <MemberTime>10:12</MemberTime>
                </AlertContentItem>
              </div>
            )}
          </TrainerScheduleContentWrap>
        </TrainerMainWrap>
        <MainTitle>회원 통계</MainTitle>
        <TrainerGraphWrap>
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
              height="120%"
            />
          </div>
          <MemberNumberWrap>
            기존 회원 <MemberNumber>6</MemberNumber>명 | 재등록회원{" "}
            <MemberNumber>5</MemberNumber>명 | 신규 회원{" "}
            <MemberNumber>6</MemberNumber>명
          </MemberNumberWrap>
        </TrainerGraphWrap>
      </MainContentWrap>
      <Footer />
    </MainContainer>
  );
}
