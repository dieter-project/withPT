import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import { styled } from "styled-components";
import { PlaceInfo } from "@/model/trainer/signUp";
import SearchBar from "@/components/trainer/molecules/SearchBar/SearchBarInput";
import PlaceList from "./PlaceList";
import NoResultMessage from "./NoResultMessage";
import { useKakaoMap } from "@/context/trainer/KaKaoMapContext";

interface LocationInfo {
  latitude: number;
  longitude: number;
}

interface SearchCenterProps {
  handlePlaceSelect: (place: PlaceInfo) => void;
}

const ListWrapper = styled.div`
  height: 100%;
  overflow: auto;
  padding-bottom: 5rem;
`;

export const SearchCenter: React.FC<SearchCenterProps> = ({
  handlePlaceSelect,
}) => {
  const { isLoaded } = useKakaoMap();
  const [keyword, setKeyword] = useState<string>("");
  const [places, setPlaces] = useState<PlaceInfo[]>([]);
  const [location, setLocation] = useState<LocationInfo | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // 위치 정보 가져오기
  useEffect(() => {
    if (!navigator.geolocation) {
      setErrorMsg("Geolocation을 지원하지 않는 브라우저입니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        setErrorMsg(error.message);
      },
    );
  }, []);

  // 장소 검색
  const searchPlaces = useCallback(
    (searchTerm: string) => {
      if (!isLoaded || !location || !window.kakao) return;

      if (!searchTerm.trim()) {
        setPlaces([]);
        setErrorMsg("검색어를 입력해주세요.");
        return;
      }

      window.kakao.maps.load(() => {
        const ps = new window.kakao.maps.services.Places();
        const options = {
          location: new window.kakao.maps.LatLng(
            location.latitude,
            location.longitude,
          ),
          radius: 5000,
          sort: window.kakao.maps.services.SortBy.DISTANCE,
        };

        ps.keywordSearch(
          searchTerm,
          (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              setPlaces(data);
              setErrorMsg(null);
            } else if (
              status === window.kakao.maps.services.Status.ZERO_RESULT
            ) {
              setPlaces([]);
              setErrorMsg("검색 결과가 없습니다.");
            } else {
              setErrorMsg("오류가 발생했습니다. 다시 시도해주세요.");
            }
          },
          options,
        );
      });
    },
    [location, isLoaded],
  );

  const debouncedSearch = useCallback(_.debounce(searchPlaces, 300), [
    searchPlaces,
  ]);

  // 키워드 변경 핸들러
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    if (value.trim()) {
      setErrorMsg(null);
      debouncedSearch(value);
    }
  };

  return (
    <>
      <SearchBar
        value={keyword}
        onChange={handleKeywordChange}
        onSubmit={e => {
          e.preventDefault();
          searchPlaces(keyword);
        }}
      />
      <ListWrapper>
        {errorMsg ? (
          <NoResultMessage message={errorMsg} />
        ) : keyword ? (
          <PlaceList places={places} handlePlaceSelect={handlePlaceSelect} />
        ) : (
          <NoResultMessage message="검색어를 입력해주세요." />
        )}
      </ListWrapper>
    </>
  );
};
