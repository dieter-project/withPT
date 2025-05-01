"use client";

import { format } from "date-fns";
import { TrainerLayout } from "@/app/trainer/layout";
import ko from "date-fns/locale/ko";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/trainer/atoms/typography/TypoGraphy.styles";
import changeClassImg from "/public/trainer/Main/changeClass.png";
import foodFeedbackImg from "/public/trainer/Main/foodFeedback.png";
import newClassImg from "/public/trainer/Main/newClass.png";
import { useMontlyMemberStatics } from "@/hooks/trainer/main/useMain";
import { MemberChart } from "@/components/trainer/molecules/chart/MemberChart";

const TrainerMainWrap = styled.div`
  background-color: #ffffff;
  padding: 0.94rem 1.25rem;
  margin: 1.3rem 0;
  height: 18rem;
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
  const title = "";
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState<"firstTab" | "secondTab">(
    "firstTab",
  );

  const apiDate = format(currentTime, "yyyy-MM-dd");
  const displayDate = format(currentTime, "MM.dd EEEE", { locale: ko });
  const monthOnly = format(currentTime, "M", { locale: ko });

  // 시계 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { data: statsData, isLoading } = useMontlyMemberStatics(apiDate);

  useEffect(() => {
    if (statsData) {
      console.log("Monthly stats updated:", statsData);
    }
  }, [statsData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <TrainerLayout
      title={title}
      hasHeader={true}
      hasFooter={true}
      variant="logo"
      bgColor="primary"
    >
      <Typography variant="title2" fw={600}>
        {displayDate}
      </Typography>
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
          <IsTapActive className={activeTab === "secondTab" ? "isActive" : ""}>
            <TrainerScheduleItem onClick={() => setActiveTab("secondTab")}>
              도착한 알림
            </TrainerScheduleItem>
          </IsTapActive>
        </TrainerScheduleTap>
        <TrainerScheduleContentWrap>
          {activeTab === "firstTab" ? (
            <Link href="coursemanagement ">
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
            </Link>
          ) : (
            <div className="trainer-schedule-content">
              <Link href="/main/alert">
                <AlertContentItem>
                  <div>
                    <AlertTypeImg
                      src={foodFeedbackImg}
                      alt="식단 피드백 요청 이미지"
                      width="20"
                      height="20"
                    />
                    <AlertTypeTxt>식단피드백 요청</AlertTypeTxt>
                    <Typography variant="title3" fw={600}>
                      김땡땡 회원님
                    </Typography>
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
              </Link>
            </div>
          )}
        </TrainerScheduleContentWrap>
      </TrainerMainWrap>
      <Typography variant="title2" fw={600}>
        회원 통계
      </Typography>
      <MemberChart monthOnly={monthOnly} statsData={statsData} />
    </TrainerLayout>
  );
}
