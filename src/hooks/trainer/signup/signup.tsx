import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlaceInfo } from "@/model/trainer/signUp";
import { openModal, closeModal } from "@/redux/reducers/trainer/modalSlice";

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

export const Signup3 = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [selectedSchedules, setSelectedSchedules] = useState<
    Array<{ days: string[]; startTime: string; endTime: string }>
  >([]);
  const [overlapError, setOverlapError] = useState<boolean>(false);
  const [allSchedules, setAllSchedules] = useState<
    Array<{ days: string[]; startTime: string; endTime: string }>
  >([]);

  return {
    selectedDays,
    setSelectedDays,
    selectedStartTime,
    setSelectedStartTime,
    selectedEndTime,
    setSelectedEndTime,
    selectedSchedules,
    setSelectedSchedules,
    overlapError,
    setOverlapError,
    allSchedules,
    setAllSchedules,
  };
};
