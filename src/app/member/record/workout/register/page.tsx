"use client";

import { MonthlyModal } from '@/components/MonthlyModal';
import PageHeader from '@/components/PageHeader';
import WorkoutList from '@/components/member/WorkoutList';
import { useAppSelector } from '@/redux/hooks';
import { WorkoutPayload, workoutRecordActions } from '@/redux/reducers/workoutRecordSlice';
import { AddImgButton } from '@/styles/AddButton';
import { Button } from '@/styles/Button';
import { FileInput } from '@/styles/Input';
import { BaseContentWrap, ContentSection, RoundBox } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { api } from '@/utils/axios';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddRecordButton, ButtonWrap, DateText, WorkoutImgList } from './style';
import { postExercise } from '@/services/member/exercise';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const page = () => {
  const title = "운동 입력";
  const [todayWorkout, setTodayWorkout] = useState<WorkoutPayload[]>([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [slideUpModal, setSlideUpModal] = useState(false);
  const [activeDate, setActiveDate] = useState<Value>(new Date());
  const [recordDate, setRecordDate] = useState(format(new Date(Date.now()), 'yyyy-MM-dd').toString())
  const [files, setFiles] = useState<File[]>([])

  const router = useRouter();
  const states = useAppSelector((state) => state.workoutRecord)
  console.log('states: ', states);
  const dispatch = useDispatch();
  const fileRef = useRef<null | HTMLInputElement>(null);

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
    if (typeof date === 'string') {
      const d = new Date(date)
      const convertDate = format(d, 'yyyy년 MM월 dd일 (EEE)', { locale: ko });
      return convertDate;
    }
  };

  const dateType = () => {
    const stringDate = activeDate?.toString();
    if (stringDate) {
      const currentDate = new Date(stringDate)
      setRecordDate(format(currentDate, 'yyyy-MM-dd'))
      // console.log(recordDate)
    }
  };

  const handleAddWorkout = () => {
    router.push(`/member/record/workout/register/add?date=${recordDate}`);
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('e: ', e.target.files);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setFiles([...files, ...fileArray])
    }
  }

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append('dto', JSON.stringify(todayWorkout))
    // files.forEach((file, index) => {
    //   formData.append(`file${index+1}`, file)
    // })
    formData.append('files', JSON.stringify(files))
    if (states) {
      const response = await postExercise(formData)
      console.log('response: ', response);
      // if (response) {
      //   dispatch(workoutRecordActions.workoutStateReset());
      // }
    } else {
      alert('등록된 기록이 없습니다.')
      return
    }
  }

  useEffect(() => {
    dateType()
  }, [activeDate])

  useEffect(() => {
    handleGetWorkoutRecord()
    if (states) {
      setTodayWorkout([...todayWorkout, ...states]);
    }

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
      <PageHeader title={title} />
      <BaseContentWrap>
        <DateText onClick={handleDateChange}>{dateText(recordDate)}</DateText>
        <ContentSection>
          <LabelTitle>오늘 한 운동 {todayWorkout.length}</LabelTitle>
          {todayWorkout.length <= 0
            ? <AddRecordButton onClick={handleAddWorkout}>
              {/* <div>!</div>
              <p>아직 등록된 운동이 없어요</p> */}
            </AddRecordButton>
            : <>
              <WorkoutList workout={todayWorkout} />
              <AddRecordButton
                onClick={handleAddWorkout}
                style={{
                  height: "48px",
                }}
              />
            </>
          }
        </ContentSection>
        <ContentSection>
          <LabelTitle>운동 사진</LabelTitle>
          {files.length > 0
            ? <WorkoutImgList>
              <li>
                <img src="" alt="" />
                <button>X</button>
              </li>
            </WorkoutImgList>
            : <>
              <AddImgButton onClick={() => fileRef.current?.click()}></AddImgButton>
              <FileInput type="file" ref={fileRef} onChange={handleChangeFile} multiple />
            </>
          }
        </ContentSection>
        <ButtonWrap>
          <Button $variant='primary' onClick={handleSubmit}>기록완료</Button>
        </ButtonWrap>
      </BaseContentWrap>
    </>
  );
};

export default page;
