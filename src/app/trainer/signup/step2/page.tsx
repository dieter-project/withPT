"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, ContentBody } from "@/styles/TrainerLayout";
import { TitleWrapper } from "@/components/Trainer/Signup/TitleWrapper";
import ContentHeader from "@/components/TrainerPageTitle";
import JoinStep from "@/components/Trainer/TrSignUpStep";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { useAppSelector } from "@/redux/hooks";
import { TrainerModalLayout } from "@/components/Trainer/Modal/CommonLayout";
import { SearchCenter } from "@/components/Trainer/Modal/SearchCenter";
import { PurpleEventButton } from "@/components/Trainer/Button/PurpleEventButton";
import { openModal, closeModal } from "@/redux/reducers/trainer/modalSlice";
import { useModalEffect } from "@/hooks/trainer/modal/useModalEffect";
import { NextButtonArea } from "@/components/Trainer/Signup/NextButtonArea";
import { PlaceInfo } from "@/model/trainer/signUp";

export default function step2() {
  const title = "센터 등록";
  const dispatch = useDispatch();
  const states = useAppSelector(state => state.trainerSignup);
  const [workingCenter, setWorkingCenter] = useState<PlaceInfo[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const isModalOpen = useSelector(state => state.modal.isOpen);
  const showModalContent = useModalEffect(isModalOpen);

  console.log("workingCenter", workingCenter);

  const handlePlaceSelect = (place: PlaceInfo) => {
    if (!workingCenter || workingCenter.length === 0) {
      setWorkingCenter([place]);
    } else if (!workingCenter.some(p => p.id === place.id)) {
      setWorkingCenter([...workingCenter, place]);
    }
    dispatch(closeModal());
  };

  //조건에 따라 버튼 비활성화 시키기
  useEffect(() => {
    const isAnyFieldEmpty = () => {
      if (workingCenter && workingCenter !== null) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
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
            latitude: Number(workingCenter.position?.x),
            longitude: Number(workingCenter.position?.y),
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
        <TitleWrapper
          topTitle="센터를 등록해주세요."
          underTitle="재직 중인 센터를 등록해주세요."
        />
        {workingCenter.length > 0 ? (
          <ul>
            {workingCenter.map((center, index) => (
              <CenterSearchList key={index}>
                <div>{center.place_name}</div>
              </CenterSearchList>
            ))}
          </ul>
        ) : (
          <PurpleEventButton
            event={() => dispatch(openModal())}
            isIconVisible={true}
            message="등록할 센터를 검색해 주세요."
          />
        )}
        {workingCenter.length > 0 && (
          <CenterRegisterButton onClick={() => dispatch(openModal())}>
            +
          </CenterRegisterButton>
        )}
        <NextButtonArea
          isButtonDisabled={isButtonDisabled}
          onClick={handleNext}
          nextStepUrl="/trainer/signup/step3"
        />
      </ContentBody>
      {isModalOpen && (
        <TrainerModalLayout
          title={title}
          content={<SearchCenter handlePlaceSelect={handlePlaceSelect} />}
        />
      )}
    </Container>
  );
}

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
