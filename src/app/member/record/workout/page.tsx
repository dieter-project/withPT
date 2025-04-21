"use client";

import { AddRecordButton } from "@/styles/AddButton";
import { BaseContentWrap, ContentSection } from "@/styles/Layout";
import { GoalBox } from "@/styles/RecordPage";
import { LabelTitle } from "@/styles/Text";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  TitleWrap,
  WorkoutIcon,
  WorkoutImg,
  WorkoutImgGrid,
  WorkoutList,
  WorkoutListDetail,
  WorkoutListTitle,
} from "./style";
import { format } from "date-fns";
import { useAppSelector } from "@/redux/hooks";
import PageHeader from "@/components/member/layout/PageHeader";
import {
  BookmarkIcon,
  CalendarIcon,
  SettingIcon,
} from "@/styles/components/Header";
import SettingMenu from "@/components/member/layout/SettingMenu";
import { getExerciseByDate } from "@/services/member/exercise";
import { BODY_PART, EXERCISE_TYPE } from "@/constants/record";
import { WorkoutRecord } from "@/types/member/record";
import {
  FlexRowBetween,
  FlexRowEnd,
  FlexRowStart,
} from "@/styles/components/Flex";
import { PlusButton } from "@/styles/Button";
import { NextArrow } from "../../mypage/styles";

const page = () => {
  const [workout, setWorkout] = useState<WorkoutRecord>({
    id: 0,
    remainingExerciseCountToTarget: 0,
    uploadDate: "",
    exerciseInfos: [],
  });
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const today = format(new Date(), "yyyy-MM-dd");
  const user = useAppSelector(state => state.member);

  const handleGetWorkout = async () => {
    const {
      data: { data },
    } = await getExerciseByDate(today);
    if (data === null) return;
    setWorkout(data);
  };

  const handleGetWorkoutGoal = async () => {};

  useEffect(() => {
    handleGetWorkout();
    handleGetWorkoutGoal();
  }, []);

  const rightElement = (
    <FlexRowEnd>
      <BookmarkIcon
        onClick={() => router.push("/member/record/workout/bookmark")}
      />
      <CalendarIcon onClick={() => {}} />
    </FlexRowEnd>
  );

  const menu = (
    <>
      <div onClick={() => {}}>운동 수정하기</div>
      <div onClick={() => {}}>운동 삭제하기</div>
    </>
  );

  const convertPart = (part: string) => {
    return BODY_PART.find(p => p.value === part)?.title;
  };

  return (
    <>
      <PageHeader back={true} title="운동기록" rightElement={rightElement} />
      <BaseContentWrap>
        <section>달력</section>
        <ContentSection>
          <GoalBox>
            <div>
              <p>이번주 목표까지 3회 남았어요</p>
              {workout?.exerciseInfos?.length === 0 || workout === undefined ? (
                <div>운동을 아직 하지 않으셨어요ㅜ</div>
              ) : (
                <div>오늘도 오운완! 잘하셨어요 {user.name}님:)</div>
              )}
            </div>
            <div>
              <img src="/images/weight_achv.png" alt="" />
            </div>
          </GoalBox>
        </ContentSection>
        <ContentSection>
          <TitleWrap>
            <LabelTitle>운동</LabelTitle>
            {workout?.exerciseInfos?.length > 0 && (
              <PlusButton
                onClick={() => router.push("/member/record/workout/register")}
              />
            )}
          </TitleWrap>
          {workout?.exerciseInfos?.length > 0 ? (
            <>
              <div>
                <ul>
                  {workout?.exerciseInfos?.map((workoutInfo, index) => {
                    return (
                      <li key={index}>
                        <WorkoutList
                          variant="purple"
                          onClick={() =>
                            router.push(
                              `/member/record/workout/${workoutInfo.id}?workoutId=${workout.id}`,
                            )
                          }
                        >
                          <FlexRowBetween>
                            <FlexRowStart>
                              <WorkoutIcon>
                                <img
                                  src={
                                    EXERCISE_TYPE.find(
                                      type =>
                                        type.value === workoutInfo.exerciseType,
                                    )?.src
                                  }
                                  alt=""
                                />
                              </WorkoutIcon>
                              <div>
                                <WorkoutListTitle>
                                  {workoutInfo.title}
                                </WorkoutListTitle>
                                <WorkoutListDetail>
                                  {workoutInfo.bodyParts && (
                                    <div key={index}>
                                      {convertPart(workoutInfo.bodyParts)}
                                      ,&nbsp;
                                    </div>
                                  )}
                                  {workoutInfo.weight > 0 && (
                                    <div>{workoutInfo.weight}kg&nbsp;</div>
                                  )}
                                  {workoutInfo.exerciseTime > 0 && (
                                    <div>
                                      x {workoutInfo.exerciseTime}분&nbsp;
                                    </div>
                                  )}
                                  {workoutInfo.exerciseSet > 0 && (
                                    <div>
                                      x {workoutInfo.exerciseSet}set&nbsp;
                                    </div>
                                  )}
                                  {workoutInfo.times > 0 && (
                                    <div>{workoutInfo.times}분</div>
                                  )}
                                </WorkoutListDetail>
                              </div>
                            </FlexRowStart>
                            <NextArrow />
                          </FlexRowBetween>
                        </WorkoutList>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          ) : (
            <AddRecordButton
              variant="purple"
              onClick={() => router.push("/member/record/workout/register")}
            >
              <div>!</div>
              <p>눌러서 운동을 입력해주세요.</p>
            </AddRecordButton>
          )}
          {workout?.exerciseInfos?.length > 0 && (
            <div>
              <TitleWrap>
                <LabelTitle>운동 사진</LabelTitle>
                <PlusButton />
              </TitleWrap>
              <WorkoutImgGrid>
                <ul>
                  {workout?.exerciseInfos?.map((_, index) => {
                    return (
                      <li key={index}>
                        <WorkoutImg>{/* <img src="" alt="" /> */}</WorkoutImg>
                      </li>
                    );
                  })}
                </ul>
              </WorkoutImgGrid>
            </div>
          )}
        </ContentSection>
      </BaseContentWrap>
      {isOpen && <SettingMenu contents={menu} />}
    </>
  );
};

export default page;
