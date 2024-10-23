import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import {
  SearchBarWrap,
  SearchBarInput,
  SearchIcon,
} from "@/styles/TrainerSearchBar";
import searchIcon from "public/Trainer/icons/searchLightGray.png";
import { PlaceInfo } from "@/model/trainer/signUp";

interface geologyInfo {
  center: {
    x: number;
    y: number;
  };
  errMsg: null | string;
  isLoading: boolean;
}

// interface placeInfo {
//   id: string;
//   address_name: string;
//   categroy_group_code: string;
//   category_group_name: string;
//   category_name: string;
//   distance: string;
//   id: string;
//   phone: string;
//   place_name: string;
//   place_url: string;
//   road_address_name: string;
//   x: string;
//   y: string;
// }

interface SearchCenterProps {
  handlePlaceSelect: (place: PlaceInfo) => void;
}

export const SearchCenter: React.FC<SearchCenterProps> = ({
  handlePlaceSelect,
}) => {
  const [keyWord, setKeyWord] = useState("");
  const [place, setPlace] = useState<PlaceInfo[]>([]);
  // 기본 위치 설정
  const [state, setState] = useState<geologyInfo>({
    center: {
      x: 33.450701,
      y: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  // 검색 키워드
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  // 페이지가 로드되었을 때 현재 위치를 가져온다.
  // 페이지가 로드되었을 때 현재 위치를 가져오는 useEffect
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          // 사용자의 위치를 성공적으로 가져왔을 때 상태 업데이트
          setState(prev => ({
            ...prev,
            center: {
              x: position.coords.latitude,
              y: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        err => {
          // 위치를 가져오지 못했을 때 에러 메시지 설정
          setState(prev => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      // 브라우저에서 geolocation을 지원하지 않는 경우
      setState(prev => ({
        ...prev,
        errMsg: "geolocation을 사용할 수 없습니다.",
        isLoading: false,
      }));
    }
  }, []);

  console.log("State", state);

  const searchPlaces = () => {
    if (!keyWord.replace(/^\s+|\s+$/g, "")) {
      alert("키워드를 입력해주세요!");
      return;
    }

    kakao.maps.load(function () {
      var ps = new kakao.maps.services.Places();
      const options = {
        location: new kakao.maps.LatLng(state.center.x, state.center.y),
        radius: 5000, // 반경 5km
        sort: kakao.maps.services.SortBy.DISTANCE, // 거리순으로 정렬
      };

      // 장소 검색 객체를 통해 키워드 검색을 요청합니다.
      ps.keywordSearch(
        keyWord, // 사용자가 입력한 키워드
        function (data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            setPlace(data);
            console.log(data);
          } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert("검색 결과가 존재하지 않습니다.");
          } else if (status === kakao.maps.services.Status.ERROR) {
            alert("검색 결과 중 오류가 발생했습니다.");
          }
        },
        options,
      );
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchPlaces();
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <SearchBarWrap>
          <SearchIcon src={searchIcon} alt="검색 회색 돋보기 아이콘" />
          <SearchBarInput
            type="text"
            name="센터 검색바"
            placeholder="검색"
            value={keyWord}
            onChange={onChange}
          />
        </SearchBarWrap>
      </form>
      <ListWrapper>
        {place.length > 0 ? (
          <ul>
            {place.map((place, index) => (
              <ListItem key={index} onClick={() => handlePlaceSelect(place)}>
                <strong>{place.place_name}</strong>
                <br />
                {place.address_name}
                <br />
                {place.phone}
                <span>
                  {place.distance
                    ? place.distance >= 1000
                      ? `${(place.distance / 1000).toFixed(2)}km 떨어져 있음`
                      : `${place.distance}m 떨어져 있음`
                    : "거리 정보 없음"}
                </span>
              </ListItem>
            ))}
          </ul>
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </ListWrapper>
    </>
  );
};

const ListWrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

const ListItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-gray);
`;
