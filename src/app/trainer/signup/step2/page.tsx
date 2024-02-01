"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import JoinStep from "@/components/Trainer/TrSignUpStep";
import beforePage from "../../../../../public/icons/beforePage.png";
import searchIcon from "../../../../../public/searchLight.png";
import registerIcon from "../../../../../public/Trainer/plusCircleIcon.png";
import ModalCloseXButtonImg from "../../../../../public/Trainer/Modal/close-line.png";

import { Button } from "@/styles/TrainerButton";
import axios from "axios";
import LandingPage from "./views/LandingPage/LandingPage";
import { useDispatch } from "react-redux";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { useAppSelector } from "@/redux/hooks";

interface TrInfo {
  // name: string;
  // birth: Trbirth | string;
  // sex: string;
}

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
  color: var(--black);
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
  line-height: 3.5rem;
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
  height: 100vh;
  background-color: white;
  padding: 20px;
  border-radius: 1rem 1rem 0 0;
  transition: 0.3s;
`;

const ModalCloseXButton = styled(Image)`
  position: absolute;
  top: 1%;
  right: 2%;
`;

const SearchBar = styled.input`
  border: none;
  color: black;
  width: 100%;
  padding: 0.81rem;
  background-color: var(--purple50);

  &::placeholder {
    color: gray;
  }
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
  font-weight: 700;
`;

const ModalBody = styled.div``;

const ModalContent = styled.div`
  margin: 3vh 0 2vh 0;
`;

const SearchListTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.19rem;
`;

const SearchListTitle = styled.div`
  font-size: var(--font-xs);
  color: var(--font-gray500);
`;

const SearchDeleteButton = styled.button`
  color: var(--font-gray500);
  padding: 0.31rem 0.37rem;
  font-size: var(--font-xxs);
  border-radius: 0.25rem;
  background-color: #f3f3f3;
`;

const RegisterCenterButton = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 1.75rem 0;
  border-radius: 0.5rem;
  background-color: var(--purple50);
  text-align: center;
  font-weight: 500;
  color: var(--font-secondary);
  font-size: var(--font-m);
`;

const RegisterIcon = styled(Image)`
  display: block;
  margin: 0 auto;
  margin-bottom: 0.44rem;
`;

const CenterSearchList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  background-color: var(--purple50);
  padding: 0.5rem 0.62rem;
  margin-bottom: 0.75rem;
`;

const CenterRegisterButton = styled.button`
  border: 1px solid var(--font-gray400);
  border-radius: 0.5rem;
  width: 100%;
  font-weight: 400;
  font-size: 3.5vh;
`;

export default function step2() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState<TrInfo>({
    name: "",
    birth: {
      year: "",
      month: "",
      date: "",
    },
    sex: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);

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

  const handleNext = () => {
    dispatch(
      signupActions.saveSignupState({
        gyms: [
          {
            name: "헬스장",
            address: "주소",
            latitude: "헬스장",
            longitude: inputData.gyms[0].longitude,
          },
        ],
      }),
    );
    router.push(`/trainer/signup/step2`);
    console.log("states: ", states);
  };

  return (
    <Wrap>
      <ContentHeader>
        <ButtonHistoryBack type="button">
          <Image src={beforePage} alt="이전 페이지 이미지" />
        </ButtonHistoryBack>
        <SignupTitle>회원가입</SignupTitle>
      </ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          <JoinStep active={"2"} />
          <div style={{ marginBottom: "1.5rem" }}>
            <SignupStepInfo>센터 정보를 등록해주세요.</SignupStepInfo>
            <SignupStepInfoSub>
              재직 중인 센터를 등록해 주세요.
            </SignupStepInfoSub>
          </div>
          <RegisterCenterButton onClick={toggleModal}>
            <RegisterIcon
              src={registerIcon}
              alt="센터 등록하기 아이콘"
              width="30"
              height="30"
            />
            <div>등록할 센터를 검색해 주세요.</div>
          </RegisterCenterButton>
          <ul>
            <CenterSearchList>
              <div>아자아자 피트니스 센터</div>
            </CenterSearchList>
          </ul>
          <CenterRegisterButton onClick={toggleModal}>+</CenterRegisterButton>
          <ButtonAreaFixed>
            <Link href="/trainer/signup/step3">
              <Button variant="primary">다음</Button>
            </Link>
          </ButtonAreaFixed>
        </ContentInnerBody>
      </ContentBody>
      {isModalOpen && (
        <Modal>
          <ModalWrap style={{ bottom: showModalContent ? "0" : "-100%" }}>
            <ModalHeader>센터 검색</ModalHeader>
            <ModalCloseXButton
              src={ModalCloseXButtonImg}
              alt="모달을 닫는 버튼"
              onClick={() => setIsModalOpen(false)}
            />
            <ModalBody>
              <ModalContent>
                <SearchBar
                  type="text"
                  name="센터 검색바"
                  placeholder="검색"
                ></SearchBar>
                {/* <button onClick={searchPlaces}>검색</button> */}

                <SearchListTitleWrap>
                  <SearchListTitle>최근 검색기록</SearchListTitle>
                  <SearchDeleteButton>전체삭제</SearchDeleteButton>
                </SearchListTitleWrap>
              </ModalContent>
            </ModalBody>
            {/* <ModalMessage>최근 검색한 기록이 없습니다.</ModalMessage> */}
          </ModalWrap>
          <ModalDimmed></ModalDimmed>
        </Modal>
      )}
    </Wrap>
  );
}
