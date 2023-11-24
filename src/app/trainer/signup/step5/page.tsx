/*global kakao*/
"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Head from "next/head";
import Script from "next/script";
import styled from "styled-components";

//아이콘
// import { Spinner } from '../../shared/index';
// import Minus from '../../../../public/assets/minus.svg';
// import Plus from '../../../../public/assets/plus.svg';
// import Location from '../../../../public/assets/location.svg';

declare global {
  interface Window {
    kakao: any;
  }
}
const NEXT_PUBLIC_KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;

const MainMap = (): React.ReactElement | null => {
  const [level, setLevel] = useState(8); //지도레벨
  const [pos, setPos] = useState(); //경도 위도
  const containerRef = useRef<HTMLDivElement>(null); // 지도 ref
  //map불러오기
  const initMap = useCallback(() => {
    if (containerRef.current) {
      const map = new kakao.maps.Map(containerRef.current, {
        center: new kakao.maps.LatLng(37.5173319258532, 127.047377408384),
        level: level,
      });
    }
  }, []);
  useEffect(() => {
    if (window?.kakao) {
      initMap();
    }
  }, [initMap]);

  //나의 위치로 가게 해주는 함수
  const setLocation = () => {
    let container: any = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(37.5173319258532, 127.047377408384),
      level: level,
    };
    let map = new kakao.maps.Map(container, options);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        let locPosition = new kakao.maps.LatLng(lat, lon);
        map.setCenter(locPosition);
      });
    }
  };
  //줌인
  const zoomIn = () => {
    if (level > 5) {
      setLevel(level - 1);
    }

    let container: any = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(37.5173319258532, 127.047377408384),
      level: level,
    };
    let map = new kakao.maps.Map(container, options);
  };
  //줌아웃
  const zoomOut = () => {
    if (level < 10) {
      setLevel(level + 1);
    }

    let container: any = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(37.5173319258532, 127.047377408384),
      level: level,
    };
    let map = new kakao.maps.Map(container, options);
  };

  return (
    <React.Fragment>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=11d459617712987784be79ee1fe519de&autoload=false`}
        onLoad={() => kakao.maps.load(initMap)}
      />
      <Head>
        <link rel="preconnect" href="https://dapi.kakao.com" />
        <link rel="dns-prefetch" href="https://dapi.kakao.com" />
      </Head>
      <MapWrap id="map" ref={containerRef}></MapWrap>
      <MainContent>
        {/* {is_loaded ? null : <span>열기</span>} */}
        <Lev>
          <Btn onClick={setLocation}>버튼</Btn>
          <PlusBtn>
            <button onClick={zoomIn}>버튼</button>
            <button onClick={zoomOut}>버튼</button>
          </PlusBtn>
        </Lev>
      </MainContent>
    </React.Fragment>
  );
};
const MapWrap = styled.div`
  width: 100%;
  height: 100vh;
`;
const MainContent = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  top: 0;
  left: 0;
`;

const Lev = styled.div`
  width: 40px;
  height: 125px;
  position: absolute;
  bottom: 5%;
  left: 16px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Btn = styled.button`
  width: 40px;
  height: 40px;
  background: #fff;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;
const PlusBtn = styled.div`
  width: 40px;
  height: 72px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 24px;
    height: 1px;
    background-color: gray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  & button {
    background: none;
    border-radius: 0px;
    width: 30px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default MainMap;
