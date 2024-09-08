import React, { useState, useEffect } from "react";
import {
  SearchBarWrap,
  SearchBarInput,
  SearchIcon,
} from "@/styles/TrainerSearchBar";
import searchIcon from "public/Trainer/icons/searchLightGray.png";
import { styled } from "styled-components";

const ListWrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

export const SearchCenter = () => {
  const [keyWord, setKeyWord] = useState("");
  const [place, setPlace] = useState([]);

  // 기본 위치 상태
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const onChange = e => {
    setKeyWord(e.target.value);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setState(prev => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        err => {
          setState(prev => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
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
        location: new kakao.maps.LatLng(state.center.lat, state.center.lng),
        radius: 5000, // 반경 5km
        sort: kakao.maps.services.SortBy.DISTANCE, // 거리순으로 정렬
      };

      // 장소 검색 객체를 통해 키워드 검색을 요청합니다.
      ps.keywordSearch(
        keyWord, // 사용자가 입력한 키워드
        function (data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            // 데이터 확인
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
              <li key={index}>
                <strong>{place.place_name}</strong>
                <br />
                {place.address_name}
                <br />
                {place.phone}
              </li>
            ))}
          </ul>
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </ListWrapper>
    </>
  );
};
