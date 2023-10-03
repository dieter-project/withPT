"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

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
  background-color: green;
`;

const SignupTitle = styled.h4`
  line-height: 3rem;
  color: #222;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0;
`;

const ContentBody = styled.div`
  padding: 6.8rem 1.6rem 3.2rem 1.6rem;
`;

const ContentInnerBody = styled.div``;

const SignupStepInfo = styled.p`
  color: #222;
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: -0.04rem;
`;

const SignupFormWrap = styled.div`
  margin-bottom: 1rem;
`;

const FormTitle = styled.h4`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.2rem;
`;

const TrGenderLabel = styled.label`
  width: 100%;
  text-align: center;
  border: none;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  line-height: 2.3rem;
  background-color: var(--purple50);
  margin: 0 0.3rem;
`;

const TrGenderRadio = styled.input`
  appearance: none;
`;

const SignupOrderWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SignupOrderCurrent = styled.span`
  background-color: var(--primary);
  color: var(--white);
  margin-bottom: "0.2rem";
  margin-right: 0.3rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

const SignupOrder = styled.span`
  background-color: var(--purple100);
  color: var(--purple200);
  margin-right: 0.3rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

const TrRegisItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
`;

const SignupButton = styled.button`
  border: none;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  line-height: 2.3rem;
  background-color: var(--purple50);
  font-size: 1rem;
  width: 100%;
  margin: 0 0.3rem;
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
  background-color: blue;
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
  width: 100%;
`;

const ModalContentTit = styled.h3`
  padding-right: 1rem;
`;

export default function step2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedEndTime, setSelectedEndTime] = useState("");

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

  const handleConfirm = () => {
    setSelectedDays(selectedDays);
    toggleModal();
  };

  return (
    <Wrap>
      <ContentHeader>
        <ButtonHistoryBack type="button"></ButtonHistoryBack>
        <SignupTitle>회원가입</SignupTitle>
      </ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          <SignupOrderWrap>
            <SignupOrder>1</SignupOrder>
            <SignupOrderCurrent>2</SignupOrderCurrent>
            <SignupOrder>3</SignupOrder>
          </SignupOrderWrap>
          <div style={{ marginBottom: "1rem" }}>
            <SignupStepInfo>센터 정보와 일정을 등록해주세요.</SignupStepInfo>
            <SignupStepInfo style={{ fontSize: "1rem", color: "#797979" }}>
              재직 중인 센터와 센터별 일정을 등록해 주세요.
            </SignupStepInfo>
          </div>
          <SignupFormWrap>
            <FormTitle>센터정보 등록</FormTitle>
            <TrRegisItemWrap>
              <SignupButton onClick={toggleModal}>
                <span>일정 등록하기</span>
                {selectedDays.map(day => (
                  <span key={day}>{day}</span>
                ))}
              </SignupButton>
            </TrRegisItemWrap>
          </SignupFormWrap>
          <SignupFormWrap>
            <FormTitle>일정 등록하기</FormTitle>

            <TrRegisItemWrap>
              <SignupButton></SignupButton>
            </TrRegisItemWrap>
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
                <div>
                  <button onClick={() => handleDayClick("월")}>월</button>
                  <button onClick={() => handleDayClick("화")}>화</button>
                  <button onClick={() => handleDayClick("수")}>수</button>
                  <button onClick={() => handleDayClick("목")}>목</button>
                  <button onClick={() => handleDayClick("금")}>금</button>
                  <button onClick={() => handleDayClick("토")}>토</button>
                  <button onClick={() => handleDayClick("일")}>일</button>
                </div>
              </ModalContent>
            </ModalBody>
            <ModalCloseButton onClick={handleConfirm}>닫기</ModalCloseButton>
            <span>모달 내용</span>
          </ModalWrap>
          <ModalDimmed></ModalDimmed>
        </Modal>
      )}
    </Wrap>
  );
}
