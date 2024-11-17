"use client";

import { useEffect } from "react";

const KakaoScriptLoader = () => {
  useEffect(() => {
    const loadKakaoSDK = () => {
      // Kakao JavaScript SDK 초기화
      if (window.kakao && !window.kakao.isInitialized()) {
        window.kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
      }
    };

    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          // console.log("kakao api loaded");
        });
      }
    };
    // kakao javascript SDK 스크립트 로드
    const kakaoSdkScript = document.createElement("script");
    kakaoSdkScript.src = "https://developers.kakao.com/sdk/js/kakao.js";
    kakaoSdkScript.async = true;
    kakaoSdkScript.onload = loadKakaoSDK;
    document.body.appendChild(kakaoSdkScript);

    // Kakao Maps SDK 스크립트 로드
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false&libraries=services`;
    kakaoMapScript.async = true;
    kakaoMapScript.onload = loadKakaoMap;
    document.body.appendChild(kakaoMapScript);
  }, []);

  return null;
};

export default KakaoScriptLoader;
