"use client";

import { MonthlyModal } from "@/components/MonthlyModal";
import PageTitle from "@/components/PageTitle";
import { useAppSelector } from "@/redux/hooks";
import {
  WorkoutPayload,
  workoutRecordActions,
} from "@/redux/reducers/workoutRecordSlice";
import { AddImgButton } from "@/styles/AddButton";
import { Button } from "@/styles/Button";
import { BaseContentWrap, ContentSection, RoundBox } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { WorkoutList } from "@/styles/WorkoutList";
import { api } from "@/utils/axios";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";

const DateText = styled(LabelTitle)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
  &::before {
    content: "";
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    background: url(/svgs/icon_workout.svg) no-repeat;
    background-position: center;
    margin-right: 4px;
  }
`;

const AddRecordButton = styled.button`
  width: 100%;
  height: 110px;
  background: url(/assets/plus.png) no-repeat;
  background-color: var(--purple50);
  background-position: center;
  border-radius: 0.5rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const WorkoutImgList = styled.ul`
  li {
    width: 150px;
    height: 150px;
    border-radius: 0.5rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    button {
      position: absolute;
      top: 0.625rem;
      right: 0.625rem;
    }
  }
`;

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const page = () => {
  const title = "운동 입력";
  const [todayWorkout, setTodayWorkout] = useState<WorkoutPayload[]>([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [slideUpModal, setSlideUpModal] = useState(false);
  const [activeDate, setActiveDate] = useState<Value>(new Date());
  const [recordDate, setRecordDate] = useState(
    format(new Date(Date.now()), "yyyy-MM-dd").toString(),
  );
  const router = useRouter();
  const states = useAppSelector(state => state.workoutRecord);
  const dispatch = useDispatch();

  const handleGetWorkoutRecord = async () => {
    // try {
    //   const response = await api.get(`/members/exercise`)
    // } catch (error) {
    //   console.log('error: ', error);
    // }
  };

  const handleDateChange = () => {
    setDisplayModal(true);
  };

  const dateText = (date: String) => {
    if (typeof date === "string") {
      const d = new Date(date);
      const convertDate = format(d, "yyyy년 MM월 dd일 (EEE)", { locale: ko });
      return convertDate;
    }
  };

  const dateType = () => {
    const stringDate = activeDate?.toString();
    if (stringDate) {
      const currentDate = new Date(stringDate);
      setRecordDate(format(currentDate, "yyyy-MM-dd"));
      // console.log(recordDate)
    }
  };

  const handleAddWorkout = () => {
    router.push(`/member/record/workout/register/add?date=${recordDate}`);
  };

  useEffect(() => {
    dateType();
  }, [activeDate]);

  useEffect(() => {
    handleGetWorkoutRecord();
    console.log("states: ", states);
    if (states) {
      setTodayWorkout([...todayWorkout, ...states]);
    }

    return () => {
      dispatch(workoutRecordActions.workoutStateReset());
    };
  }, []);

  return (
    <>
      {displayModal && (
        <MonthlyModal
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          slideUpModal={slideUpModal}
          setSlideUpModal={setSlideUpModal}
          setActiveDate={setActiveDate}
        />
      )}
      <PageTitle title={title} />
      <BaseContentWrap>
        <DateText onClick={handleDateChange}>{dateText(recordDate)}</DateText>
        <ContentSection>
          <LabelTitle>오늘 한 운동 3</LabelTitle>
          {todayWorkout.length <= 0 ? (
            <AddRecordButton onClick={handleAddWorkout}>
              {/* <div>!</div>
              <p>아직 등록된 운동이 없어요</p> */}
            </AddRecordButton>
          ) : (
            <WorkoutList>
              <div>
                <ul>
                  {todayWorkout?.map((workout, index) => {
                    return (
                      <li key={index}>
                        <div>이미지</div>
                        <div>
                          <div>{workout.title}</div>
                          <div className="workout-contents">{workout.set}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <AddRecordButton
                  onClick={handleAddWorkout}
                  style={{
                    height: "48px",
                  }}
                />
              </div>
            </WorkoutList>
          )}
        </ContentSection>
        <ContentSection>
          <LabelTitle>운동 사진</LabelTitle>
          {todayWorkout.length <= 0 ? (
            <AddImgButton></AddImgButton>
          ) : (
            <WorkoutImgList>
              <li>
                <img src="" alt="" />
                <button>X</button>
              </li>
            </WorkoutImgList>
          )}
        </ContentSection>
        <ButtonWrap>
          <Button variant="primary">기록완료</Button>
        </ButtonWrap>
      </BaseContentWrap>
    </>
  );
};

export default page;
