import { useEffect, useRef } from "react";

const useDidMountEffect = (func: any, deps: any) => {
  // 최초 렌더링 시 kakao.maps이 load 안될 경우 실행을 막기 위한 커스텀 Hook
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;
