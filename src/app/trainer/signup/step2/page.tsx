"use client";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, ContentBody } from "@/styles/TrainerLayout";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import ContentHeader from "@/components/TrainerPageTitle";
import JoinStep from "@/components/trainer/TrSignUpStep";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { useAppSelector } from "@/redux/hooks";
import { SearchModal } from "@/components/trainer/modal/Modal";
import { SearchCenter } from "@/components/trainer/modal/searchCenter/SearchCenter";
import { EventButton } from "@/components/trainer/button/EventButton";
import { openModal, closeModal } from "@/redux/reducers/trainer/modalSlice";
import { Signup2 } from "@/hooks/trainer/signup/signup";

export default function step2() {
  const title = "센터 등록";
  const dispatch = useDispatch();
  const states = useAppSelector(state => state.trainerSignup);
  const isModalOpen = useSelector(state => state.modal.isOpen);
  const { workingCenter, isButtonDisabled, handlePlaceSelect } = Signup2();

  console.log("workingCenter", workingCenter);

  const handleNext = () => {
    dispatch(
      signupActions.saveSignupState({
        gyms: workingCenter.map(center => ({
          name: center.content,
          address: center.roadAddress,
          latitude: Number(center.position?.x),
          longitude: Number(center.position?.y),
        })),
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
              <EventButton
                key={index}
                hasXButton={true}
                // xButtonEvent={() => dispatch(closeModal())}
                isIconVisible={false}
                event={() => dispatch(openModal())}
                eventButtonType="purple"
                height="3.5rem"
                justifyContent="space-between"
                content={center.place_name}
                color="var(--black)"
              ></EventButton>
            ))}
          </ul>
        ) : (
          <EventButton
            event={() => dispatch(openModal())}
            isIconVisible={true}
            iconType="plusCircleMono"
            content="등록할 센터를 검색해 주세요."
            eventButtonType="purple"
            height="7rem"
            justifyContent="center"
            color="var(--font-secondary)"
          />
        )}

        {workingCenter.length > 0 && (
          <EventButton
            event={() => dispatch(openModal())}
            isIconVisible={true}
            iconType="plusGray"
            eventButtonType="gray"
            height="3.5rem"
            justifyContent="center"
          />
        )}
        <ButtonAreaFixed
          isButtonDisabled={isButtonDisabled}
          onClick={handleNext}
          nextStepUrl="/trainer/signup/step3"
          label="다음"
        />
      </ContentBody>
      {isModalOpen && (
        <SearchModal
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
