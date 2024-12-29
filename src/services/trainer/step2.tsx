"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { PlaceInfo } from "@/model/trainer/signUp";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { useButtonDisable } from "@/hooks/trainer/common/useButtonDisable";
import { closeModal } from "@/redux/reducers/trainer/modalSlice";

export const signup2 = () => {
  const dispatch = useDispatch();
  const [workingCenter, setWorkingCenter] = useState<PlaceInfo[]>([]);

  const isButtonDisabled = useButtonDisable(
    workingCenter,
    data => data.length > 0,
  );

  // 장소 선택
  const handlePlaceSelect = (place: PlaceInfo) => {
    if (!workingCenter.some(center => center.id === place.id)) {
      setWorkingCenter(prev => [...prev, place]);
    }
    dispatch(closeModal());
  };

  // 장소 해제
  const handleRemoveCenter = (index: number) => {
    setWorkingCenter(prev => prev.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    dispatch(
      signupActions.saveSignupState({
        gyms: workingCenter.map(center => ({
          name: center.place_name,
          address: center.address_name,
          latitude: Number(center.x),
          longtitude: Number(center.y),
        })),
      }),
    );
  };

  return {
    workingCenter,
    isButtonDisabled,
    handlePlaceSelect,
    handleNext,
    handleRemoveCenter,
  };
};
