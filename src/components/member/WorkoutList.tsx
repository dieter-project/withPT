import React from "react";
import { styled } from "styled-components";
import { WorkoutPayload, WorkoutType } from "@/types/member/record";
import { EXERCISE_TYPE } from "@/constants/record";
import EmptyData from "./EmptyData";
import { useRouter } from "next/navigation";
import { CloseBtn } from "@/styles/Button";

const WorkoutListContainer = styled.div`
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 0;
    margin-bottom: 0.625rem;
    &:not(:last-child) {
      border-bottom: 1px solid var(--border-gray300);
    }
    > div {
      display: flex;
    }
  }
`;

const WorkoutListImage = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  background-color: var(--purple50);
  border-radius: 0.5rem;
  margin-right: 0.625rem;
  overflow: hidden;
  text-indent: -999px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const WorkoutListContent = styled.div`
  .workout-contents {
    font-size: 12px;
    color: var(--font-gray700);
  }
`;

interface Props {
  workout: WorkoutType[] | WorkoutPayload[] | undefined;
  onDelete?: (idx: number) => void;
}

const WorkoutList = ({ workout, onDelete }: Props) => {
  const router = useRouter();

  return (
    <>
      {workout && workout.length > 0 ? (
        <WorkoutListContainer>
          <div>
            <ul>
              {workout?.map((workout, index) => {
                return (
                  <li key={index}>
                    <div>
                      <WorkoutListImage>
                        <img
                          src={
                            EXERCISE_TYPE.find(
                              type => type.value === workout.exerciseType,
                            )?.src
                          }
                          alt=""
                        />
                      </WorkoutListImage>
                      <WorkoutListContent>
                        <div>{workout.title}</div>
                        <div className="workout-contents">
                          {workout.exerciseType === "ANAEROBIC"
                            ? `${workout.weight}kg x ${workout.exerciseTime}회 x ${workout.exerciseSet}set`
                            : `${
                                EXERCISE_TYPE.find(
                                  type => type.value === workout.exerciseType,
                                )!.title
                              }, ${workout.times}`}
                        </div>
                      </WorkoutListContent>
                    </div>
                    <CloseBtn
                      onClick={() => {
                        onDelete && onDelete(index);
                      }}
                    />
                  </li>
                );
              })}
            </ul>
            {/* <AddRecordButton
          onClick={handleAddWorkout}
          style={{
            height: "48px",
          }}
        /> */}
          </div>
        </WorkoutListContainer>
      ) : (
        <EmptyData
          text="아직 등록된 운동이 없어요."
          subText="눌러서 오늘의 운동을 입력해 주세요"
          onClick={() => router.push("/member/record/workout/register")}
        />
      )}
    </>
  );
};

export default WorkoutList;
