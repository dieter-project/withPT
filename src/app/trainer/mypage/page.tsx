"use client";
import styled from "styled-components";
import Link from "next/link";
import tabBar from "../../../../assets/icons/tabBar.png";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import { useState, useEffect } from "react";

const MainContainer = styled.div``;

const MainHeader = styled.header`
  display: fixed;
  height: 3rem;
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
  margin-bottom: 0.2rem;
  padding: 1rem;
  overflow: auto;
`;

const MainTitle = styled.h4`
  font-weight: bold;
`;

const ResumeModifBtn = styled.button`
  all: unset;
  color: gray;
`;

const TrainerMainWrap = styled.div``;

const TrainerResumeTap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TrainerResume = styled.div`
  padding: 1rem;
  margin: 0.3rem;
  background-color: #f4f4f4;
`;

const TrainerTag = styled.button`
  background-color: #d9d9d9;
  color: #919191;
  font-weight: bold;
  padding: 0.3rem;
  margin-left: 0.3rem;
  border-radius: 0.8rem;
  border: none;
`;

const TrainerResumeName = styled.div`
  align-items: center;
  border-bottom: 1px solid #919191;
  padding-bottom: 0.8rem;
`;

const TrainerResumeAward = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

const ResumeName = styled.span`
  font-weight: bold;
`;

const ShowMoreBtn = styled.button`
  all: unset;
  width: 100%;
  text-align: center;
  border-top: 1px solid #919191;
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
  display: fixed;
  height: 3rem;
  padding: 1rem 2rem 1rem;
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

export default function Mypage() {
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
            <ResumeModifBtn>수정</ResumeModifBtn>
          </TrainerResumeTap>
          <TrainerResume>
            <TrainerResumeName>
              <ResumeName>김땡땡 트레이너</ResumeName>
              <TrainerTag>재활치료</TrainerTag>
              <TrainerTag>보디빌딩</TrainerTag>
            </TrainerResumeName>
            <TrainerResumeAward>
              <span>2023 .03</span>
              <span>보디빌더 대회 최우수상</span>
            </TrainerResumeAward>
            <TrainerResumeAward>
              <span>2022 .03</span>
              <span>보디빌더 대회 우수상</span>
            </TrainerResumeAward>
            <TrainerResumeAward>
              <span>2010 .03 ~ 2016 . 02</span>
              <span>보디빌더 대회 최우수상</span>
            </TrainerResumeAward>
            <ShowMoreBtn> 더보기 </ShowMoreBtn>
          </TrainerResume>
        </TrainerMainWrap>
      </MainContentWrap>
      <MainContentWrap>
        <div>
          <MainTitle>내 센터관리</MainTitle>
          <CenterListWrap>
            <CenterList>
              아자아자
              <br />
              피트니스 센터
            </CenterList>
            <CenterList>
              으라차차
              <br />
              피트니스 센터
            </CenterList>
            <CenterList>
              득근득근
              <br />
              피트니스 센터
            </CenterList>
          </CenterListWrap>
        </div>
      </MainContentWrap>
      <MainContentWrap>
        <MypageCtg>
          <span>공지사항</span>
          <span> ㅅ </span>
        </MypageCtg>
        <MypageCtg>
          <button>로그아웃</button>
          <span> ㅅ </span>
        </MypageCtg>
        <MypageCtg>
          <span>계정관리</span>
          <span> ㅅ </span>
        </MypageCtg>
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
