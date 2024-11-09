import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/reducers/trainer/modalSlice";
import { PlaceInfo } from "@/model/trainer/signUp";

interface UseSignupStepProps {
  validate: () => boolean;
}

export const useSignupStep = ({ validate }: UseSignupStepProps) => {
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!validate());
  }, []);

  const handlePlaceSelect = (place: PlaceInfo) => {
    if (!workingCenter.some(p => p.id === place.id)) {
      setWorkingCenter(prev => [...prev, place]);
    }
    dispatch(closeModal());
  };

  return {
    workingCenter,
    isButtonDisabled,
    handlePlaceSelect,
    setWorkingCenter,
  };
};
