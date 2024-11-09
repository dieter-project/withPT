import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlaceInfo } from "@/model/trainer/signUp";
import { openModal, closeModal } from "@/redux/reducers/trainer/modalSlice";
import { useHandleCenterSchedule } from "@/hooks/trainer/modal/useEnterCenterSchedule";

export const Signup2 = () => {
  const dispatch = useDispatch();
  const [workingCenter, setWorkingCenter] = useState<PlaceInfo[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  //조건에 따라 버튼 비활성화 시키기
  useEffect(() => {
    const isAnyFieldEmpty = () => {
      if (workingCenter && workingCenter.length > 0) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    };
    isAnyFieldEmpty();
  }, [workingCenter]);

  //선택한 장소를 리스트에 보여주기
  const handlePlaceSelect = (place: PlaceInfo) => {
    if (!workingCenter || workingCenter.length === 0) {
      setWorkingCenter([place]);
    } else if (!workingCenter.some(p => p.id === place.id)) {
      setWorkingCenter([...workingCenter, place]);
    }
    dispatch(closeModal());
  };

  return {
    workingCenter,
    isButtonDisabled,
    setIsButtonDisabled,
    handlePlaceSelect,
  };
};
