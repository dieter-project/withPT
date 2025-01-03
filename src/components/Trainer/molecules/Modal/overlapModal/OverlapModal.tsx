import styled from "styled-components";

const OverlapModal = () => {
  return (
    <OverLapWrap>
      <OverLapModal>
        <OverLapTitle>일정 중복</OverLapTitle>
        <OverLapMessage>
          기존 일정과 중복된 시간이 있어 등록할 수 없습니다.
        </OverLapMessage>
      </OverLapModal>
    </OverLapWrap>
  );
};

const OverLapWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--z-index-overlay);
`;

const OverLapModal = styled.div`
  font-family: var(--font);
  width: 18.125rem;
  height: 9.5rem;
  padding-top: 1.19rem;
  text-align: center;
  background-color: white;
  border-radius: 0.5rem;
  color: black;
  font-size: 3vh;
`;

const OverLapTitle = styled.h4`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
`;

const OverLapMessage = styled.div`
  font-size: var(--font-m);
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 1.06rem;
`;

export default OverlapModal;
