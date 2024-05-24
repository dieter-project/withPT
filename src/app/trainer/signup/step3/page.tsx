"use client";
import ContentHeader from "@/components/TrainerPageTitle";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import {
  Container,
  ContentBody,
  ButtonAreaFixed,
} from "@/styles/TrainerLayout";
import JoinStep from "@/components/Trainer/TrSignUpStep";
import checkIconPurple from "../../../../../public/Trainer/checkIconPurple.png";
import checkIconGray from "../../../../../public/Trainer/checkIconGray.png";
import ModalCloseXButtonImg from "../../../../../public/Trainer/Modal/close-line.png";
import { useAppSelector } from "@/redux/hooks";
import {
  FormTitle,
  SignUpInputContainer,
  SignUpTitleWrap,
  SignupStepInfo,
  SignupStepInfoSub,
  SignupInputInnerContainer,
} from "@/styles/SignupForm";
import { Button } from "@/styles/TrainerButton";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";

const SignupFormWrap = styled.div`
  margin-bottom: 1rem;
`;

const TrRegisItemWrap = styled.div`
  color: var(--font-gray400);
`;

const SignupButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  line-height: 1.18rem;
  background-color: var(--purple50);
  padding: 1rem 0.88rem;
  font-size: var(--font-m);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RegistScheTxt = styled.span`
  width: 100%;
  color: var(--font-gray400);
`;

const NextStep = styled(Link)`
  display: block;
  border: none;
  border-radius: 0.6rem;
  line-height: 3rem;
  width: 100%;
  background-color: var(--primary);
  color: white;
  padding: 0 1.6rem;
  text-align: center;
`;

const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;

const ModalWrap = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 1.75rem 1rem 3.38rem;
  border-radius: 1rem 1rem 0 0;
  transition: 0.3s;
`;

const ModalCloseXButton = styled(Image)`
  position: absolute;
  top: 1%;
  right: 2%;
`;

const ModalCloseButton = styled.button`
  background-color: var(--primary);
  width: 100%;
  color: var(--white);
  border-radius: 0.5rem;
  padding: 1.5vh 0;
`;

const ModalDimmed = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalHeader = styled.header`
  text-align: center;
  font-size: var(--font-l);
  font-weight: 600;
  margin-bottom: 2.75rem;
`;

const ModalBody = styled.header``;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  line-height: 2.5rem;
`;

const ScheduleWrap = styled.div``;

const ModalContentTit = styled.div`
  margin-right: 1rem;
`;

const RegisterSchedule = styled.button`
  width: 100%;
  border: 1px solid var(--font-gray400);
  border-radius: 0.5rem;
  line-height: 3rem;
  font-size: var(--font-xxxl);
`;

const ModalFormWrap = styled.div``;

const ModalFormLabel = styled.label`
  padding: 0.62rem 0.75rem;
  border: 1px solid var(--border-darkgray);
  border-radius: 0.5rem;
  margin-right: 0.5vh;
  font-size: var(--font-m);
  cursor: pointer;
  /* 선택된 label에 대한 스타일 */
  &.selected {
    background-color: var(--primary);
  }
`;

const ModalCheckBox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* 기본 스타일 없애기 */
  border: none;
  padding: 0;
  margin: 0;

  /* checkbox 선택 시 배경색 변경 */
  &:checked + label {
    background-color: white;
  }
`;

const NewScheduleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TimeSelect = styled.select`
  background-color: var(--purple50);
  color: var(--font-gray400);
  margin-right: 1.81rem;
  padding: 0.62rem;
`;

const SelectedItem = styled.div`
  display: inline-block;
  width: 47.5%;
  margin-right: 1vh;
  border: 1px solid var(--border-darkgray);
  border-radius: 0.625rem;
  padding: 0.5rem 0.88rem;
  margin-bottom: 1vh;
`;

const CenterName = styled.div`
  width: 60%;
  text-align: left;
  color: black;
`;

const RegisterStatus = styled.div`
  display: flex;
  align-items: center;
`;

const RegisterMessage = styled.span`
  color: var(--primary);
`;

const RegisterBeforeMessage = styled.span`
  color: var(--font-gray400);
`;

const SelectedItemDay = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedItemTime = styled.div``;

const OverLapErrorMessage = styled.div``;

const ScheduleFlexWrap = styled.div`
  position: relative;
  border: 1px solid var(--font-gray400);
  border-radius: 0.5rem;
  padding: 1rem 1.19rem;
`;

const ScheduleFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckIcon = styled(Image)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.38rem;
`;

const OverLapWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 300;
  border-radius: 0.5rem;
`;

const OverLapModal = styled.div`
  font-family: var(--font);
  width: 18.125rem;
  height: 9.5rem;
  padding-top: 1.19rem;
  text-align: center;
  background-color: white;
  border-radius: 0.5rem;
  color: black;
  font-size: 3vh;
`;

const OverLapTitle = styled.h4`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
`;

const OverLapMessage = styled.div`
  font-size: var(--font-m);
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 1.06rem;
`;

const OverLapClose = styled.button`
  all: unset;
  width: 100%;
  font-size: var(--font-m);
  padding-top: 0.62rem;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

export default function step3() {
  const title = "센터일정 등록";
  const dispatch = useDispatch();
  const saveStates = useAppSelector(state => state.trainerSignup);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [selectedSchedules, setSelectedSchedules] = useState<
    Array<{ days: string[]; startTime: string; endTime: string }>
  >([]);
  const [recordGyms, setRecordGyms] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  //error message
  const [overlapError, setOverlapError] = useState<boolean>(false);

  const [allSchedules, setAllSchedules] = useState<
    Array<{ days: string[]; startTime: string; endTime: string }>
  >([]);

  const handleConfirm = () => {
    // 최종 확인 시에는 모든 일정들과 비교하여 겹치는지 확인
    const isOverlap = allSchedules.some(schedule => {
      const selectedStart = new Date(`2023-01-01 ${selectedStartTime}`);
      const selectedEnd = new Date(`2023-01-01 ${selectedEndTime}`);
      const existingStart = new Date(`2023-01-01 ${schedule.startTime}`);
      const existingEnd = new Date(`2023-01-01 ${schedule.endTime}`);

      const isDayOverlap = selectedDays.some(day =>
        schedule.days.includes(day),
      );

      const isTimeOverlap =
        (selectedStart >= existingStart && selectedStart < existingEnd) ||
        (selectedEnd > existingStart && selectedEnd <= existingEnd) ||
        (selectedStart <= existingStart && selectedEnd >= existingEnd);

      return isDayOverlap && isTimeOverlap;
    });

    if (isOverlap) {
      setOverlapError(true);
    } else {
      setOverlapError(false);

      // 선택한 일정 정보를 저장
      const schedule = {
        days: selectedDays,
        startTime: selectedStartTime,
        endTime: selectedEndTime,
      };
      setSelectedSchedules([...selectedSchedules, schedule]);
      setAllSchedules([...allSchedules, schedule]);

      // 선택한 일정 초기화
      setSelectedDays([]);
      setSelectedStartTime("");
      setSelectedEndTime("");
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        setShowModalContent(true);
      }, 10);
    } else {
      setShowModalContent(false);
    }
  }, [isModalOpen]);

  const handleDayClick = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      const updatedDays = [...selectedDays, day].sort((a, b) => {
        const daysOrder = ["월", "화", "수", "목", "금", "토", "일"];
        return daysOrder.indexOf(a) - daysOrder.indexOf(b);
      });
      setSelectedDays(updatedDays);
    }
  };

  const handleStartTimeChange = (time: string) => {
    setSelectedStartTime(time);
  };

  const handleEndTimeChange = (time: string) => {
    setSelectedEndTime(time);
  };

  const generateTimeOptions = () => {
    const timeOptions = [];
    for (let hour = 0; hour <= 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        timeOptions.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return timeOptions;
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  //조건에 따라 버튼 비활성화 시키기
  useEffect(() => {
    const isAnyFieldEmpty = () => {
      if (selectedSchedules[0]?.days?.length > 0) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    isAnyFieldEmpty();
  }, [selectedSchedules]);

  // && selectedSchedules[0].days?.length > 0

  console.log("selectedSchedules", selectedSchedules[0]?.days?.length);

  useEffect(() => {
    if (!showModalContent) {
      setTimeout(() => {
        setShowModalContent(false);
      }, 300); // 모달 전환 시간에 따라 timeout 기간을 조절하세요
    }
  }, [showModalContent]);

  const timeOptions = generateTimeOptions();

  const handleRemoveSchedule = index => {
    const newSelectedSchedules = [...selectedSchedules];
    newSelectedSchedules.splice(index, 1);
    setSelectedSchedules(newSelectedSchedules);
  };

  useEffect(() => {
    setRecordGyms(saveStates.gyms);
  }, []);

  const changeDayFormatEnglish = day => {
    if (day === "월") {
      return "MON";
    } else if (day === "화") {
      return "TUE";
    } else if (day === "수") {
      return "WED";
    } else if (day === "목") {
      return "THU";
    } else if (day === "금") {
      return "FRI";
    } else if (day === "토") {
      return "SAT";
    } else if (day === "일") {
      return "SUN";
    }
  };

  const gyms = saveStates.gyms || [];

  const updatedGyms = {
    ...saveStates.gyms[0],
    workSchedules: [
      {
        day: changeDayFormatEnglish(selectedSchedules[0]?.days[0]),
        inTime: selectedSchedules[0]?.startTime,
        outTime: selectedSchedules[0]?.endTime,
      },
    ],
  };

  const handleNext = () => {
    dispatch(
      signupActions.saveSignupState({
        gyms: updatedGyms,
      }),
    );
    console.log("states: ", saveStates);
  };

  // console.log("saveStates", recordGyms);
  console.log(
    "요일변환",
    selectedSchedules[0]?.days[0],
    selectedSchedules[0]?.startTime,
    selectedSchedules
      ? changeDayFormatEnglish(selectedSchedules[0]?.days[0])
      : "",
  );

  return (
    <Container>
      <ContentHeader title={title}></ContentHeader>
      <ContentBody>
        <JoinStep active={"3"} />
        <div>
          <SignUpTitleWrap>
            <SignupStepInfo>센터일정을 등록해 주세요.</SignupStepInfo>
            <SignupStepInfoSub>
              센터별로 수업이 가능한 시간을 등록해주세요.
            </SignupStepInfoSub>
          </SignUpTitleWrap>
        </div>
        {recordGyms?.map((gym, index) => (
          <SignupFormWrap key={index}>
            <TrRegisItemWrap>
              <SignupButton onClick={toggleModal}>
                <CenterName>{gym.name}</CenterName>
                {selectedSchedules[0] ? (
                  <RegisterStatus>
                    <CheckIcon src={checkIconPurple} alt="등록 완료 이미지" />
                    <RegisterMessage>등록 완료 </RegisterMessage>
                  </RegisterStatus>
                ) : (
                  <RegisterStatus>
                    <CheckIcon src={checkIconGray} alt="등록 전 이미지" />
                    <RegisterBeforeMessage>등록 전 </RegisterBeforeMessage>
                  </RegisterStatus>
                )}
              </SignupButton>
            </TrRegisItemWrap>
            {selectedSchedules[0] ? (
              <ScheduleFlexWrap>
                <ModalCloseXButton
                  src={ModalCloseXButtonImg}
                  alt="리스트 삭제 버튼"
                  onClick={() => handleRemoveSchedule()}
                />
                {/* <img></img> */}
                {selectedSchedules.map((schedule, index) => (
                  <ScheduleFlex key={index}>
                    <span>{schedule.days.join("/")}</span>
                    <span>
                      {schedule.startTime} ~ {schedule.endTime}
                    </span>
                  </ScheduleFlex>
                ))}
              </ScheduleFlexWrap>
            ) : (
              ""
            )}
          </SignupFormWrap>
        ))}
        <ButtonAreaFixed>
          <Link href="/trainer/signup/step4">
            <Button
              variant={isDisabled ? "ghost" : "primary"}
              onClick={handleNext}
              disabled={isDisabled}
            >
              다음
            </Button>
          </Link>
        </ButtonAreaFixed>
      </ContentBody>
      {isModalOpen && (
        <Modal>
          <ModalWrap style={{ bottom: showModalContent ? "0" : "-100%" }}>
            <ModalHeader>아자아자 피트니스 센터</ModalHeader>
            <ModalCloseXButton
              src={ModalCloseXButtonImg}
              alt="모달을 닫는 버튼"
              onClick={() => setIsModalOpen(false)}
            />
            <ModalBody>
              <ModalContent>
                <ModalContentTit>날짜</ModalContentTit>
                <ModalFormWrap>
                  <ModalFormLabel
                    className={selectedDays.includes("월") ? "selected" : ""}
                  >
                    <ModalCheckBox
                      type="checkbox"
                      onChange={() => handleDayClick("월")}
                    />
                    월
                  </ModalFormLabel>
                  <ModalFormLabel
                    className={selectedDays.includes("화") ? "selected" : ""}
                  >
                    <ModalCheckBox
                      type="checkbox"
                      onChange={() => handleDayClick("화")}
                    />
                    화
                  </ModalFormLabel>
                  <ModalFormLabel
                    className={selectedDays.includes("수") ? "selected" : ""}
                  >
                    <ModalCheckBox
                      type="checkbox"
                      onChange={() => handleDayClick("수")}
                    />
                    수
                  </ModalFormLabel>
                  <ModalFormLabel
                    className={selectedDays.includes("목") ? "selected" : ""}
                  >
                    <ModalCheckBox
                      type="checkbox"
                      onChange={() => handleDayClick("목")}
                    />
                    목
                  </ModalFormLabel>
                  <ModalFormLabel
                    className={selectedDays.includes("금") ? "selected" : ""}
                  >
                    <ModalCheckBox
                      type="checkbox"
                      onChange={() => handleDayClick("금")}
                    />
                    금
                  </ModalFormLabel>
                  <ModalFormLabel
                    className={selectedDays.includes("토") ? "selected" : ""}
                  >
                    <ModalCheckBox
                      type="checkbox"
                      onChange={() => handleDayClick("토")}
                    />
                    토
                  </ModalFormLabel>
                  <ModalFormLabel
                    className={selectedDays.includes("일") ? "selected" : ""}
                  >
                    <ModalCheckBox
                      type="checkbox"
                      onChange={() => handleDayClick("일")}
                    />
                    일
                  </ModalFormLabel>
                </ModalFormWrap>
              </ModalContent>
              <ModalContent>
                <ModalContentTit>시작</ModalContentTit>
                <TimeSelect
                  value={selectedStartTime}
                  onChange={e => handleStartTimeChange(e.target.value)}
                >
                  {timeOptions.map((timeOption, index) => (
                    <option key={index} value={timeOption}>
                      {timeOption}
                    </option>
                  ))}
                </TimeSelect>
                <ModalContentTit>종료</ModalContentTit>
                <TimeSelect
                  value={selectedEndTime}
                  onChange={e => handleEndTimeChange(e.target.value)}
                >
                  {timeOptions.map((timeOption, index) => (
                    <option key={index} value={timeOption}>
                      {timeOption}
                    </option>
                  ))}
                </TimeSelect>
              </ModalContent>
              <ModalContent>
                <RegisterSchedule onClick={handleConfirm}>+</RegisterSchedule>
              </ModalContent>

              <div>
                <ModalContentTit>일정</ModalContentTit>
              </div>
              <div style={{ paddingBottom: "10rem" }}>
                <ScheduleWrap>
                  {selectedSchedules.map((schedule, index) => (
                    <SelectedItem key={index}>
                      <SelectedItemDay>
                        <span>{schedule.days.join("/")}</span>
                      </SelectedItemDay>
                      <SelectedItemTime>
                        {schedule.startTime} ~ {schedule.endTime}
                      </SelectedItemTime>
                    </SelectedItem>
                  ))}
                </ScheduleWrap>
                {/* {overlapError && (
                  <OverLapErrorMessage
                    style={{ color: "red", marginBottom: "1rem" }}
                  >
                    {overlapError}
                  </OverLapErrorMessage>
                )} */}
              </div>
              <ModalCloseButton onClick={modalClose}>저장하기</ModalCloseButton>
            </ModalBody>
          </ModalWrap>
          <ModalDimmed></ModalDimmed>
        </Modal>
      )}
      {overlapError && (
        <OverLapWrap>
          <OverLapModal>
            <OverLapTitle>일정 중복</OverLapTitle>
            <OverLapMessage>
              {" "}
              기존 일정과 중복된 시간이 있어
              <br />
              등록을 할 수 없습니다.
            </OverLapMessage>
            <OverLapClose>확인</OverLapClose>
          </OverLapModal>
        </OverLapWrap>
      )}
    </Container>
  );
}
