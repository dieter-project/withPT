import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { styled } from "styled-components";

// window.kakao 객체를 가져옴
const { kakao } = window;

const KakaoMap = ({ searchKeywords, coords }) => {
  console.log("cords", coords);
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [keyword, setKeyword] = useState("");

  console.log("searchKeywords", searchKeywords);

  console.log("info", info);

  useEffect(() => {
    // 검색어가 빈 문자열인 경우 API 요청을 수행하지 않음
    if (!searchKeywords || searchKeywords.trim() === "" || !map) return;

    // 장소 검색 서비스 객체 생성
    const ps = new window.kakao.maps.services.Places();

    // 입력한 키워드로 검색
    // - keyword: 검색할 키워드
    // - callback: 검색 결과를 받을 콜백함수
    ps.keywordSearch(searchKeywords, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        const addMarkers = [];

        for (let i = 0; i < data.length; i += 1) {
          addMarkers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
          setMarkers(addMarkers);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정
          map.setBounds(bounds);
        }
      }
    });
  }, [map, searchKeywords]);
  // JSX로 지도와 마커를 렌더링

  console.log("markers", markers);
  return (
    <>
      <MapSection>
        {/* 로드뷰를 표시할 Container */}
        <Map
          // 중심으로 설정할 위치
          center={{
            lat: coords.lat,
            lng: coords.lon,
          }}
          style={{
            width: "100%",
            height: "94%",
          }}
          level={3}
          onCreate={setMap}
        >
          {markers.map(marker => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              // 표시 위치
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && (
                <div style={{ color: "#000" }}>{marker.content}</div>
              )}
            </MapMarker>
          ))}
        </Map>
      </MapSection>
      <div> {markers.map(marker => marker.content)}</div>
    </>
  );
};

export default KakaoMap;

const MapSection = styled.section`
  width: 100%;
  height: 70vh;
`;
