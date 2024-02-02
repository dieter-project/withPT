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
import purplePlusIcon from "../../../../public/Trainer/icons/plusIconWhite.png";
import purpleCheckIcon from "../../../../public/Trainer/icons/checkIconPurple.png";
import purpleExcalmiIcon from "../../../../public/Trainer/icons/exclamationPurple.png";
import redMinusIcon from "../../../../public/Trainer/icons/minusIconRed.png";
import ModalCloseXButtonImg from "../../../../public/Trainer/Modal/close-line.png";
import Calendar from "../coursemanagement/calendar/page";

const MainContainer = styled.div`
  background-color: var(--purple100);
  min-height: 100vh;
  position: relative;
`;

const MainHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  line-height: 3.63rem;
  background-color: #ffffff;
  z-index: 100;
  text-align: center;
  font-weight: 600;
  font-size: var(--font-xl);
`;

const MainContentWrap = styled.div`
  padding-top: 3rem;
`;

const RegisNewMember = styled(Link)`
  display: block;
  width: 100%;
  line-height: 3.5rem;
  text-align: center;
  background-color: var(--primary);
  color: var(--white);
  font-size: var(--font-m);
  border: none;
  border-radius: 0.5rem;
`;

const ManageCourseWrap = styled.div`
  margin-top: 2.5rem;
  padding: 0 2rem;
`;

const ManageTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ManageTitle = styled.button`
  color: black;
  font-size: var(--font-m);
  margin-right: 0.2rem;
  display: inline-block;
`;

const ManageTitlesubTxt = styled.span`
  font-size: var(--font-m);
  color: var(--font-secondary);
`;

const ManageTitleDate = styled.span`
  font-size: 15px;
  color: black;
`;

const CenterNameItem = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--purple50);
  padding: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
`;

const CenterName = styled.div`
  font-weight: 600;
`;

const MemberNum = styled.div`
  font-weight: 400;
  position: absolute;
  right: 3%;
`;

const ButtonWrap = styled.div`
  display: flex;
  padding: 2rem 2rem 0 2rem;
  background-color: white;
`;

const ButtonIcon = styled(Image)`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
`;

const CalanderWrap = styled.div`
  padding: 1rem;
  background-color: var(--purple50);
`;

const ScheduleLink = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
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

const ScheduleWrap = styled.div``;

const ModalContentTit = styled.div`
  margin-right: 1rem;
`;

const ClassConfirmInfo = styled.div`
  text-align: center;
  margin: 0 auto;
  color: var(--primary);
`;

const PurpleCheckIcon = styled(Image)``;

const CenterList = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--purple50);
  color: var(--black);
  font-size: var(--font-l);
  border: none;
  border-radius: 0.5rem;
  text-align: left;
  padding: 0 0.8rem;
  margin-bottom: 0.75rem;
`;

const CourseTime = styled.div`
  width: 4rem;
  display: inline-block;
  text-align: center;
`;

const CourseMember = styled.div`
  width: 10rem;
  display: inline-block;
  text-align: center;
`;

const CourseMemberTopTxt = styled.div``;

const CourseMemberBottomTxt = styled.div``;

const CourseConfirmed = styled.div`
  width: 5rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--primary);
`;

const ConfirmedCheckIcon = styled(Image)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.3rem;
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

  return (
    <MainContainer>
      <MainHeader>일정 관리</MainHeader>
      <MainContentWrap>
        <ButtonWrap>
          <Link href="/trainer/membermanagement/member/regist">
            {" "}
            <Button variant="primary" height="3.5rem">
              <ButtonIcon src={purplePlusIcon} alt="플러스 아이콘" />
              신규 회원 등록
            </Button>
          </Link>
          <Link href="/trainer/membermanagement/member/regist">
            {" "}
            <Button variant="outlinepurple" height="3.5rem">
              <ButtonIcon src={purpleExcalmiIcon} alt="플러스 아이콘" /> 대기
              회원
            </Button>
          </Link>
        </ButtonWrap>
        <button onClick={toggleModal}>전체 센터 수업</button>
        <Calendar onChange={onChange} value={value} />
        <ManageCourseWrap>
          <ManageTitleWrap>
            <div>
              <ManageTitle>11월 15일 (수)</ManageTitle>
            </div>
          </ManageTitleWrap>

          <Link href="/trainer/membermanagement/member">
            <CenterList>
              <CourseTime>10:00</CourseTime>
              <CourseMember>
                <div>000 고객</div>
                <div>000 지점</div>
              </CourseMember>
              <CourseConfirmed>
                <ConfirmedCheckIcon
                  src={purpleCheckIcon}
                  alt="확정 아이콘"
                ></ConfirmedCheckIcon>
                <span>확정</span>
              </CourseConfirmed>
            </CenterList>
          </Link>
          <Link href="/trainer/membermanagement/member">
            <CenterList>
              <CourseTime>10:00</CourseTime>
              <CourseMember>
                <div>000 고객</div>
                <div>000 지점</div>
              </CourseMember>
              <CourseConfirmed>
                <ConfirmedCheckIcon
                  src={redMinusIcon}
                  alt="취소 아이콘"
                ></ConfirmedCheckIcon>
                <span>취소</span>
              </CourseConfirmed>
            </CenterList>
          </Link>
          <Link href="/trainer/membermanagement/member">
            <CenterList>
              <CourseTime>10:00</CourseTime>
              <CourseMember>
                <CourseMemberTopTxt>000 고객</CourseMemberTopTxt>
                <CourseMemberBottomTxt>000 지점</CourseMemberBottomTxt>
              </CourseMember>
              <CourseConfirmed>
                <ConfirmedCheckIcon
                  src={purpleCheckIcon}
                  alt="확정 아이콘"
                ></ConfirmedCheckIcon>
                <span>확정</span>
              </CourseConfirmed>
            </CenterList>
          </Link>
        </ManageCourseWrap>
      </MainContentWrap>
      <Footer />
      {isModalOpen && (
        <Modal>
          <ModalWrap style={{ bottom: showModalContent ? "-30%" : "-100%" }}>
            <ModalCloseXButton
              src={ModalCloseXButtonImg}
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
