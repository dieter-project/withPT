import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
// import { MdOutlineGpsFixed } from "react-icons/md";
// import { Layout, SearchInput, Button, DetailList } from "../components";
import KakaoMap from "./Kakaomap/page";

const StoreList = () => {
  const [searchKeywords, setSearchKeywords] = useState<string | null>("");
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const [currentLocationToggle, setCurrentLocationToggle] = useState(false);
  const [toggleId, setToggleId] = useState(0);
  const [nearbyToggle, setNearbyToggle] = useState(false);

  const searchEvent = e => {
    setSearchKeywords(e.target.value);
  };

  // * 사용자 위치정보 허용했을 경우 해당 위도/경도 설정
  const approve = position =>
    setCoords({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });

  // * 사용자 위치정보 거절하거나 오류일 경우 을지로 3가 위도/경도 설정
  const reject = () =>
    setCoords({ lat: 37.566498652285, lon: 126.99209745028 });

  // * 현재 위치 버튼 클릭 시 currentLocationToggle true/false 값 변경
  const onCurrentLocationClickHandler = () =>
    setCurrentLocationToggle(!currentLocationToggle);

  // * 페이지가 처음 마운트될 때 위치 정보 동의
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(approve, reject);
  }, []);

  // * currentLocationToggle true/false값에 따라 현재 위치 GPS 추적 여부 변경
  useEffect(() => {
    if (currentLocationToggle) {
      // 장치 위치가 변경될 때마다 위치 추적
      const watchId = navigator.geolocation.watchPosition(approve, reject);
      setToggleId(watchId);
    } else {
      // watchPosition 실행 중지
      navigator.geolocation.clearWatch(toggleId);
    }
  }, [currentLocationToggle]);

  const isShowListHandler = () => setNearbyToggle(!nearbyToggle);

  return (
    <div>
      <div>
        <input
          placeholder={"헬스장을 검색할 지역을 입력해보세요!"}
          onChange={searchEvent}
        />
        <KakaoMap coords={coords} searchKeywords={searchKeywords} />
        <button type="button" onClick={onCurrentLocationClickHandler}>
          {/* <MdOutlineGpsFixed /> */}
          현재위치버튼
        </button>
      </div>
    </div>
  );
};

export default StoreList;
