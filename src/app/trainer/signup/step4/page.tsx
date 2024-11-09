"use client";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import Link from "next/link";
import ContentHeader from "@/components/TrainerPageTitle";
import JoinStep from "@/components/trainer/TrSignUpStep";
import Image from "next/image";
import styled from "styled-components";
import { Container, ContentBody } from "@/styles/trainer/TrainerLayout";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import {
  FormTitle,
  SignUpInputContainer,
  SignUpTitleWrap,
  SignupStepInfo,
  SignupStepInfoSub,
  SignupInputInnerContainer,
} from "@/styles/SignupForm";
import {
  Modal,
  ModalWrap,
  ModalCloseXButton,
  ModalDimmed,
  ModalHeader,
  ModalBody,
  ModalContent,
} from "@/styles/trainer/TrainerModal";
import ModalCloseXButtonImg from "/public/Trainer/Modal/close-line.png";
import searchIconImg from "/public/searchLight.png";
import checkIconPurple from "/public/Trainer/checkIconPurple.png";
import { api } from "@/utils/axios";
import { setCookie } from "@/utils/cookie";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";

const SignupFormWrap = styled.div`
  margin-bottom: 1.5rem;
`;

const TrRegisItemWrap = styled.div`
  color: var(--font-gray400);
`;

const SignupButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  line-height: 3.5rem;
  background-color: var(--purple50);
  padding: 0.3rem 0.5rem;
  font-size: var(--font-m);
`;

const AlertMessage = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-s);
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.56rem;
`;

const StepButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NextTime = styled(Link)`
  display: block;
  border: 1px solid var(--primary);
  border-radius: 0.6rem;
  line-height: 3.5rem;
  width: 10.3rem;
  background-color: #fff;
  color: var(--primary);
  padding: 0 1.6rem;
  text-align: center;
`;

const NextStep = styled.button`
  display: block;
  border: none;
  border-radius: 0.6rem;
  line-height: 3.5rem;
  width: 10.3rem;
  background-color: var(--primary);
  color: white;
  padding: 0 1.6rem;
  text-align: center;
`;

const ModalCloseButton = styled.button`
  background-color: var(--primary);
  width: 100%;
  color: var(--white);
  border-radius: 0.5rem;
  padding: 1.5vh 0;
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

const ModalFormWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--purple50);
  border: none;
  padding-left: 1vh;
`;

const ModalFormInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
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

const SelectedItemDay = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedItemTime = styled.div``;

const OverLapErrorMessage = styled.div``;

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

const RegisterTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const PlusIcon = styled.span`
  font-size: 1.5rem;
  color: var(--font-secondary);
  font-weight: 400;
`;

const SearchIcon = styled(Image)`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
`;

export default function step4() {
  const title = "이력 등록";
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
  const [searchValue, setSearchValue] = useState("");

  //error message
  const [overlapError, setOverlapError] = useState<string | null>(null);

  const [allSchedules, setAllSchedules] = useState<
    Array<{ days: string[]; startTime: string; endTime: string }>
  >([]);

  useEffect(() => {
    console.log("saveStates", saveStates);
  }, []);

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

  const handleNext = () => {
    dispatch(
      signupActions.saveSignupState({
        gyms: updatedGyms,
      }),
    );
    console.log("states: ", saveStates);
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

  const timeOptions = generateTimeOptions(6, 24);

  const handleSubmit = async () => {
    const dataToSend = {
      email: "trainer@test.com",
      password: "trainer1234",
      name: "조은혜",
      birth: "2024-01-07",
      sex: "MAN",
      authProvider: "EMAIL",
      careers: [
        {
          centerName: "우당탕헬스장",
          jobPosition: "트레이너",
          status: "EMPLOYED",
          startOfWorkYearMonth: "2022-01",
          endOfWorkYearMonth: "2024-01",
        },
      ],
      academics: [
        {
          institution: "FOUR_YEAR_UNIVERSITY",
          name: "위피티대학교",
          major: "위피티",
          degree: "HIGH_SCHOOL_DIPLOMA",
          country: "서울",
          enrollmentYearMonth: "2020-03",
          graduationYearMonth: "2023-03",
        },
      ],
      certificates: [
        {
          name: "재활치료자격증",
          institution: "재활치료협회",
          acquisitionYearMonth: "2022-03",
        },
      ],
      awards: [
        {
          name: "위피티수상",
          institution: "위피티대학교",
          acquisitionYearMonth: "2020-12",
        },
      ],
      educations: [
        {
          name: "위피티학원",
          institution: "위피티",
          acquisitionYearMonth: "2020-03",
        },
      ],
      gyms: [
        {
          name: "헬스장1",
          address: "서울시 강동구 성내동",
          latitude: 3.1413161,
          longitude: 4.151771,
          workSchedules: [
            {
              day: "MON",
              inTime: "13:00",
              outTime: "17:00",
            },
          ],
        },
      ],
    };

    try {
      const response = await api.post(
        "http://13.124.80.64/api/v1/trainers/sign-up",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log("data: ", response);

      if (response.data) {
        setCookie("access", response.data.data.accessToken, { path: "/" });
        setCookie("refreshToken", response.data.data.refreshToken, {
          path: "/",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Container>
      <ContentHeader title={title}></ContentHeader>
      <ContentBody>
        <JoinStep active={"4"} />
        <TitleWrapper
          topTitle="내 이력을 등록해주세요."
          underTitle="회원가입 후 마이페이지에서도 입력이 가능해요."
        />
        <RegisterTitle>경력 입력</RegisterTitle>
        <SignupFormWrap>
          <TrRegisItemWrap>
            <SignupButton onClick={toggleModal}>
              {selectedSchedules[0] ? (
                <RegisterStatus>
                  <CheckIcon src={checkIconPurple} alt="등록 완료 이미지" />
                  <RegisterMessage>등록 완료 </RegisterMessage>
                </RegisterStatus>
              ) : (
                <>
                  <PlusIcon>+</PlusIcon>
                </>
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
        <RegisterTitle>자격증/수상/교육 등록</RegisterTitle>
        <SignupFormWrap>
          <TrRegisItemWrap>
            <SignupButton onClick={toggleModal}>
              {selectedSchedules[0] ? (
                <RegisterStatus>
                  <CheckIcon src={checkIconPurple} alt="등록 완료 이미지" />
                  <RegisterMessage>등록 완료 </RegisterMessage>
                </RegisterStatus>
              ) : (
                <>
                  <PlusIcon>+</PlusIcon>
                </>
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
        <RegisterTitle>학력사항 등록</RegisterTitle>
        <SignupFormWrap>
          <TrRegisItemWrap>
            <SignupButton onClick={toggleModal}>
              {selectedSchedules[0] ? (
                <RegisterStatus>
                  <CheckIcon src={checkIconPurple} alt="등록 완료 이미지" />
                  <RegisterMessage>등록 완료 </RegisterMessage>
                </RegisterStatus>
              ) : (
                <>
                  <PlusIcon>+</PlusIcon>
                </>
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
        <AlertMessage>
          <img src="/svgs/icon_alert.svg" alt="" />
          등록된 트레이너 이력은 회원페이지에 노출이 됩니다.
        </AlertMessage>
        <ButtonAreaFixed
          // isButtonDisabled={isButtonDisabled}
          onClick={handleSubmit}
          nextStepUrl="/trainer/signup/finished"
          label="다음"
        />
      </ContentBody>
      {isModalOpen && (
        <Modal>
          <ModalWrap style={{ bottom: showModalContent ? "0" : "-100%" }}>
            <ModalHeader>경력 입력</ModalHeader>
            <ModalCloseXButton
              src={ModalCloseXButtonImg}
              alt="모달을 닫는 버튼"
              onClick={() => setIsModalOpen(false)}
            />
            <ModalBody>
              <ModalContent>
                <ModalContentTit>센터</ModalContentTit>
                <ModalFormWrap>
                  {!searchValue && (
                    <SearchIcon src={searchIconImg} alt="검색 돋보기 이미지" />
                  )}
                  <ModalFormInput
                    type="text"
                    placeholder="검색"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                  ></ModalFormInput>
                </ModalFormWrap>
              </ModalContent>
              <ModalContent>
                <ModalContentTit>직책</ModalContentTit>
              </ModalContent>

              <ModalContent>
                <ModalContentTit>일정</ModalContentTit>
                <TimeSelector
                  selectedStartTime="6"
                  selectedEndTime="24"
                  event={e => handleStartTimeChange(e.target.value)}
                ></TimeSelector>
                <TimeSelect
                  selectedStartTime="6"
                  selectedEndTime="24"
                  event={e => handleEndTimeChange(e.target.value)}
                ></TimeSelect>
              </ModalContent>
              <ModalContent>
                <RegisterSchedule onClick={handleConfirm}>+</RegisterSchedule>
              </ModalContent>

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
                  <OverLapErrorMessage
                    style={{ color: "red", marginBottom: "1rem" }}
                  >
                    {overlapError}
                  </OverLapErrorMessage>
                )}
              </div>
              <ModalCloseButton onClick={modalClose}>저장하기</ModalCloseButton>
            </ModalBody>
          </ModalWrap>
          <ModalDimmed></ModalDimmed>
        </Modal>
      )}
    </Container>
  );
}
