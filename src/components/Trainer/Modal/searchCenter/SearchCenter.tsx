import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import { styled } from "styled-components";
import searchIcon from "public/Trainer/icons/searchLightGray.png";
import { PlaceInfo } from "@/model/trainer/signUp";
import {
  SearchBarWrap,
  SearchBarInput,
  SearchIcon,
} from "@/styles/TrainerSearchBar";
import PlaceList from "./PlaceList";
import NoResultMessage from "./NoResultMessage";

interface LocationInfo {
  latitude: number;
  longitude: number;
}

interface SearchCenterProps {
  handlePlaceSelect: (place: PlaceInfo) => void;
}

export const SearchCenter: React.FC<SearchCenterProps> = ({
  handlePlaceSelect,
}) => {
  const [keyword, setKeyword] = useState<string>("");
  const [places, setPlaces] = useState<PlaceInfo[]>([]);
  const [location, setLocation] = useState<LocationInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // 위치 정보 불러오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setIsLoading(false);
        },
        error => {
          setErrorMsg(error.message);
          setIsLoading(false);
        },
      );
    } else {
      setErrorMsg("Geolocation을 지원하지 않는 브라우저입니다.");
      setIsLoading(false);
    }
  }, []);

  // 키워드 변경 핸들러 + 디바운스 적용
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    if (e.target.value.trim()) {
      setErrorMsg(null); // 검색어가 있을 때 에러 메시지 초기화한다.
      debouncedSearch(e.target.value);
    }
  };

  // 검색 함수
  const searchPlaces = useCallback(
    (searchTerm: string) => {
      if (searchTerm.trim().length === 0) {
        setPlaces([]); // 빈 검색어일 때 장소 초기화
        setErrorMsg("검색어를 입력해주세요."); // 빈 검색어일 때 에러 메시지 설정
        return;
      }
      if (!location) return;

      if (searchTerm.trim().length > 0) {
        kakao.maps.load(() => {
          const ps = new kakao.maps.services.Places();
          const options = {
            location: new kakao.maps.LatLng(
              location.latitude,
              location.longitude,
            ),
            radius: 5000,
            sort: kakao.maps.services.SortBy.DISTANCE,
          };

          ps.keywordSearch(
            searchTerm,
            (data, status) => {
              if (status === kakao.maps.services.Status.OK) {
                setPlaces(data);
                setErrorMsg(null);
              } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                setErrorMsg("검색 결과가 없습니다.");
                setPlaces([]);
              } else {
                setErrorMsg("오류가 발생했습니다. 다시 시도해주세요.");
              }
            },
            options,
          );
        });
      }
    },
    [location],
  );

  console.log("location", location);

  const debouncedSearch = useCallback(_.debounce(searchPlaces, 300), [
    location,
  ]);

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPlaces(keyword);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchBarWrap>
          <SearchIcon src={searchIcon} alt="검색 회색 돋보기 아이콘" />
          <SearchBarInput
            type="text"
            name="센터 검색바"
            placeholder="검색"
            value={keyword}
            onChange={handleKeywordChange}
          />
        </SearchBarWrap>
      </form>
      <ListWrapper>
        {errorMsg ? (
          <NoResultMessage message={errorMsg} />
        ) : keyword.length > 0 ? (
          <PlaceList places={places} handlePlaceSelect={handlePlaceSelect} />
        ) : (
          <NoResultMessage message="검색어를 입력해주세요." />
        )}
      </ListWrapper>
    </>
  );
};

const ListWrapper = styled.div`
  height: 100%;
  overflow: auto;
`;
