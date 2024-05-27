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

import { Button } from "@/styles/TrainerButton";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { useAppSelector } from "@/redux/hooks";
import Storelist from "./storelist/page";

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

export default function step2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const [workingCenter, setWorkingCenter] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const title = "센터 등록";
  const states = useAppSelector(state => state.trainerSignup);

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

  //조건에 따라 버튼 비활성화 시키기
  useEffect(() => {
    const isAnyFieldEmpty = () => {
      if (workingCenter && workingCenter !== null) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    isAnyFieldEmpty();
  }, [workingCenter]);

  console.log("workingCenter", workingCenter ? workingCenter : "exmaplenno");

  const handleNext = () => {
    dispatch(
      signupActions.saveSignupState({
        gyms: [
          {
            name: workingCenter.content,
            address: workingCenter.roadAddress,
            latitude: Number(workingCenter.position.lat),
            longitude: Number(workingCenter.position.lng),
          },
        ],
      }),
    );
    console.log("states: ", states);
  };

  return (
    <Container>
      <ContentHeader title={title}></ContentHeader>
      <ContentBody>
        <JoinStep active={"2"} />
        <div>
          <SignUpTitleWrap>
            <SignupStepInfo>센터를 등록해주세요.</SignupStepInfo>
            <SignupStepInfoSub>
              재직 중인 센터를 등록해주세요.
            </SignupStepInfoSub>
          </SignUpTitleWrap>
        </div>
        {!workingCenter && (
          <RegisterCenterButton onClick={toggleModal}>
            <RegisterIcon
              src={registerIcon}
              alt="센터 등록하기 아이콘"
              width="30"
              height="30"
            />
            <div>등록할 센터를 검색해 주세요.</div>
          </RegisterCenterButton>
        )}
        {workingCenter && workingCenter !== null && (
          <ul>
            <CenterSearchList>
              <div>{workingCenter.content}</div>
            </CenterSearchList>
          </ul>
        )}
        {workingCenter && (
          <CenterRegisterButton onClick={toggleModal}>+</CenterRegisterButton>
        )}
        <ButtonAreaFixed>
          <Link href="/trainer/signup/step3">
            <Button
              variant={isDisabled ? "ghost" : "primary"}
              onClick={handleNext}
              disabled={isDisabled}
            >
              다음
            </Button>
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
              <Storelist
                setIsModalOpen={setIsModalOpen}
                setWorkingCenter={setWorkingCenter}
              />
            </ModalBody>
          </ModalWrap>
        </Modal>
      )}
    </Container>
  );
}
