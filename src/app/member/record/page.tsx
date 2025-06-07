"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "@/components/member/layout/Header";
import { BaseContentWrap, ContentSection } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { useRouter } from "next/navigation";
import { ArrowWrap, RecordBoxWrap } from "./styles";
import { NextArrow } from "../mypage/styles";
import { thisMonth } from "@/constants/record";
import { reqGetMemberInfo } from "@/services/member/member";
import { MemberInfo } from "@/types/member/member";
import { getRecord } from "@/services/member/record";
import { WeeklyCalendar } from "@/components/member/common/WeeklyCalendar";
import { format } from "date-fns";
import PageHeader from "@/components/member/layout/PageHeader";
import { CalendarIcon } from "@/styles/components/Header";
type WeeklyRecord = {
  [date: string]: {
    diet: {
      totalCalorie: number;
      targetCalorie: number;
      record: boolean;
    };
    exercise: {
      record: boolean;
    };
    bodyInfo: {
      weight: number;
      targetWeight: number;
      record: boolean;
    };
  };
};

const page = () => {
  const dietInit = {
    record: false,
    targetCalorie: 1500,
    totalCalorie: 0,
  };
  const workoutInit = {
    record: false,
  };
  const weightInit = {
    record: false,
    targetWeight: 0,
    weight: 0,
  };
  const [diet, setDiet] = useState(dietInit);
  const [workout, setWorkout] = useState(workoutInit);
  const [weight, setWeight] = useState(weightInit);
  const [weekly, setWeekly] = useState<WeeklyRecord | null>(null);
  const [targetDate, setTargetDate] = useState(new Date());
  const [memberInfo, setMemberInfo] = useState<MemberInfo>();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const dietSubText = useMemo(() => {
    // if (diet.length )
  }, [diet]);

  const getMember = async () => {
    try {
      const {
        data: { data: memberInfo },
      } = await reqGetMemberInfo();
      setMemberInfo(memberInfo);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const getRecords = async () => {
    try {
      const {
        data: { data },
      } = await getRecord(thisMonth);
      const date = format(targetDate, "yyyy-MM-dd");

      setDiet(data[date].diet);
      setWorkout(data[date].exercise);
      setWeight(data[date].bodyInfo);
    } catch (error) {}
  };

  const handleDateChange = (date: Date) => {
    setTargetDate(date);
  };

  useEffect(() => {
    const date = format(targetDate, "yyyy-MM-dd");
    if (weekly) {
      setDiet(weekly[date].diet);
      setWorkout(weekly[date].exercise);
      setWeight(weekly[date].bodyInfo);
    }
  }, [targetDate]);

  useEffect(() => {
    getMember();
    getRecords();
  }, []);

  return (
    <>
      {/* <Header back={true} bookmark={true} calendar={true} /> */}
      <PageHeader
        back={false}
        title="나의 기록"
        rightElement={
          <CalendarIcon onClick={() => setShowModal(true)}></CalendarIcon>
        }
      />
      <BaseContentWrap>
        <WeeklyCalendar weekly={weekly} onChange={handleDateChange} />
        <ContentSection>
          <LabelTitle>식단</LabelTitle>
          <RecordBoxWrap
            variant="purple"
            onClick={() => router.push("/member/record/diet")}
          >
            <div>
              <div>
                <p>오늘은 뭘 드셨나요?</p>
                <div className="record-value">
                  {diet.record ? diet.totalCalorie : "0"} Kcal
                </div>
              </div>
              <div className="caption">
                <span>!</span>식단을 입력해 주세요!
              </div>
            </div>
            <div className="img-wrap">
              <img src="" alt="" />
            </div>
            <ArrowWrap>
              <NextArrow />
            </ArrowWrap>
          </RecordBoxWrap>
        </ContentSection>
        <ContentSection>
          <LabelTitle>운동</LabelTitle>
          <RecordBoxWrap
            variant="purple"
            onClick={() => router.push("/member/record/workout")}
          >
            <div>
              <div>
                <p>오늘은 운동을 하셨나요?</p>
                <div className="record-value">
                  {!!workout.record ? "운동 성공" : "운동 기록 없음"}
                </div>
              </div>
              <div className="caption">
                {!!workout.record ? (
                  <>
                    <span>♥</span>
                    오운완 성공!
                  </>
                ) : (
                  <>
                    <span>!</span>
                    운동을 입력해 주세요!
                  </>
                )}
              </div>
            </div>
            <div className="img-wrap">
              <img src="" alt="" />
            </div>
            <ArrowWrap>
              <NextArrow />
            </ArrowWrap>
          </RecordBoxWrap>
        </ContentSection>
        <ContentSection>
          <LabelTitle>체중</LabelTitle>
          <RecordBoxWrap
            variant="purple"
            onClick={() => router.push("/member/record/weight")}
          >
            <div>
              <div>
                <p>오늘의 체중은?</p>
                <div className="record-value">{weight.weight} kg</div>
              </div>
              <div className="caption">
                {!weight.record ? (
                  <>
                    <span>!</span>체중을 입력해 주세요!{" "}
                  </>
                ) : weight.weight === weight.targetWeight ? (
                  <>
                    <span>-</span>체중 변화가 없어요.
                  </>
                ) : weight.targetWeight < weight.weight ? (
                  <>
                    <span>-</span>어제보다 체중이 증가했어요ㅜ
                  </>
                ) : (
                  <>
                    <span>♥</span>어제보다 체중이 감소했어요!
                  </>
                )}
              </div>
            </div>
            <div className="img-wrap">
              <img src="" alt="" />
            </div>
            <ArrowWrap>
              <NextArrow />
            </ArrowWrap>
          </RecordBoxWrap>
        </ContentSection>
      </BaseContentWrap>
    </>
  );
};

export default page;
