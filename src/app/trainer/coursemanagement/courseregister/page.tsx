"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Button, IconButton } from "@/styles/TrainerButton";
import { ListButton } from "@/styles/TrainerButton";
import Footer from "@/components/TrainerFooter";
import { startOfWeek, addDays, format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import ContentHeader from "@/components/TrainerPageTitle";
import purplePlusIcon from "../../../../../public/Trainer/icons/plusIconWhite.png";
import purpleCheckIcon from "../../../../../public/Trainer/icons/checkIconPurple.png";
import purpleExcalmiIcon from "../../../../../public/Trainer/icons/exclamationPurple.png";
import redMinusIcon from "../../../../../public/Trainer/icons/minusIconRed.png";
import modalCloseXButtonImg from "../../../../../public/Trainer/Modal/close-line.png";
import toggleOnButtonImg from "../../../../../public/Trainer/icons/toggleOffButton.png";
import toggleOffButtonImg from "../../../../../public/Trainer/icons/toggleOnButton.png";
import Calendar from "../calendar/page";

const MainContainer = styled.div`
  background-color: var(--white);
  min-height: 100vh;
  position: relative;
`;

const MainContentWrap = styled.div`
  padding: 5rem 1.5rem 6.2rem;
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

const ModalBody = styled.div``;

const ModalContent = styled.div`
  margin-bottom: 1rem;
  line-height: 2.5rem;
`;

const CenterChooseButton = styled.button`
  width: 100%;
  border-bottom: 1px solid gray;
`;

const CenterChooseContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

const ToggleContentButton = styled.button`
  display: block;
  width: 100%;
`;

const ToggleContentInnerWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-gray);
  padding: 0.5rem 0;
`;

const TimeChoiceWrap = styled.div`
  text-align: left;
`;

const TimeButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TimeButton = styled.button`
  width: 20%;
  line-height: 2.25rem;
  font-size: var(--font-m);
  border: 1px solid var(--border-darkgray);
  border-radius: 0.5rem;
  margin: 0.5rem 1rem 0.5rem 0;
`;

const SearchListWrap = styled.ul`
  height: 13.5rem;
  overflow-y: scroll;
`;

const SearchItemWrap = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid gray;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const SearchItemName = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;
const SearchItemInfo = styled.div`
  display: inline-block;
  width: 5rem;
`;
const SearchItemNeedInfo = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
`;

const dayList = [
  "2023-03-10",
  "2023-03-21",
  "2023-04-02",
  "2023-11-24",
  "2023-04-27",
];

export default function ManageMain() {
  const today = new Date();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const [value, onChange] = useState(new Date());
  const [pickedCenter, setPickedCenter] = useState(null);
  const [isDateTapOpen, setIsDateTapOpen] = useState(false);
  const [isTimeTapOpen, setIsTimeTapOpen] = useState(false);

  const toggleDateTap = () => {
    setIsDateTapOpen(!isDateTapOpen);
  };

  const toggleTimeTap = () => {
    setIsTimeTapOpen(!isTimeTapOpen);
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

  //모달 닫기 버튼
  const modalClose = () => {
    setIsModalOpen(false);
  };

  const title = "신규 지점 등록";

  return (
    <MainContainer>
      <ContentHeader title={title}></ContentHeader>
      <MainContentWrap>
        <button onClick={toggleModal}>전체 지점 일정</button>
        <div>회원 검색</div>
        <input type="text" placeholder="검색"></input>
        <SearchListWrap>
          <SearchItemWrap>
            <div>
              <SearchItemName>조은혜</SearchItemName>
              <SearchItemInfo>25세 / 여</SearchItemInfo>
            </div>
            <SearchItemNeedInfo>
              <Image
                src={purpleExcalmiIcon}
                alt="상세정보 입력 필요 알림 아이콘"
              />
              <div>상세정보 입력 필요</div>
            </SearchItemNeedInfo>
          </SearchItemWrap>
        </SearchListWrap>
        <ToggleContentButton onClick={toggleDateTap}>
          <ToggleContentInnerWrap>
            <div>날짜 선택</div>
            {isDateTapOpen && (
              <Image src={toggleOnButtonImg} alt="토글 열림 아이콘" />
            )}
            {!isDateTapOpen && (
              <Image src={toggleOffButtonImg} alt="토글 닫힘 아이콘" />
            )}
          </ToggleContentInnerWrap>
        </ToggleContentButton>
        {isDateTapOpen && <Calendar onChange={onChange} value={value} />}
        <ToggleContentButton onClick={toggleTimeTap}>
          <ToggleContentInnerWrap>
            <div>시간 선택</div>
            {isTimeTapOpen && (
              <Image src={toggleOnButtonImg} alt="토글 열림 아이콘" />
            )}
            {!isTimeTapOpen && (
              <Image src={toggleOffButtonImg} alt="토글 닫힘 아이콘" />
            )}
          </ToggleContentInnerWrap>
        </ToggleContentButton>
        {isTimeTapOpen && (
          <TimeChoiceWrap>
            <div>오전</div>
            <TimeButtonWrap>
              <TimeButton>10:00</TimeButton>
              <TimeButton>11:00</TimeButton>
              <TimeButton>12:00</TimeButton>
              <TimeButton>12:00</TimeButton>
              <TimeButton>12:00</TimeButton>
              <TimeButton>12:00</TimeButton>
            </TimeButtonWrap>
            <div>오후</div>
            <TimeButtonWrap>
              <TimeButton>10:00</TimeButton>
              <TimeButton>11:00</TimeButton>
              <TimeButton>12:00</TimeButton>
              <TimeButton>12:00</TimeButton>
              <TimeButton>12:00</TimeButton>
              <TimeButton>12:00</TimeButton>
            </TimeButtonWrap>
          </TimeChoiceWrap>
        )}
        <Button variant="primary">등록하기</Button>
      </MainContentWrap>
      {isModalOpen && (
        <Modal>
          <ModalWrap style={{ bottom: showModalContent ? "-30%" : "-100%" }}>
            <ModalCloseXButton
              src={modalCloseXButtonImg}
              alt="모달을 닫는 버튼"
              onClick={() => setIsModalOpen(false)}
            />
            <ModalBody>
              <ModalContent>
                <CenterChooseButton>
                  <CenterChooseContent>
                    <span>청담 지점</span>
                    <Image src={purpleCheckIcon} alt="보라색 체크 아이콘" />
                  </CenterChooseContent>
                </CenterChooseButton>
                <CenterChooseButton>
                  <CenterChooseContent>
                    <span>청담 지점</span>
                    <Image src={purpleCheckIcon} alt="보라색 체크 아이콘" />
                  </CenterChooseContent>
                </CenterChooseButton>
                <CenterChooseButton>
                  <CenterChooseContent>
                    <span>청담 지점</span>
                    <Image src={purpleCheckIcon} alt="보라색 체크 아이콘" />
                  </CenterChooseContent>
                </CenterChooseButton>
                <CenterChooseButton>
                  <CenterChooseContent>
                    <span>청담 지점</span>
                    <Image src={purpleCheckIcon} alt="보라색 체크 아이콘" />
                  </CenterChooseContent>
                </CenterChooseButton>
                <CenterChooseButton>
                  <CenterChooseContent>
                    <span>청담 지점</span>
                    <Image src={purpleCheckIcon} alt="보라색 체크 아이콘" />
                  </CenterChooseContent>
                </CenterChooseButton>
              </ModalContent>
            </ModalBody>
          </ModalWrap>
          <ModalDimmed></ModalDimmed>
        </Modal>
      )}
    </MainContainer>
  );
}
