"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import beforePage from "../../../../../public/icons/beforePage.png";
import searchIcon from "../../../../../public/searchLight.png";
import { IconButton } from "../../../../styles/TrainerButton";

const Wrap = styled.div`
  position: relative;
  background-color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: auto;
`;

const ContentHeader = styled.div`
  background-color: white;
  position: fixed;
  width: 100%;
  height: 4.4rem;
  align-items: center;
  z-index: 100;
  display: flex;
`;

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
  color: var(--font-gray400);
`;

const SignupFormWrap = styled.div`
  margin-bottom: 1rem;
`;

const FormTitle = styled.h4`
  font-size: var(--font-l);
  margin-bottom: 0.2rem;
  font-weight: 600;
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
  align-items: center;
`;

const RegistScheTxt = styled.span`
  width: 100%;
  color: var(--font-secondary);
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
  padding: 20px;
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
`;

const ModalBody = styled.header``;

const ModalContent = styled.div`
  display: flex;
  margin: 3vh 0 2vh 0;
`;

const ModalContentTit = styled.h3``;

const ModalFormWrap = styled.div``;

const ModalFormLabel = styled.label`
  padding: 0.5vh 1vh;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin-right: 0.5vh;
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

export default function step2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [selectedSchedules, setSelectedSchedules] = useState<
    Array<{ days: string[]; startTime: string; endTime: string }>
  >([]);
  const [newSchedule, setNewSchedule] = useState<{
    days: string[];
    startTime: string;
    endTime: string;
  } | null>(null);

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

  const handleConfirm = () => {
    if (selectedDays.length > 0 && selectedStartTime && selectedEndTime) {
      // 선택한 일정 정보를 저장
      const schedule = {
        days: selectedDays,
        startTime: selectedStartTime,
        endTime: selectedEndTime,
      };
      setSelectedSchedules([...selectedSchedules, schedule]);

      // 선택한 일정 초기화
      setSelectedDays([]);
      setSelectedStartTime("");
      setSelectedEndTime("");

      // 새로 추가된 일정으로 설정
      setNewSchedule(schedule);

      toggleModal(); // 모달 닫기
    } else {
      // 일정 초기화 및 newSchedule 초기화
      setSelectedDays([]);
      setSelectedStartTime("");
      setSelectedEndTime("");
      setNewSchedule(null);
    }
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

  const timeOptions = generateTimeOptions();

  return (
    <Wrap>
      <ContentHeader>
        <ButtonHistoryBack type="button">
          <Image src={beforePage} alt="이전 페이지 이미지" />
        </ButtonHistoryBack>
        <SignupTitle>이력 등록</SignupTitle>
      </ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          <SignupOrderWrap>
            <SignupOrder>1</SignupOrder>
            <SignupOrder>2</SignupOrder>
            <SignupOrder>3</SignupOrder>
            <SignupOrderCurrent>4</SignupOrderCurrent>
          </SignupOrderWrap>
          <div style={{ marginBottom: "1.5rem" }}>
            <SignupStepInfo>내 이력을 등록해주세요.</SignupStepInfo>
            <SignupStepInfoSub>
              회원가입 후 마이페이지에서도 입력이 가능해요.
            </SignupStepInfoSub>
          </div>
          <SignupFormWrap>
            <FormTitle>경력 입력</FormTitle>
            <IconButton onClick={toggleModal} variant="primary">
              {" "}
              {newSchedule ? (
                <NewScheduleWrap>
                  <div>{newSchedule.days.join("/")}</div>
                  <div>
                    {newSchedule.startTime} ~ {newSchedule.endTime}
                  </div>
                  <div> </div>
                </NewScheduleWrap>
              ) : (
                <RegistScheTxt>+</RegistScheTxt>
              )}
            </IconButton>
            <TrRegisItemWrap></TrRegisItemWrap>
          </SignupFormWrap>
          <SignupFormWrap>
            <FormTitle>자격증/수상/교육 등록</FormTitle>
            <IconButton onClick={toggleModal} variant="primary">
              {" "}
              {newSchedule ? (
                <NewScheduleWrap>
                  <div>{newSchedule.days.join("/")}</div>
                  <div>
                    {newSchedule.startTime} ~ {newSchedule.endTime}
                  </div>
                  <div> </div>
                </NewScheduleWrap>
              ) : (
                <RegistScheTxt>+</RegistScheTxt>
              )}
            </IconButton>
          </SignupFormWrap>
          <SignupFormWrap>
            <FormTitle>학력사항 등록</FormTitle>
            <IconButton onClick={toggleModal} variant="primary">
              {" "}
              {newSchedule ? (
                <NewScheduleWrap>
                  <div>{newSchedule.days.join("/")}</div>
                  <div>
                    {newSchedule.startTime} ~ {newSchedule.endTime}
                  </div>
                  <div> </div>
                </NewScheduleWrap>
              ) : (
                <RegistScheTxt>+</RegistScheTxt>
              )}
            </IconButton>
            <TrRegisItemWrap></TrRegisItemWrap>
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
            <ModalHeader>수업일정 등록하기</ModalHeader>
            <ModalBody>
              <ModalContent>
                <ModalContentTit>평일</ModalContentTit>
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
                <select
                  value={selectedStartTime}
                  onChange={e => handleStartTimeChange(e.target.value)}
                >
                  <option value="">시작 시간</option>
                  {timeOptions.map((timeOption, index) => (
                    <option key={index} value={timeOption}>
                      {timeOption}
                    </option>
                  ))}
                </select>

                <ModalContentTit>종료 </ModalContentTit>
                <select
                  value={selectedEndTime}
                  onChange={e => handleEndTimeChange(e.target.value)}
                >
                  <option value="">종료 시간</option>
                  {timeOptions.map((timeOption, index) => (
                    <option key={index} value={timeOption}>
                      {timeOption}
                    </option>
                  ))}
                </select>
              </ModalContent>
              <ModalCloseButton onClick={handleConfirm}>
                전체 일정 등록하기
              </ModalCloseButton>
            </ModalBody>
            <span>모달 내용</span>
          </ModalWrap>
          <ModalDimmed></ModalDimmed>
        </Modal>
      )}
    </Wrap>
  );
}
