"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface KakaoMapContextType {
  isLoaded: boolean;
}

const KakaoMapContext = createContext<KakaoMapContextType>({ isLoaded: false });

export function KakaoMapProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 이미 로드된 경우 중복 로드 방지
    if (document.querySelector('script[src*="dapi.kakao.com"]')) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false&libraries=services`;
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    document.head.appendChild(script);
  }, []);

  return (
    <KakaoMapContext.Provider value={{ isLoaded }}>
      {children}
    </KakaoMapContext.Provider>
  );
}

export const useKakaoMap = () => useContext(KakaoMapContext);
