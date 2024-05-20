"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {
  Container,
  ContentBody,
  ButtonAreaFixed,
} from "@/styles/TrainerLayout";
import {
  FormTitle,
  SignUpInputContainer,
  SignUpTitleWrap,
  SignupStepInfo,
  SignupStepInfoSub,
  SignupInputInnerContainer,
} from "@/styles/SignupForm";
import ContentHeader from "@/components/TrainerPageTitle";
import {
  SearchBarWrap,
  SearchIcon,
  SearchBarInput,
} from "@/styles/TrainerSearchBar";
import {
  Modal,
  ModalWrap,
  ModalCloseXButton,
  ModalDimmed,
  ModalHeader,
  ModalBody,
  ModalContent,
} from "@/styles/TrainerModal";
import JoinStep from "@/components/Trainer/TrSignUpStep";
import searchIcon from "../../../../../public/Trainer/icons/searchLightGray.png";
import registerIcon from "../../../../../public/Trainer/plusCircleIcon.png";
import ModalCloseXButtonImg from "../../../../../public/Trainer/Modal/close-line.png";
import deleteIcon from "../../../../../public/Trainer/icons/deleteIconGray.png";
import { Button } from "@/styles/TrainerButton";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { useAppSelector } from "@/redux/hooks";
import Storelist from "./storelist/page";

interface TrInfo {
  // name: string;
  // birth: Trbirth | string;
  // sex: string;
}

const ModalMessage = styled.div`
  margin-top: 2rem;
  color: black;
  text-align: center;
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
  width: 100%;
  border: 1px solid var(--font-gray400);
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: 3.5vh;
`;

const RecentSearchList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid var(--border-gray);
  font-size: var(--font-s);
`;

const DeleteIcon = styled(Image)``;

export default function step2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);

  const dispatch = useDispatch();
  const title = "센터 등록";
  const [inputData, setInputData] = useState<TrInfo>({
    name: "",
    birth: {
      year: "",
      month: "",
      date: "",
    },
    sex: "",
  });

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

  const centerLists = ["청담점", "잠실점", "고양점"];

  return (
    <Container>
      <ContentHeader title={title}></ContentHeader>
      <ContentBody>
        <JoinStep active={"2"} />
        <div>
          <SignUpTitleWrap>
            <SignupStepInfo>안녕하세요 회원님!</SignupStepInfo>
            <SignupStepInfoSub>
              아래 정보가 맞는지 확인해주세요.
            </SignupStepInfoSub>
          </SignUpTitleWrap>
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
                <SearchBarWrap>
                  <SearchIcon
                    src={searchIcon}
                    alt="검색 회색 돋보기 아이콘"
                  ></SearchIcon>
                  <SearchBarInput
                    type="text"
                    name="센터 검색바"
                    placeholder="검색"
                  ></SearchBarInput>
                </SearchBarWrap>
                {/* <ModalContent>
                <SearchBarWrap>
                  <SearchIcon
                    src={searchIcon}
                    alt="검색 회색 돋보기 아이콘"
                  ></SearchIcon>
                  <SearchBarInput
                    type="text"
                    name="센터 검색바"
                    placeholder="검색"
                  ></SearchBarInput>
                </SearchBarWrap>

                <SearchListTitleWrap>
                  <SearchListTitle>최근 검색기록</SearchListTitle>
                  <SearchDeleteButton>전체삭제</SearchDeleteButton>
                </SearchListTitleWrap>
                <ul>
                  {centerLists.map(centerList => (
                    <RecentSearchList>
                      <div>{centerList}</div>
                      <DeleteIcon
                        src={deleteIcon}
                        alt="검색 기록 삭제 아이콘"
                      ></DeleteIcon>
                    </RecentSearchList>
                  ))}
                </ul> */}
                {/* <ModalMessage>최근 검색한 기록이 없습니다.</ModalMessage> */}
                {/* </ModalContent> */}
              </ModalContent>
              <Storelist />
            </ModalBody>
          </ModalWrap>
          <ModalDimmed></ModalDimmed>
        </Modal>
      )}
    </Container>
  );
}
