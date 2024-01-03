"use client";
import ContentHeader from "../../../../components/TrainerPageTitle";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import beforePage from "../../../../../public/icons/beforePage.png";
import searchIcon from "../../../../../public/searchLight.png";
import deleteIcon from "../../../../../public/Trainer/delete.png";
import checkIconPurple from "../../../../../public/Trainer/checkIconPurple.png";
import checkIconGray from "../../../../../public/Trainer/checkIconGray.png";

const Wrap = styled.div`
  position: relative;
  background-color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: auto;
`;

// const ContentHeader = styled.div`
//   background-color: white;
//   position: fixed;
//   width: 100%;
//   height: 4.4rem;
//   align-items: center;
//   z-index: 100;
//   display: flex;
// `;

const ButtonHistoryBack = styled.button`
  width: 2.4rem;
  height: 2.4rem;
`;

const SignupTitle = styled.h4`
  line-height: 3rem;
  color: #222;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0;
`;

const ContentBody = styled.div`
  padding: 6.8rem 1.25rem 3.2rem 1.25rem;
`;

const ContentInnerBody = styled.div``;

const SignupStepInfo = styled.p`
  font-size: var(--font-xxxl);
  font-weight: 600;
  color: #222;
`;

const SignupStepInfoSub = styled.p`
  font-size: var(--font-m);
  color: var(--font-gray700);
`;

const SignupFormWrap = styled.div`
  margin-bottom: 1rem;
`;

const FormTitle = styled.h4`
  font-size: var(--font-l);
  margin-bottom: 0.2rem;
`;

const SignupOrderWrap = styled.div`
  font-size: var(--font-xxxs);
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const SignupOrderCurrent = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--primary);
  color: var(--white);
  margin-bottom: 0.2rem;
  margin-right: 0.62rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  font-size: var(--font-xs);
  font-weight: bold;
  text-align: center;
`;

const SignupOrder = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--purple100);
  color: var(--purple200);
  margin-bottom: 0.2rem;
  margin-right: 0.62rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  font-size: var(--font-xs);
  font-weight: bold;
  text-align: center;
`;

const TrRegisItemWrap = styled.div`
  color: var(--font-gray400);
`;

const SignupButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  line-height: 2.3rem;
  background-color: var(--purple50);
  padding: 0.3rem 0.5rem;
  font-size: var(--font-m);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RegistScheTxt = styled.span`
  width: 100%;
  color: var(--font-gray400);
`;

const ButtonAreaFixed = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 2.4rem 1.6rem 1.6rem;
  width: 100%;
  z-index: 100;
  background-color: transparent;
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
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

const ModalWrap = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  max-height: 90vh;
  background-color: white;
  padding: 1.75rem 1rem 3.38rem;
  border-radius: 1rem 1rem 0 0;
  transition: 0.3s;
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

const overLapErrorMessage = styled.div``;

const ScheduleFlexWrap = styled.div`
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

export default function step4() {
  const title = "이력 등록";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [selectedSchedules, setSelectedSchedules] = useState<
    Array<{ days: string[]; startTime: string; endTime: string }>
  >([]);

  // console.log(selectedSchedules);

  //error message
  const [overlapError, setOverlapError] = useState<string | null>(null);

  const [allSchedules, setAllSchedules] = useState<
    Array<{ days: string[]; startTime: string; endTime: string }>
  >([]);

  const handleAddSchedule = () => {
    // 날짜와 시간이 겹치는지 확인
    const isOverlap = selectedSchedules.some(schedule => {
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
      setOverlapError("날짜와 시간이 겹칩니다.");
    } else {
      setOverlapError(null);

      // 선택한 일정 정보를 저장
      const schedule = {
        days: selectedDays,
        startTime: selectedStartTime,
        endTime: selectedEndTime,
      };
      setSelectedSchedules([...selectedSchedules, schedule]);
    }
  };

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
      setOverlapError("날짜와 시간이 겹칩니다.");
    } else {
      setOverlapError(null);

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
    // 선택한 요일을 추가 또는 제거합니다.
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
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

  useEffect(() => {
    if (!showModalContent) {
      setTimeout(() => {
        setShowModalContent(false);
      }, 300); // 모달 전환 시간에 따라 timeout 기간을 조절하세요
    }
  }, [showModalContent]);

  const timeOptions = generateTimeOptions();

  return (
    <Wrap>
      <ContentHeader title={title}></ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          <SignupOrderWrap>
            <SignupOrder>1</SignupOrder>
            <SignupOrder>2</SignupOrder>
            <SignupOrder>3</SignupOrder>
            <SignupOrderCurrent>4</SignupOrderCurrent>
          </SignupOrderWrap>
          <div style={{ marginBottom: "1.5rem" }}>
            <SignupStepInfo>내 이력을 등록해주세요</SignupStepInfo>
            <SignupStepInfoSub>
              회원가입 후 마이페이지에서도 입력이 가능해요.
            </SignupStepInfoSub>
          </div>
          <SignupFormWrap>
            <TrRegisItemWrap>
              <SignupButton onClick={toggleModal}>
                {selectedSchedules[0] ? (
                  <RegisterStatus>
                    <CheckIcon src={checkIconPurple} alt="등록 완료 이미지" />
                    <RegisterMessage>등록 완료 </RegisterMessage>
                  </RegisterStatus>
                ) : (
                  <RegisterStatus>+</RegisterStatus>
                )}
              </SignupButton>
            </TrRegisItemWrap>
            {selectedSchedules[0] ? (
              <ScheduleFlexWrap>
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
          <ButtonAreaFixed>
            <NextStep rel="preload" href="/trainer/register/step2">
              다음
            </NextStep>
          </ButtonAreaFixed>
        </ContentInnerBody>
      </ContentBody>
      {isModalOpen && (
        <Modal>
          <ModalWrap style={{ bottom: showModalContent ? "0" : "-100%" }}>
            <ModalHeader>경력 입력</ModalHeader>
            <ModalBody>
              <ModalContent>
                <ModalContentTit>센터</ModalContentTit>
                <ModalFormWrap>검색</ModalFormWrap>
              </ModalContent>
              <ModalContent>
                <ModalContentTit>직책</ModalContentTit>
                <TimeSelect
                  value={selectedStartTime}
                  onChange={e => handleStartTimeChange(e.target.value)}
                >
                  <option value="">06:00</option>
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
                  <option value="">24:00</option>
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
                        <span>x</span>
                      </SelectedItemDay>
                      <SelectedItemTime>
                        {schedule.startTime} ~ {schedule.endTime}
                      </SelectedItemTime>
                    </SelectedItem>
                  ))}
                </ScheduleWrap>
                {overlapError && (
                  <overLapErrorMessage
                    style={{ color: "red", marginBottom: "1rem" }}
                  >
                    {overlapError}
                  </overLapErrorMessage>
                )}
              </div>
              <ModalCloseButton onClick={modalClose}>저장하기</ModalCloseButton>
            </ModalBody>
          </ModalWrap>
          <ModalDimmed></ModalDimmed>
        </Modal>
      )}
    </Wrap>
  );
}
