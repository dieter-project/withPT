import React, { useState, useMemo, useCallback } from "react";
import { useModal } from "@/context/trainer/ModalContext";
import Wrapper from "@/components/trainer/molecules/Wrapper/Wrapper";
import { NoIconInput } from "@/components/trainer/atoms/Input/Input.styles";
import { Typography } from "@/components/trainer/atoms/Typography/TypoGraphy.styles";
import { Spacer } from "@/components/trainer/atoms/Spacing/Spacing.styles";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";
import { SearchCenter } from "@/components/trainer/molecules/Modal/searchCenter/SearchCenter";
import { useStep4 } from "@/hooks/trainer/registration/useStep4";

type Step = "careerInput" | "centerSearch";

export const CareerModalContent = () => {
  const [step, setStep] = useState<Step>("careerInput");
  const { openModal, closeModal } = useModal();

  const {
    workingCenter,
    isButtonDisabled,
    handlePlaceSelect,
    handleRemoveCenter,
    handleNext,
  } = useStep4();

  const handleModalPlaceSelect = useCallback(
    (place: PlaceInfo) => {
      handlePlaceSelect(place);
      closeModal();
    },
    [handlePlaceSelect, closeModal],
  );

  const searchCenterContent = useMemo(
    () => <SearchCenter handlePlaceSelect={handleModalPlaceSelect} />,
    [handleModalPlaceSelect],
  );

  const openCenterSearchModal = useCallback(() => {
    openModal({
      type: "default",
      title: "센터 검색",
      content: searchCenterContent,
    });
  }, [openModal, searchCenterContent]);

  return (
    <>
      {workingCenter.length > 0 ? (
        <>
          <ul>
            {workingCenter.map((center, index) => (
              <React.Fragment key={`${center.place_name}-${index}`}>
                <Wrapper type="flexStartCenter" marginBottom="1rem">
                  <div>
                    <Spacer mr={10}>
                      <Typography variant="title2">센터</Typography>
                    </Spacer>
                  </div>
                  {center.place_name}
                </Wrapper>
                <Wrapper type="flexStartCenter" marginBottom="1rem">
                  <div>
                    <Spacer mr={10}>
                      <Typography variant="title2">직책</Typography>
                    </Spacer>
                  </div>
                  <NoIconInput placeholder="직책을 입력해주세요" />
                </Wrapper>
                <Wrapper type="flexStartCenter" marginBottom="1rem">
                  <Spacer mr={10}>
                    <Typography variant="title2">기간</Typography>
                  </Spacer>
                  <NoIconInput placeholder="기간을 입력해주세요" />
                </Wrapper>
                <EventButton event={openCenterSearchModal} />
              </React.Fragment>
            ))}
          </ul>
        </>
      ) : (
        <>
          <Wrapper type="flexStartCenter" marginBottom="1rem">
            <div>
              <Spacer mr={10}>
                <Typography variant="title2">센터</Typography>
              </Spacer>
            </div>
            <EventButton
              padding="0 1rem"
              height="3rem"
              eventButtonType="purple"
              justifyContent="flex-start"
              event={openCenterSearchModal}
              content={
                <>
                  <Icon name="search" size={18} />
                  <Typography
                    variant="heading2"
                    color="var(--font-gray400)"
                    pd="0 0 0 0.2rem"
                  >
                    검색
                  </Typography>
                </>
              }
            />
          </Wrapper>
          <Wrapper type="flexStartCenter" marginBottom="1rem">
            <div>
              <Spacer mr={10}>
                <Typography variant="title2">직책</Typography>
              </Spacer>
            </div>
            <NoIconInput placeholder="직책을 입력해주세요" />
          </Wrapper>
          <Wrapper type="flexStartCenter" marginBottom="1rem">
            <Spacer mr={10}>
              <Typography variant="title2">기간</Typography>
            </Spacer>
            <NoIconInput placeholder="직책을 입력해주세요" />
          </Wrapper>
        </>
      )}
    </>
  );
};
