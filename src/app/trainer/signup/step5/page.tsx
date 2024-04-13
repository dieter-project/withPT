/*global kakao*/
"use client";
import React, { useEffect, useState } from "react";

const KakaoMap = () => {
  const [map, setMap] = useState(null); // map을 state로 변경
  const [searchResults, setSearchResults] = useState([]); // 헬스장 검색 결과를 담을 state
  const [searchKeyword, setSearchKeyword] = useState(""); // 사용자가 입력한 검색어를 담을 state

  useEffect(() => {
    if (window.kakao) {
      window.kakao.maps.load(() => {
        // id가 'map'인 요소에 지도를 생성
        const mapContainer = document.getElementById("map");
        const mapOption = {
          // 해당 좌표는 서울 시청을 중심으로 함
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          // 줌 레벨 3으로 설정
          level: 3,
        };
        const newMap = new window.kakao.maps.Map(mapContainer, mapOption);
        setMap(newMap); // map을 state에 저장
      });
    }
  }, []);

  // 2) 검색된 주소 위치 표시
  const onClickAddr = () => {
    // 3) 주소 검색
    new window.daum.Postcode({
      // 4) 검색된 주소 클릭 시 콜백 함수
      oncomplete: function (addrData) {
        var geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(addrData.address, function (result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            var currentPos = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x,
            );
            (document.getElementById("addr") as HTMLInputElement).value =
              addrData.address;
            if (map) {
              map.panTo(currentPos); // map이 null이 아닌 경우에만 panTo 호출
              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                position: currentPos,
                map: map,
              });
            }
          }
        });
      },
    }).open();
  };

  // 4) 헬스장 검색 및 표시
  const searchGym = () => {
    if (map && searchKeyword.trim() !== "") {
      var ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(searchKeyword, function (data, status, pagination) {
        if (status === window.kakao.maps.services.Status.OK) {
          setSearchResults(data); // 검색 결과를 state에 저장
        }
      });
    }
  };

  // 5) 헬스장 마커 표시 함수
  const displayMarker = place => {
    var marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(place.y, place.x),
    });

    // 마커에 클릭 이벤트를 등록
    window.kakao.maps.event.addListener(marker, "click", function () {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출
      var infowindow = new window.kakao.maps.InfoWindow({
        content: place.place_name,
      });
      infowindow.open(map, marker);
    });
  };

  // 6) 선택한 헬스장 위치로 이동
  const moveToSelectedGym = index => {
    if (map && searchResults[index]) {
      const selectedGym = searchResults[index];
      const selectedPos = new window.kakao.maps.LatLng(
        selectedGym.y,
        selectedGym.x,
      );
      map.panTo(selectedPos); // 선택한 헬스장 위치로 이동
      // 선택한 헬스장 위치에 마커 표시
      const marker = new window.kakao.maps.Marker({
        position: selectedPos,
        map: map,
      });
    }
  };

  return (
    <div>
      <div onClick={onClickAddr}>
        <input id="addr" readOnly />
      </div>
      <div>
        <input
          type="text"
          placeholder="헬스장 이름을 입력하세요."
          value={searchKeyword}
          onChange={e => setSearchKeyword(e.target.value)}
        />
        <button onClick={searchGym}>헬스장 검색</button>
      </div>
      {/* 헬스장 검색 결과 리스트 표시 */}
      <ul>
        {searchResults.map((result, index) => (
          <li key={index} onClick={() => moveToSelectedGym(index)}>
            {result.place_name}
          </li>
        ))}
      </ul>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
};

export default KakaoMap;
