import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import KakaoMap from "./Kakaomap/page";
import {
  SearchBarWrap,
  SearchIcon,
  SearchBarInput,
} from "@/styles/TrainerSearchBar";
import searchIcon from "../../../../../../public/Trainer/icons/searchLightGray.png";

interface Coordinates {
  lat: number;
  lon: number;
}

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
  phone: string;
  roadAddress: string;
}

const FindResultModal = styled.div`
  /* position: fixed;
  overflow-y: auto;
  width: 100%;
  height: 30%;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: yellow; */
`;

const FirstDiv = styled.div`
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: auto;
  position: absolute;
  right: 0;
  left: 0;
  height: 100%;
  bottom: 1px;
`;

const SecondDiv = styled.div`
  overflow: hidden;
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 0;
  left: 0;
  /* background: red; */
`;
const SecondRelative = styled.div`
  position: relative;
  z-index: 100;
  transform: translateY(776px);
`;

const Test = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 4000;
  border-radius: 18px 18px 0 0;
  background: #fff;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.08);
`;

const StoreList = ({ setIsModalOpen, setWorkingCenter }) => {
  const [searchKeywords, setSearchKeywords] = useState<string | null>("");
  const [coords, setCoords] = useState<Coordinates>({ lat: 0, lon: 0 });
  const [currentLocationToggle, setCurrentLocationToggle] = useState(false);
  const [toggleId, setToggleId] = useState(0);
  const [nearbyToggle, setNearbyToggle] = useState(false);
  const [markers, setMarkers] = useState<Marker[]>([]);

  const searchEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeywords(e.target.value);
  };

  // * 사용자 위치정보 허용했을 경우 해당 위도/경도 설정
  const approve = (position: GeolocationPosition) => {
    setCoords({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  };

  // * 사용자 위치정보 거절하거나 오류일 경우 을지로 3가 위도/경도 설정
  const reject = () =>
    setCoords({ lat: 37.566498652285, lon: 126.99209745028 });

  // * 페이지가 처음 마운트될 때 위치 정보 동의
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(approve, reject);
  }, []);

  // * 현재 위치 버튼 클릭 시 currentLocationToggle true/false 값 변경
  // const onCurrentLocationClickHandler = () =>
  //   setCurrentLocationToggle(!currentLocationToggle);

  // * currentLocationToggle true/false값에 따라 현재 위치 GPS 추적 여부 변경
  // useEffect(() => {
  //   if (currentLocationToggle) {
  //     // 장치 위치가 변경될 때마다 위치 추적
  //     const watchId = navigator.geolocation.watchPosition(approve, reject);
  //     setToggleId(watchId);
  //   } else {
  // watchPosition 실행 중지
  //     navigator.geolocation.clearWatch(toggleId);
  //   }
  // }, [currentLocationToggle]);

  const isShowListHandler = () => setNearbyToggle(!nearbyToggle);

  console.log("markers", markers);

  const HandleCenterClick = marker => {
    setWorkingCenter(marker);
    setIsModalOpen(false);
  };

  return (
    <div>
      <FirstDiv>
        <SearchBarWrap>
          <SearchIcon
            src={searchIcon}
            alt="검색 회색 돋보기 아이콘"
          ></SearchIcon>
          <SearchBarInput
            type="text"
            name="센터 검색바"
            placeholder="검색"
            onChange={searchEvent}
          ></SearchBarInput>
        </SearchBarWrap>
        {/* <FindResultModal>
          <div>
            {markers &&
              markers.map((marker, index) => (
                <div key={index} style={{ color: "#000" }}>
                  <div>{marker.content}</div>
                  <div>{marker.phone}</div>
                  <div>{marker.roadAddress}</div>
                </div>
              ))}
          </div>
        </FindResultModal> */}
        <SecondRelative>
          <Test>
            <ul>
              {markers &&
                markers.map((marker, index) => (
                  <li
                    key={index}
                    style={{ color: "#000" }}
                    onClick={() => {
                      setWorkingCenter(marker);
                      setIsModalOpen(false);
                    }}
                  >
                    <div>{marker.content}</div>
                    <div>{marker.phone}</div>
                    <div>{marker.roadAddress}</div>
                  </li>
                ))}
            </ul>
          </Test>
        </SecondRelative>
      </FirstDiv>
      <SecondDiv>
        <KakaoMap
          setWorkingCenter={setWorkingCenter}
          coords={coords}
          searchKeywords={searchKeywords}
          setMarkers={setMarkers}
          markers={markers}
        />
      </SecondDiv>
    </div>
  );
};

export default StoreList;
