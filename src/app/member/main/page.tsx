"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ExclamationMark, LabelTitle } from "@/styles/Text";
import { ContentSection } from "@/styles/Layout";
import MemberBottomNav from "@/components/MemberBottomNav";
import { TrainerSwipe } from "@/components/TrainerSwipe";
import {
  EmptyTodayDiet,
  GoalContents,
  MainWrap,
  MoveButton,
  MyGoal,
  TodayDiet,
  TodayDietContents,
  TodayDietList,
  TodayTab,
} from "./styles";
import DonutChart from "@/components/member/main/DonutChart";
import WorkoutList from "@/components/member/WorkoutList";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { getExerciseByDate } from "@/services/member/exercise";
import {
  getLessonsDays,
  getLessonsMonthly,
  getPersonalTrainers,
} from "@/services/member/training";
import { getMemberInfo } from "@/services/member/member";
import { getDietByDate } from "@/services/member/diet";
import { MemberInfo } from "@/types/member/member";
import { convertGoal } from "@/utils/convertGoal";
import { ScheduleDates } from "@/types/member/schedule";
import MonthlyCalendar from "@/components/member/MonthlyCalendar";
import EmptyData from "@/components/member/EmptyData";

const page = () => {
  const router = useRouter();
  const today = new Date();
  const memberInit = {
    id: 0,
    email: "",
    authProvider: "",
    loginType: "",
    name: "",
    height: 0,
    weight: 0,
    birth: "",
    sex: "",
    imageUrl: "",
    dietType: "",
    exerciseFrequency: "",
    targetWeight: 0,
    role: "",
    joinDate: "",
    lastModifiedDate: "",
  };

  const [tabClick, setTabClick] = useState("1");
  const [todayDiet, setTodayDiet] = useState("");
  const [todayWorkout, setTodayWorkout] = useState([]);
  const [markDate, setMarkDate] = useState([]);
  const [activeDate, setActiveDate] = useState<ScheduleDates>(today);
  const [trainers, setTrainers] = useState([]);
  const [memberInfo, setMemberInfo] = useState<MemberInfo>(memberInit);

  const handleGetTodayDiet = async () => {
    try {
      const { data } = await getDietByDate(format(today, "yyyy-MM-dd"));
      setTodayDiet(data.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleGetTodayWorkout = async () => {
    try {
      const { data } = await getExerciseByDate(format(today, "yyyy-MM-dd"));
      setTodayWorkout(data.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const getMember = async () => {
    try {
      const {
        data: { data },
      } = await getMemberInfo();
      setMemberInfo(data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleGetTrainers = async (id: number) => {
    try {
      const response = await getPersonalTrainers(id);
      const {
        data: { data },
      } = response;
      setTrainers(data);
    } catch (error) {
      // console.log('error: ', error);
    }
  };

  const getLesson = async () => {
    try {
      const params = {
        year: format(today, "yyyy"),
        month: format(today, "MM"),
      };
      const {
        data: { data },
      } = await getLessonsMonthly(params);
    } catch (error) {
      // console.log('error: ', error);
    }
  };

  const onChange = (value: ScheduleDates) => {
    setActiveDate(value);
    router.push(
      `/member/schedule?date=${format(new Date(value as Date), "yyyy-MM-dd")}`,
    );
  };

  useEffect(() => {
    getMember();
    handleGetTodayDiet();
    handleGetTodayWorkout();
    getLesson();
  }, []);

  useEffect(() => {
    handleGetTrainers(memberInfo.id);
  }, [memberInfo]);

  return (
    <>
      <Header page="home" />
      <MainWrap>
        <ContentSection>
          <MyGoal>
            <div>나의 목표</div>
            <GoalContents>
              <div>
                <span></span>
                <div>{convertGoal("diet", memberInfo.dietType)}식단</div>
              </div>
              <div>
                <span></span>
                <div>
                  {convertGoal("exercise", memberInfo.exerciseFrequency)}
                </div>
              </div>
            </GoalContents>
          </MyGoal>
        </ContentSection>
        <ContentSection>
          <LabelTitle>
            {format(new Date(), "MM.dd EEEE", { locale: ko })}
          </LabelTitle>
          <div className="section-contents">
            <TodayTab>
              <div
                className={tabClick === "1" ? "active" : ""}
                onClick={() => setTabClick("1")}
              >
                오늘의 식단
              </div>
              <div
                className={tabClick === "2" ? "active" : ""}
                onClick={() => setTabClick("2")}
              >
                오늘의 운동
              </div>
            </TodayTab>
            <div>
              {tabClick === "1" ? (
                <>
                  {todayDiet?.length > 0 ? (
                    <TodayDiet>
                      <TodayDietContents>
                        <div>
                          <div className="title">섭취칼로리</div>
                          <div>
                            <span>1018Kcal</span> / 1550 Kcal
                          </div>
                          <TodayDietList>
                            <li>
                              탄수화물 <strong>50%</strong>
                            </li>
                            <li>
                              단백질 <strong>50%</strong>
                            </li>
                            <li>
                              지방 <strong>50%</strong>
                            </li>
                          </TodayDietList>
                        </div>
                        <div>
                          <DonutChart />
                        </div>
                      </TodayDietContents>
                    </TodayDiet>
                  ) : (
                    <EmptyData
                      text="아직 등록된 식단이 없어요."
                      subText="눌러서 오늘의 식단을 입력해 주세요"
                      onClick={() => router.push('/member/record/diet/register')}
                    />
                  )}
                </>
              ) : (
                <WorkoutList workout={todayWorkout} />
              )}
            </div>
          </div>
        </ContentSection>
        <ContentSection>
          <LabelTitle>수업일정</LabelTitle>
          <div className="section-contents">
            <MonthlyCalendar
              activeDate={activeDate}
              setActiveDate={setActiveDate}
              markDate={markDate}
              onChange={onChange}
            />
          </div>
        </ContentSection>
        {trainers.length > 0 && (
          <ContentSection>
            <LabelTitle>담당 트레이너</LabelTitle>
            <TrainerSwipe data={trainers} />
          </ContentSection>
        )}
        <MemberBottomNav />
      </MainWrap>
    </>
  );
};

export default page;
