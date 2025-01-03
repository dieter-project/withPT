"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Button, IconButton } from "@/styles/Trainer/TrainerButton";
import { ListButton } from "@/styles/Trainer/TrainerButton";
import {
  SearchBarWrap,
  SearchIcon,
  SearchBarInput,
} from "@/styles/Trainer/TrainerSearchBar";
import { ButtonAreaFixed } from "@/components/trainer/molecules/ButtonAreaFixed/ButtonAreaFixed";
import { startOfWeek, addDays, format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import searchIcon from "../../../../../public/Trainer/icons/searchLightGray.png";
import ContentHeader from "@/components/trainer/molecules/Header/Header";
import purplePlusIcon from "../../../../../public/Trainer/icons/plusIconWhite.png";
import purpleCheckIcon from "../../../../../public/Trainer/icons/checkIconPurple.png";
import purpleExcalmiIcon from "../../../../../public/Trainer/icons/exclamationPurple.png";
import redMinusIcon from "../../../../../public/Trainer/icons/minusIconRed.png";
import "react-calendar/dist/Calendar.css";
import arrowCircleUnderGray from "../../../../../public/Trainer/icons/arrowCircleUnderGray.png";
import modalCloseXButtonImg from "../../../../../public/Trainer/Modal/close-line.png";
import toggleOnButtonImg from "../../../../../public/Trainer/icons/toggleOffButton.png";
import toggleOffButtonImg from "../../../../../public/Trainer/icons/toggleOnButton.png";
import Calendar from "../calendar/page";
import { NoIconInput } from "@/styles/TrainerInput";
import { DeleteInputXbutton } from "@/styles/TrainerInput";

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
  height: 13rem;
  overflow-y: scroll;
  margin-top: 0.5rem;
`;

const SearchItemWrap = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border-gray400);
  border-radius: 0.5rem;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
`;

const SearchItemName = styled.div`
  display: inline-block;
  margin-right: 0.4rem;
`;
const SearchItemInfo = styled.div`
  display: inline-block;
  width: 5rem;
  background-color: var(--purple100);
  color: var(--font-secondary);
  border-radius: 0.5rem;
  text-align: center;
`;
const SearchItemNeedInfo = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
`;

const PickedCenterButton = styled.button`
  font-size: var(--font-l);
  font-weight: bold;
`;

const ArrowCircleUnderGray = styled(Image)`
  display: inline-block;
  width: 2rem;
  line-height: 2rem;
  margin-left: 0.5rem;
`;

const ContentTitle = styled.h4`
  font-weight: 500;
`;

const SearchWrap = styled.div`
  position: relative;
`;

const ContentRegion = styled.div`
  margin: 1rem 0;
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

  const centerList = [
    "전체 센터 수업",
    "으라라차차 피트니스 센터",
    "득근득근 피트니스 센터",
    "해피닥터 피트니스 24시 연중무휴",
  ];

  const [pickedCenter, setPickedCenter] = useState(
    centerList ? centerList[0] : null,
  );
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
  const modalClose = (centerName: string) => {
    setIsModalOpen(false);
    setPickedCenter(centerName);
  };

  const title = "신규 지점 등록";

  const [searchText, setSearchText] = useState(null);

  return (
    <MainContainer>
      <ContentHeader title={title}></ContentHeader>
      <MainContentWrap>
        <PickedCenterButton onClick={toggleModal}>
          <span>{pickedCenter}</span>
          <ArrowCircleUnderGray
            src={arrowCircleUnderGray}
            alt="리스트 선택하는 아래 화살표 아이콘"
          />
        </PickedCenterButton>
        <ContentRegion>
          <ContentTitle>회원검색</ContentTitle>
          <SearchWrap>
            <NoIconInput
              name="name"
              type="text"
              required
              value={searchText || ""}
              onChange={e => setSearchText(e.target.value)}
              // onChange={handleInputChange}
            ></NoIconInput>
            <DeleteInputXbutton
              onClick={() => {
                setSearchText(null);
              }}
            ></DeleteInputXbutton>
          </SearchWrap>
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
        </ContentRegion>
        <ContentRegion>
          <ToggleContentButton onClick={toggleDateTap}>
            <ToggleContentInnerWrap>
              <ContentTitle>날짜 선택</ContentTitle>
              {isDateTapOpen && (
                <Image src={toggleOnButtonImg} alt="토글 열림 아이콘" />
              )}
              {!isDateTapOpen && (
                <Image src={toggleOffButtonImg} alt="토글 닫힘 아이콘" />
              )}
            </ToggleContentInnerWrap>
          </ToggleContentButton>
          {isDateTapOpen && <Calendar onChange={onChange} value={value} />}
        </ContentRegion>

        <ContentRegion>
          <ToggleContentButton onClick={toggleTimeTap}>
            <ToggleContentInnerWrap>
              <ContentTitle>시간 선택</ContentTitle>
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
        </ContentRegion>
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
                {centerList.map((center, i) => {
                  return (
                    <CenterChooseButton
                      key={i}
                      onClick={() => modalClose(center)}
                    >
                      <CenterChooseContent>
                        <span>{center}</span>
                        {pickedCenter === center && (
                          <Image
                            src={purpleCheckIcon}
                            alt="보라색 체크 아이콘"
                          />
                        )}
                      </CenterChooseContent>
                    </CenterChooseButton>
                  );
                })}
              </ModalContent>
            </ModalBody>
          </ModalWrap>
          <ModalDimmed></ModalDimmed>
        </Modal>
      )}
    </MainContainer>
  );
}
