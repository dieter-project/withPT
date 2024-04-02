"use client";
import ContentHeader from "@/components/TrainerPageTitle";
import JoinStep from "@/components/Trainer/TrSignUpStep";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { Container, ContentBody } from "@/styles/TrainerLayout";
import { NoIconInput } from "@/styles/TrainerInput";
import Footer from "@/components/TrainerFooter";
import ModalCloseXButtonImg from "../../../../../../public/Trainer/Modal/close-line.png";
import showMoreIcon from "../../../../../../public/Trainer/Mypage/show-more-icon.png";
import searchIconImg from "../../../../../../public/searchLight.png";
import checkIconPurple from "../../../../../../public/Trainer/checkIconPurple.png";
import { api } from "@/utils/axios";
import { setCookie } from "@/utils/cookie";

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

export default function modifyCareer() {
  const title = "경력";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <ContentHeader title={title} variant="iconBack"></ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          <RegisterTitleWrap>
            <div>
              <div>
                <div>센터</div>{" "}
                <NoIconInput type="text" placeholder="잠실 지점"></NoIconInput>
              </div>
              <div>
                <div>직책</div> <NoIconInput type="text"></NoIconInput>{" "}
                <span>재직중</span>
              </div>
              <div>
                <div>년도</div>{" "}
                <select name="year">
                  <option value="2022">2022</option>
                  <option value="2022">2023</option>
                  <option value="2022">2024</option>
                </select>
                <div>
                  <select name="year">
                    <option value="2022">2022</option>
                    <option value="2022">2023</option>
                    <option value="2022">2024</option>
                  </select>
                  <input type="checkbox"></input>
                </div>
                <button>수정하기</button>
              </div>
            </div>
          </RegisterTitleWrap>
        </ContentInnerBody>
      </ContentBody>
    </Container>
  );
}
