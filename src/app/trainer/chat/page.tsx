"use client";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #efefef;
  min-height: 100vh;
`;

const MainHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 3rem;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const MainContentWrap = styled.div`
  padding: 4rem 1.2rem 5rem;
`;

const MainTitle = styled.h4`
  font-weight: bold;
`;

const TrainerMainWrap = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  margin-top: 0.3rem;
`;

const TrainerScheduleContentWrap = styled.div``;

const TrainerScheduleTap = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
`;

const CheckAllScheduleBtn = styled.button`
  width: 100%;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem;
  margin-top: 1rem;
`;

const MainFooter = styled.footer`
  position: fixed;
  display: flex;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 3rem;
  padding: 0 1rem;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const FooterCtgItem = styled.button`
  all: unset;
  text-align: center;
  width: 100%;
`;

const FooterItemImg = styled.img``;

const FooterImgSpan = styled.span`
  display: block;
`;

export default function Main() {
  return (
    <MainContainer>
      <MainHeader>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            padding: "0 0.5rem",
          }}
        >
          <div> </div>
          <MainTitle>채팅</MainTitle>
          <img
            style={{ display: "inline-block" }}
            src="/setting.jpg"
            alt="설정 이미지"
          />
        </div>
      </MainHeader>
      <MainContentWrap>
        <TrainerMainWrap>
          <ul>
            <li>
              <div>
                <img src="!#" />
                <div>
                  <div>장우정 회원님</div>
                  <div>안녕하세요, 회원님. 좋은 오후입니다.</div>
                </div>
              </div>
              <span>22:45</span>
            </li>
          </ul>
        </TrainerMainWrap>
        <MainTitle>회원 통계</MainTitle>
      </MainContentWrap>
      <MainFooter>
        <FooterCtgItem>
          <FooterItemImg src="#!"></FooterItemImg>
          <FooterImgSpan>홈</FooterImgSpan>
        </FooterCtgItem>

        <FooterCtgItem>
          <FooterItemImg src="#!"></FooterItemImg>
          <FooterImgSpan>수업관리</FooterImgSpan>
        </FooterCtgItem>

        <FooterCtgItem>
          <FooterItemImg src="#!"></FooterItemImg>
          <FooterImgSpan>채팅</FooterImgSpan>
        </FooterCtgItem>

        <FooterCtgItem>
          <FooterItemImg src="#!"></FooterItemImg>
          <FooterImgSpan>마이페이지</FooterImgSpan>
        </FooterCtgItem>
      </MainFooter>
    </MainContainer>
  );
}
