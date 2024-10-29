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
import PageHeader from "@/components/PageHeader";
import {
  BookmarkIcon,
  CalendarIcon,
  SettingIcon,
} from "@/styles/components/Header";
import SettingMenu from "@/components/SettingMenu";
import { getExerciseByDate } from "@/services/member/exercise";
import { BODY_PART, EXERCISE_TYPE } from "@/constants/record";
import { WorkoutType } from "@/types/member/record";
import { FlexRowEnd } from "@/styles/components/Flex";
import { PlusButton } from "@/styles/Button";

const page = () => {
  const [workout, setWorkout] = useState<WorkoutType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const today = format(new Date(), "yyyy-MM-dd");
  const user = useAppSelector(state => state.member);

  const handleGetWorkout = async () => {
    const {
      data: { data },
    } = await getExerciseByDate(today);
    if (data === null) return;
    setWorkout(data.exerciseInfos);
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
              {workout?.length === 0 || workout === undefined ? (
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
            {workout?.length > 0 && (
              <PlusButton
                onClick={() => router.push("/member/record/workout/register")}
              />
            )}
          </TitleWrap>
          {workout?.length > 0 ? (
            <>
              <div>
                <ul>
                  {workout?.map((workout, index) => {
                    return (
                      <li key={index}>
                        <WorkoutList variant="purple">
                          <WorkoutIcon>
                            <img
                              src={
                                EXERCISE_TYPE.find(
                                  type => type.value === workout.exerciseType,
                                )?.src
                              }
                              alt=""
                            />
                          </WorkoutIcon>
                          <div>
                            <WorkoutListTitle>{workout.title}</WorkoutListTitle>
                            <WorkoutListDetail>
                              {workout.bodyParts && (
                                <div key={index}>
                                  {convertPart(workout.bodyParts)},&nbsp;
                                </div>
                              )}
                              {workout.weight > 0 && (
                                <div>{workout.weight}kg&nbsp;</div>
                              )}
                              {workout.exerciseTime > 0 && (
                                <div>x {workout.exerciseTime}분&nbsp;</div>
                              )}
                              {workout.exerciseSet > 0 && (
                                <div>x {workout.exerciseSet}set&nbsp;</div>
                              )}
                              {workout.times > 0 && (
                                <div>{workout.times}분</div>
                              )}
                            </WorkoutListDetail>
                          </div>
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
          {workout?.length > 0 && (
            <div>
              <TitleWrap>
                <LabelTitle>운동 사진</LabelTitle>
                <PlusButton />
              </TitleWrap>
              <WorkoutImgGrid>
                <ul>
                  {workout?.map((_, index) => {
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
