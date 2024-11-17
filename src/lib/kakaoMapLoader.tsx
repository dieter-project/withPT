"use client";

import { useEffect } from "react";

interface KakaoMapLoaderProps {
  onLoad?: () => void;
}

const KakaoMapLoader: React.FC<KakaoMapLoaderProps> = ({ onLoad }) => {
  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          // console.log("Kakao Maps API loaded");
          if (onLoad) onLoad();
        });
      }
    };

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false&libraries=services`;
    script.async = true;
    script.onload = loadKakaoMap;
    document.body.appendChild(script);
  }, [onLoad]);

  return null;
};

export default KakaoMapLoader;
