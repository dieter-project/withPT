"use client";

import PageHeader from "@/components/PageHeader";
import { SettingIcon } from "@/styles/components/Header";
import { BaseContentWrap, ContentSection } from "@/styles/Layout";
import { DateText } from "../register/style";
import { dateText } from "@/utils/date";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { WorkoutInfo } from "@/types/member/record";
import { getExercise } from "@/services/member/exercise";
import { BODY_PART, EXERCISE_TYPE } from "@/constants/record";
import { Hr, Label, TypeBlock } from "./style";

const page = ({ params }: { params: { id: number } }) => {
  const [workout, setWorkout] = useState<WorkoutInfo>({
    id: 0,
    exerciseInfo: {
      id: 0,
      title: "",
      weight: 0,
      times: 0,
      bodyParts: "",
      exerciseSet: 0,
      exerciseTime: 0,
      exerciseType: "",
    },
    uploadDate: "",
  });
  const searchParams = useSearchParams();
  const workoutInfoId = params.id;
  const workoutId = searchParams.get("workoutId");

  const getWorkout = async () => {
    const { data } = await getExercise(Number(workoutId), workoutInfoId);
    setWorkout(data.data);
  };

  useEffect(() => {
    getWorkout();
  }, []);

  return (
    <>
      <PageHeader back title="운동 기록" rightElement={<SettingIcon />} />
      <BaseContentWrap>
        <DateText>
          {dateText(workout?.uploadDate || new Date().toISOString())}
        </DateText>
        <Hr/>
        <ContentSection>
          <Label>운동명</Label>
          <div>{workout.exerciseInfo.title}</div>
          <Label>분류</Label>
          <TypeBlock>
            {
              EXERCISE_TYPE.find(
                type => type.value === workout.exerciseInfo.exerciseType,
              )?.title
            }
          </TypeBlock>
          {workout.exerciseInfo.bodyParts && (
            <>
              <Label>부위</Label>
              <div>
                {
                  BODY_PART.find(
                    part => part.value === workout.exerciseInfo.bodyParts,
                  )?.title
                }
              </div>
            </>
          )}
          <Label>운동 내용</Label>
          <div>{workout.exerciseInfo.exerciseSet}분</div>
        </ContentSection>
      </BaseContentWrap>
    </>
  );
};

export default page;
