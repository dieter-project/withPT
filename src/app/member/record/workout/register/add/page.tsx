"use client";

import PageHeader from '@/components/PageHeader';
import { BODY_PART, EXERCISE_TYPE } from '@/constants/record';
import { workoutRecordActions } from '@/redux/reducers/workoutRecordSlice';
import { Button } from '@/styles/Button';
import { CategoryPartList } from '@/styles/CategoryPartList';
import { Input, InputRowWrap, InputWrap } from '@/styles/Input';
import { BaseContentWrap, ButtonAreaFixed, FormWrap } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { ToggleButton } from '@/styles/TogglButton';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BookmarkButton, BookmarkSaveToggle } from './style';
import { WorkoutPayload } from '@/types/member/record';
import { getBodyBookmarkCheck } from '@/services/member/bookmark';

const page = () => {
  const [inputData, setInputData] = useState<WorkoutPayload>({
    uploadDate: "",
    title: "",
    weight: 0,
    exerciseSet: 0,
    times: 0,
    exerciseTime: 0,
    bookmarkYn: false,
    bodyParts: '',
    specificBodyParts: [],
    exerciseType: "AEROBIC",
  });
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [bodyPart, setBodyPart] = useState<any[] | undefined>([])
  const [specificBodyParts, setSpecificBodyParts] = useState<any[] | undefined>([])

  useEffect(() => {
    const selectedBodyPart = EXERCISE_TYPE.find(type => type.value === inputData.exerciseType)?.bodyPart
    setBodyPart(selectedBodyPart)
  }, [inputData.exerciseType])

  useEffect(() => {
    if (bodyPart) {
      const selectedSpecificBodyParts = bodyPart.find(part => part.value === inputData.bodyParts)?.specificBodyParts
      setSpecificBodyParts(selectedSpecificBodyParts)
    }
  }, [inputData.bodyParts])

  const handleChoiceExerciseType = (exerciseType: string) => {
    setInputData({
      ...inputData,
      exerciseType,
    });
  };

  const handleChoiceBodyPart = (bodyParts: string) => {
      setInputData({
        ...inputData,
        bodyParts
      })
  };

  const handleChoiceSpecificBodyPart = (bodyPart: string) => {
    if (!inputData.specificBodyParts?.includes(bodyPart)) {
      setInputData({
        ...inputData,
        specificBodyParts: [...inputData.specificBodyParts, bodyPart]
      })
    } else {
      inputData.specificBodyParts.splice(inputData.specificBodyParts.indexOf(bodyPart), 1)
      setInputData({
        ...inputData,
        specificBodyParts: [...inputData.specificBodyParts]
      })
    }
  };

  const handleBookmarkChecked = (checked: boolean) => {
    if (checked) {
      setInputData({ ...inputData, bookmarkYn: true });
    } else if (!checked) {
      setInputData({ ...inputData, bookmarkYn: false });
    }
  };

  const handleAddRecord = async () => {
    if (inputData.bookmarkYn) {
      const { data: {data} } = await getBodyBookmarkCheck({title: inputData.title})
      if (data.duplicated) {
        alert(data.message)
        return
      }
    } 
    dispatch(workoutRecordActions.addWorkoutState(inputData));
    router.push("/member/record/workout/register");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = event.target.name === 'weight' || event.target.name === 'set' || event.target.name === 'times' || event.target.name === 'hour'
    if (numberValue) {
      setInputData({
        ...inputData,
        [event.target.name]: Number(event.target.value)
      })
    } else {
      setInputData({
        ...inputData,
        [event.target.name]: event.target.value
      })
    }
  }

  // useEffect(() => {
  //   console.log("inputData: ", inputData);
  // }, [inputData]);

  useEffect(() => {
    const date = searchParams.get("date");
    // dispatch(workoutRecordActions.addWorkoutState({
    //   exerciseDate: date
    // }))
    if (date) {
      setInputData({
        ...inputData,
        uploadDate: date,
      });
    }
  }, []);

  return (
    <>
      <PageHeader back={true} title={"운동 입력"} />
      <BaseContentWrap>
        <BookmarkButton $variant="outline" onClick={() => router.push('/member/record/workout/bookmark')}>북마크에서 가져오기</BookmarkButton>
        <FormWrap>
          <LabelTitle>운동명</LabelTitle>
          <Input
            type="text"
            placeholder="제목을 입력하세요"
            name="title"
            onChange={handleInputChange}
            value={inputData.title}
          />
        </FormWrap>
        <FormWrap>
          <LabelTitle>분류</LabelTitle>
          <CategoryPartList>
            {EXERCISE_TYPE?.map((type, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleChoiceExerciseType(type.value)}
                  className={
                    inputData.exerciseType === type.value ? "active" : ""
                  }
                >
                  {type.title}
                </li>
              );
            })}
          </CategoryPartList>
        </FormWrap>
        {bodyPart !== undefined &&
          <FormWrap>
            <LabelTitle>부위</LabelTitle>
            <CategoryPartList>
              {bodyPart?.map((part, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleChoiceBodyPart(part.value)}
                    className={inputData.bodyParts === part.value ? "active" : ""}
                  >
                    {part.title}
                  </li>
                );
              })}
            </CategoryPartList>
          </FormWrap>}
        {specificBodyParts !== undefined &&
          <FormWrap>
            <LabelTitle>상세 부위</LabelTitle>
            <CategoryPartList>
              {specificBodyParts?.map((part, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleChoiceSpecificBodyPart(part.value)}
                    className={inputData.specificBodyParts?.includes(part.value) ? "active" : ""}
                  >
                    {part.title}
                  </li>
                );
              })}
            </CategoryPartList>
          </FormWrap>}
        <FormWrap>
          <LabelTitle>운동 내용</LabelTitle>
          <InputRowWrap>
            {inputData.exerciseType !== "ANAEROBIC" ? (
              <InputWrap>
                <Input
                  type="text"
                  name="times"
                  onChange={handleInputChange}
                  value={inputData.times}
                />
                <span>분</span>
              </InputWrap>
            ) : (
              <>
                <InputWrap>
                  <Input
                    type="text"
                    name="weight"
                    onChange={handleInputChange}
                    value={inputData.weight}
                  />
                  <span>kg</span>
                </InputWrap>{" "}
                x
                <InputWrap>
                  <Input
                    type="text"
                    name="exerciseTime"
                    onChange={handleInputChange}
                    value={inputData.exerciseTime}
                  />
                  <span>회</span>
                </InputWrap>{" "}
                x
                <InputWrap>
                  <Input
                    type="text"
                    name="exerciseSet"
                    onChange={handleInputChange}
                    value={inputData.exerciseSet}
                  />
                  <span>set</span>
                </InputWrap>
              </>
            )}
          </InputRowWrap>
        </FormWrap>
        <BookmarkSaveToggle>
          <LabelTitle>북마크에 저장하기</LabelTitle>
          <ToggleButton>
            <input
              role="switch"
              type="checkbox"
              onChange={event => handleBookmarkChecked(event.target.checked)}
            />
          </ToggleButton>
        </BookmarkSaveToggle>
        <ButtonAreaFixed $nav>
          <Button $variant='primary' onClick={handleAddRecord}>추가하기</Button>
        </ButtonAreaFixed>
      </BaseContentWrap>
    </>
  );
};

export default page;
