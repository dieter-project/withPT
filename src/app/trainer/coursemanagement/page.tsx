"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Container, ContentBody } from "@/styles/TrainerLayout";
import { Button, IconButton } from "@/styles/TrainerButton";
import ContentHeader from "@/components/TrainerPageTitle";
import Footer from "@/components/TrainerFooter";
import { startOfWeek, addDays, format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import arrowCircleUnderGray from "../../../../public/Trainer/icons/arrowCircleUnderGray.png";
import purplePlusIcon from "../../../../public/Trainer/icons/plusIconWhite.png";
import purpleCheckIcon from "../../../../public/Trainer/icons/checkIconPurple.png";
import purpleExcalmiIcon from "../../../../public/Trainer/icons/exclamationPurple.png";
import redMinusIcon from "../../../../public/Trainer/icons/minusIconRed.png";
import ModalCloseXButtonImg from "../../../../public/Trainer/Modal/close-line.png";
import Calendar from "../coursemanagement/calendar/page";

const MainTopContent = styled.div`
  background-color: white;
  padding: 0 1rem;
`;

const ManageCourseWrap = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--purple50);
`;

const ManageTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ManageTitle = styled.button`
  display: inline-block;
  color: black;
  font-size: var(--font-l);
  font-weight: var(--font-semibold);
  margin-right: 0.2rem;
`;

const ButtonIcon = styled(Image)`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.2rem;
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

const CenterList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  color: var(--black);
  font-size: var(--font-l);
  border: none;
  border-radius: 0.5rem;
  text-align: left;
  padding: 0 0.8rem;
  margin-bottom: 0.75rem;
`;

const CourseTime = styled.div`
  display: inline-block;
  width: 4rem;
  text-align: center;
  border-right: 1px solid var(--border-gray);
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

const ButtonRegionWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ButtonInnerRegion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PickedCenterButton = styled.button`
  font-weight: bold;
`;

const ArrowCircleUnderGray = styled(Image)`
  display: inline-block;
  width: 1rem;
  line-height: 1rem;
  margin-left: 0.5rem;
`;

const ColorContentBody = styled(ContentBody)`
  padding: 5rem 0rem 3.2rem 0rem;
`;

const CourseListRightWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const dayList = [
  "2023-03-10",
  "2023-03-21",
  "2023-04-02",
  "2023-11-24",
  "2023-04-27",
];

export default function ManageMain() {
  const title = "수업관리";
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

  return (
    <Container>
      <ContentHeader title={title} variant="center"></ContentHeader>
      <ColorContentBody>
        <MainTopContent>
          <ButtonRegionWrap>
            {" "}
            <Button
              variant="primary"
              height="3.5rem"
              style={{ marginRight: "1rem" }}
            >
              <ButtonInnerRegion>
                <Link href="/trainer/membermanagement/member/regist">
                  <ButtonIcon src={purplePlusIcon} alt="플러스 아이콘" />
                  <span>신규수업 등록</span>
                </Link>
              </ButtonInnerRegion>
            </Button>{" "}
            <Button variant="outlinepurple" height="3.5rem">
              <ButtonInnerRegion>
                <Link href="/trainer/membermanagement/member/regist">
                  <ButtonIcon src={purpleExcalmiIcon} alt="플러스 아이콘" />
                  <span>대기 수업</span> <span>5</span>
                </Link>
              </ButtonInnerRegion>
            </Button>
          </ButtonRegionWrap>

          <PickedCenterButton onClick={toggleModal}>
            <span>{pickedCenter}</span>
            <ArrowCircleUnderGray
              src={arrowCircleUnderGray}
              alt="리스트 선택하는 아래 화살표 아이콘"
            />
          </PickedCenterButton>
          <Calendar onChange={onChange} value={value} />
        </MainTopContent>
        <ManageCourseWrap>
          <ManageTitleWrap>
            <div>
              <ManageTitle>11월 15일 (수)</ManageTitle>
            </div>
          </ManageTitleWrap>
          <ul>
            <Link href="/trainer/membermanagement/member">
              <CenterList>
                <CourseTime>10:00</CourseTime>
                <CourseListRightWrap>
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
                </CourseListRightWrap>
              </CenterList>
            </Link>
            <Link href="/trainer/membermanagement/member">
              <CenterList>
                <CourseTime>10:00</CourseTime>
                <CourseListRightWrap>
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
                </CourseListRightWrap>
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
          </ul>
        </ManageCourseWrap>
      </ColorContentBody>
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
                {centerList.map((center, i) => {
                  return (
                    <CenterChooseButton
                      key={i}
                      onClick={() => modalClose(center)}
                    >
                      <CenterChooseContent>
                        <span>{center}</span>
                        <Image src={purpleCheckIcon} alt="보라색 체크 아이콘" />
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
    </Container>
  );
}
