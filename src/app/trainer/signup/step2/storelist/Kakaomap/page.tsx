import React, { useState, useEffect, useRef } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { styled } from "styled-components";

// window.kakao 객체를 가져옴
declare global {
  interface Window {
    kakao: any;
  }
}

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

const MapSection = styled.section`
  width: 100%;
  height: 100vh;
`;

const KakaoMap: React.FC<{
  searchKeywords: string | null;
  coords: Coordinates;
  markers: Marker[];
  setExample: any;
  setMarkers: React.Dispatch<React.SetStateAction<Marker[]>>;
}> = ({ searchKeywords, coords, markers, setMarkers, setExample }) => {
  console.log("cords", coords);
  const [info, setInfo] = useState<Marker | null>(null);
  const [map, setMap] = useState<any>();
  const [keyword, setKeyword] = useState("");
  const [selectedHealthCenter, setSelectedHealthCenter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const itemsPerPage = 5; // 페이지당 표시할 항목 수
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
            phone: data[i].phone,
            roadAddress: data[i].road_address_name,
          });
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
          setMarkers(addMarkers);
          // setExample(addMarkers);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정
          map.setBounds(bounds);
        }
      }
    });
  }, [map, searchKeywords]);

  const handleMarkerClick = markerInfo => {
    setInfo(markerInfo);
  };

  // console.log("markers", markers);
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
            height: "100%",
          }}
          level={3}
          onCreate={setMap}
        >
          {markers &&
            markers.map((marker, index) => (
              <MapMarker
                key={`marker-${marker.content}-${index}-${marker.position.lat},${marker.position.lng}`}
                position={marker.position}
                onClick={() => setInfo(marker)}
              >
                {info && info.content === marker.content && (
                  <div style={{ color: "#000" }}>
                    <div>{marker.content}</div>
                  </div>
                )}
              </MapMarker>
            ))}
        </Map>
      </MapSection>

      <div
        ref={observerRef}
        style={{ height: "20px", backgroundColor: "transparent" }}
      ></div>
    </>
  );
};

export default KakaoMap;
