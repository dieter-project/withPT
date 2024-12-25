"use client";
import React, { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { TrainerLayout } from "@/app/trainer/layout";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import JoinStep from "@/components/trainer/molecules/SignupStep/SignUpStep";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import { EnterCenterSchedule } from "@/components/trainer/molecules/Modal/enterCenterSchedule/EnterCenterSchedule";
import { GymsInfo, WorkSchedule } from "@/model/trainer/signUp";
import { RootState } from "@/redux/store";
import { useModal } from "@/context/trainer/ModalContext";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { CenterScheduleList } from "@/components/trainer/organisms/centerScheduleList/CenterScheduleList";

export default function Step3() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { openModal, closeModal } = useModal();

  const STEP_CONFIG = {
    STEP: "3",
    TITLE: "센터일정 등록",
    TOP_TITLE: "센터일정을 등록해 주세요.",
    UNDER_TITLE: "센터별로 수업이 가능한 시간을 등록해주세요.",
    NEXT_STEP_URL: "/trainer/signup/step4",
  } as const;

  const BUTTON_CONFIG = {
    CENTER_ITEM: {
      isIconVisible: false,
      eventButtonType: "purple" as const,
      height: "3.5rem",
      justifyContent: "space-between",
      rightContent: "checkRegister" as const,
      color: "var(--black)",
    },
  } as const;

  // Redux 상태
  const saveStates = useSelector(
    (state: RootState) => state.trainerSignup.gyms,
  );
  const [recordGyms, setRecordGyms] = useState<GymsInfo[]>(saveStates);
  const [centerSchedules, setCenterSchedules] = useState<{
    [key: string]: WorkSchedule[];
  }>({});

  // 센터 스케줄 모달 오픈
  const handleOpenScheduleModal = useCallback(
    (centerName: string, index: number) => {
      openModal({
        type: "default",
        title: centerName,
        content: (
          <EnterCenterSchedule
            existingSchedules={centerSchedules[centerName] || []}
            onSubmit={schedules => {
              setCenterSchedules(prev => ({
                ...prev,
                [centerName]: schedules,
              }));
              closeModal();
            }}
          />
        ),
      });
    },
    [openModal, centerSchedules],
  );
  // 다음 단계로 이동
  const handleNextStep = useCallback(() => {
    const isAllSchedulesSet = recordGyms.every(
      gym => centerSchedules[gym.name] && centerSchedules[gym.name].length > 0,
    );

    if (!isAllSchedulesSet) {
      openModal({
        type: "alert",
        message: "모든 센터의 일정을 등록해주세요.",
      });
      return;
    }

    dispatch(
      signupActions.saveSignupState({
        gyms: recordGyms.map(gym => ({
          name: gym.name,
          address: gym.address_name,
          latitude: Number(gym.x),
          longitude: Number(gym.y),
          workSchedules: centerSchedules[gym.name],
        })),
      }),
    );

    router.push(STEP_CONFIG.NEXT_STEP_URL);
  }, [recordGyms, centerSchedules, dispatch, router]);

  const isAllCentersScheduled = useMemo(() => {
    return recordGyms.every(
      gym => centerSchedules[gym.name] && centerSchedules[gym.name].length > 0,
    );
  }, [recordGyms, centerSchedules]);

  return (
    <TrainerLayout
      title={STEP_CONFIG.TITLE}
      hasHeader={true}
      hasFooter={false}
      variant="withBack"
    >
      <JoinStep active={STEP_CONFIG.STEP} />
      <TitleWrapper
        topTitle={STEP_CONFIG.TOP_TITLE}
        underTitle={STEP_CONFIG.UNDER_TITLE}
      />

      {recordGyms?.map((gym, index) => (
        <div key={`${gym.name}-${index}`}>
          <EventButton
            event={() => handleOpenScheduleModal(gym.name, index)}
            content={gym.name}
            {...BUTTON_CONFIG.CENTER_ITEM}
            rightContent={
              centerSchedules[gym.name]?.length > 0 ? "done" : "checkRegister"
            }
          />
          {centerSchedules[gym.name]?.length > 0 && (
            <CenterScheduleList schedules={centerSchedules[gym.name]} />
          )}
        </div>
      ))}

      <ButtonAreaFixed
        isButtonDisabled={!isAllCentersScheduled}
        onClick={handleNextStep}
        label="다음"
      />
    </TrainerLayout>
  );
}
