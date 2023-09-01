"use client";
import styled from "styled-components";
import Link from "next/link";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import { useState, useEffect } from "react";
import tabBar from "../../public/tabBar.png";

const MainContainer = styled.div`
  background-color: #efefef;
`;

const MainHeader = styled.header`
  height: 3rem;
  display: fixed;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const MainContentWrap = styled.div`
  margin-bottom: 0.2rem;
  padding: 1rem;
  overflow: auto;
  background-color: white;
`;

const MemberMangePic = styled.div`
  text-align: center;
`;

const MemberMangeName = styled.span`
  text-align: center;
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

export default function ManagementMember() {
  return (
    <MainContainer>
      <MainHeader>회원 정보</MainHeader>

      <MainContentWrap>
        <MemberMangePic>
          <img src="!#" alt="회원사진"></img>
          <div>
            <MemberMangeName>맥도날드</MemberMangeName>
            <span>아자아자 피트니스 센터</span>
          </div>
        </MemberMangePic>
        <div>
          <div>
            <span>이름</span>
            <span>곽두팔</span>
          </div>
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
              <FooterItemImg src="#!"></FooterItemImg>
              <span>마이페이지</span>
            </FooterCtgItem>
          </li>
        </FooterCtgWrap>
      </MainFooter>
    </MainContainer>
  );
}
