"use client";

import PageHeader from "@/components/PageHeader";
import { SettingIcon } from "@/styles/components/Header";
import { BaseContentWrap, ContentSection } from "@/styles/Layout";
import { DateText } from "../register/style";
import { dateText } from "@/utils/date";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { WorkoutInfo } from "@/types/member/record";
import { deleteExercise, getExercise } from "@/services/member/exercise";
import { BODY_PART, EXERCISE_TYPE } from "@/constants/record";
import { Hr, Label, TypeBlock } from "./style";
import SettingMenu from "@/components/SettingMenu";

const page = ({ params }: { params: { id: number } }) => {
  const [isOpen, setIsOpen] = useState(false);
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
  const router = useRouter();

  const getWorkout = async () => {
    const { data } = await getExercise(Number(workoutId), workoutInfoId);
    setWorkout(data.data);
  };

  const handleDeleteWorkout = async () => {
    const response = await deleteExercise(Number(workoutId), workoutInfoId);
    if (response.status === 200) router.replace('/member/record/workout')
  };

  const menu = (
    <>
      <div
        onClick={() =>
          router.push(`/member/record/workout/register/add/${workoutInfoId}`)
        }
      >
        운동 수정하기
      </div>
      <div onClick={handleDeleteWorkout}>운동 삭제하기</div>
    </>
  );

  useEffect(() => {
    getWorkout();
  }, []);

  return (
    <>
      {isOpen && <SettingMenu contents={menu} />}
      <PageHeader
        back
        title="운동 기록"
        rightElement={<SettingIcon onClick={() => setIsOpen(!isOpen)} />}
      />
      <BaseContentWrap>
        <DateText>
          {dateText(workout?.uploadDate || new Date().toISOString())}
        </DateText>
        <Hr />
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
