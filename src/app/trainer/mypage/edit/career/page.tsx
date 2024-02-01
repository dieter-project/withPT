"use client";
import ContentHeader from "@/components/TrainerPageTitle";
import JoinStep from "@/components/Trainer/TrSignUpStep";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Footer from "@/components/TrainerFooter";
import ModalCloseXButtonImg from "../../../../../../public/Trainer/Modal/close-line.png";
import showMoreIcon from "../../../../../../public/Trainer/Mypage/show-more-icon.png";
import searchIconImg from "../../../../../../public/searchLight.png";
import checkIconPurple from "../../../../../../public/Trainer/checkIconPurple.png";
import { api } from "@/utils/axios";
import { setCookie } from "@/utils/cookie";

const Wrap = styled.div`
  position: relative;
  background-color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: auto;
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
  padding: 6.06rem 1.25rem 3.2rem 1.25rem;
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
  height: 3.5rem;
  margin-bottom: 1.5rem;
`;

const FormTitle = styled.h4`
  font-size: var(--font-l);
  margin-bottom: 0.2rem;
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

const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

const ModalCloseXButton = styled(Image)`
  position: absolute;
  top: 1%;
  right: 2%;
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

const RegisterTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RegisterTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.63rem;
`;

const RegisterModify = styled(Link)`
  font-size: var(--font-xs);
  color: var(--font-gray700);
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

const TrainerResume = styled.div`
  padding: 0.64rem 0.94rem;
  background-color: var(--purple50);
`;

const TrainerResumeAward = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

const ShowMoreButton = styled.button`
  width: 100%;
  text-align: center;
  border-top: 1px solid var(--border-gray);
  padding-top: 0.56rem;
`;

const ShowMoreImg = styled(Image)`
  display: inline-block;
  margin-left: 0.44rem;
`;

export default function myinfo() {
  const title = "이력관리";

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

  const [showMoreCareer, setShowMoreCareer] = useState(false);

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

  const handleSubmit = async () => {
    const dataToSend = {
      email: "yellowbutter0327@gmail.com",
      name: "조은혜",
      birth: "2024-01-07",
      sex: "MAN",
      oauthProvider: "GOOGLE",
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
          enrollmentYear: "2020",
          graduationYear: "2023",
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
          acquisitionYear: "2020",
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
        "http://43.200.45.234/api/v1/trainers/sign-up",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log("data: ", response);

      // if (response.data) {
      //   setCookie("access", response.data.accessToken);
      //   setCookie("refreshToken", response.data.refreshToken);
      // }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Wrap>
      <ContentHeader title={title}></ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          <RegisterTitleWrap>
            <RegisterTitle>경력</RegisterTitle>
            <RegisterModify href="/trainer/mypage/edit/career/careermodify">
              수정
            </RegisterModify>
          </RegisterTitleWrap>
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
          <TrainerResume>
            {showMoreCareer ? (
              <>
                <TrainerResumeAward>
                  <span>2023.03</span>
                  <span>보디빌더 대회 최우수상</span>
                </TrainerResumeAward>
                <TrainerResumeAward>
                  <span>2022.03</span>
                  <span>보디빌더 대회 우수상</span>
                </TrainerResumeAward>
                <TrainerResumeAward>
                  <span>2010.03 ~ 2016.02</span>
                  <span>보디빌더 대회 최우수상</span>
                </TrainerResumeAward>
                <TrainerResumeAward>
                  <span>2023.03</span>
                  <span>보디빌더 대회 최우수상</span>
                </TrainerResumeAward>
                <TrainerResumeAward>
                  <span>2022.03</span>
                  <span>보디빌더 대회 우수상</span>
                </TrainerResumeAward>
                <TrainerResumeAward>
                  <span>2010.03 ~ 2016.02</span>
                  <span>보디빌더 대회 최우수상</span>
                </TrainerResumeAward>
              </>
            ) : (
              <>
                {/* ( allAwards.slice(0, 3).map((award, index) => (
        <TrainerResumeAward key={index}>
          <span>{award.date}</span>
          <span>{award.title}</span>
        </TrainerResumeAward>
      ))
    ) */}
                <TrainerResumeAward>
                  <span>2023.03</span>
                  <span>보디빌더 대회 최우수상</span>
                </TrainerResumeAward>
                <TrainerResumeAward>
                  <span>2022.03</span>
                  <span>보디빌더 대회 우수상</span>
                </TrainerResumeAward>
                <TrainerResumeAward>
                  <span>2010.03 ~ 2016.02</span>
                  <span>보디빌더 대회 최우수상</span>
                </TrainerResumeAward>
              </>
            )}

            <ShowMoreButton
              onClick={() => {
                setShowMoreCareer(!showMoreCareer);
              }}
            >
              <span>{showMoreCareer ? "접기" : "더보기"}</span>
              <ShowMoreImg src={showMoreIcon} alt="더보기 이미지"></ShowMoreImg>
            </ShowMoreButton>
          </TrainerResume>
          <RegisterTitle>자격증/수상/교육</RegisterTitle>
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
          <RegisterTitle>학력사항</RegisterTitle>
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
        </ContentInnerBody>
        <Footer />
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
    </Wrap>
  );
}
