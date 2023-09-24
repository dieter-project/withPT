"use client";
import styled from "styled-components";
import Link from "next/link";
import tabBar from "../../../../assets/icons/tabBar.png";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import { useState, useEffect } from "react";

const MainContainer = styled.div``;

const MainHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 3rem;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  font-weight: bold;
  background-color: #ffffff;
  z-index: 100;
`;

const TrainerProfile = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrainerName = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 2rem;
  width: 70%;
`;

const TrainerPic = styled.img`
  width: 30%;
  border-radius: 50%;
`;

const MainContentWrap = styled.div`
  height: 100vh;

  padding: 3.5rem 1.2rem 5rem;
  overflow: auto;
`;

const MainTitle = styled.h4`
  font-weight: bold;
`;

const TrainerMainWrap = styled.div``;

const TrainerResumeTap = styled.div``;

const TrainerResumeWrap = styled.div`
  padding: 1rem;
  background-color: #f4f4f4;
`;

const TrainerResumeAward = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
`;

const AwardMessage = styled.span`
  display: block;
  color: gray;
  font-size: 0.8rem;
`;

const CenterList = styled.div`
  width: 30%;
  margin-right: 0.5rem;
  background-color: #f4f4f4;
  text-align: center;
  padding: 1.3rem 0.4rem;
`;

const CenterListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MypageCtg = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 0.8rem 0;
  border-bottom: 1px solid #919191;
`;

const MainFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  padding: 2rem 2rem 3rem 2rem;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const FooterCtgWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterCtgItem = styled.button`
  all: unset;
  align-items: center;
`;

const FooterItemImg = styled.img`
  display: block;
`;

export default function MypageNone() {
  return (
    <MainContainer>
      <MainHeader>마이페이지</MainHeader>
      <MainContentWrap>
        <TrainerProfile>
          <TrainerName>
            김땡땡님! <br /> 오늘도 힘찬 하루 보내세요!
          </TrainerName>
          <TrainerPic src="#!" alt="프로필 사진"></TrainerPic>
        </TrainerProfile>
        <TrainerMainWrap>
          <TrainerResumeTap>
            <MainTitle>내 이력관리</MainTitle>
          </TrainerResumeTap>
          <TrainerResumeWrap>
            <TrainerResumeAward href="#">
              <div>
                <AwardMessage>현재 작성된 이력이 없으세요.</AwardMessage>
                <div>이력 입력하기</div>
              </div>
              <div>뿅</div>
            </TrainerResumeAward>
          </TrainerResumeWrap>
        </TrainerMainWrap>
        <div>
          <h4>설정</h4>
          <MypageCtg>
            <span>공지사항</span>
            <span> ㅅ </span>
          </MypageCtg>
          <MypageCtg>
            <Link href="trainer/login">로그아웃</Link>
            <span> ㅅ </span>
          </MypageCtg>
        </div>
      </MainContentWrap>
      <MainFooter>
        <FooterCtgWrap>
          <li>
            <FooterCtgItem>
              <FooterItemImg src="#!"></FooterItemImg>
              <span>홈</span>
            </FooterCtgItem>
          </li>
          <li>
            <FooterCtgItem>
              <FooterItemImg src="#!"></FooterItemImg>
              <span>수업관리</span>
            </FooterCtgItem>
          </li>
          <li>
            <FooterCtgItem>
              <FooterItemImg src="#!"></FooterItemImg>
              <span>채팅</span>
            </FooterCtgItem>
          </li>
          <li>
            <FooterCtgItem>
              <img src="#!"></img>
              <span>마이페이지</span>
            </FooterCtgItem>
          </li>
        </FooterCtgWrap>
      </MainFooter>
    </MainContainer>
  );
}
