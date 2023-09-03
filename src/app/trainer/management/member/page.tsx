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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 1rem 0;
  background-color: #ffffff;
  z-index: 100;
`;

const MainTitle = styled.h4`
  font-weight: bold;
  margin: 0 auto;
`;

const ManageContentWrap = styled.div`
  height: 100vh;
  margin-bottom: 0.2rem;
  padding: 3.5rem 1.2rem 5rem;
  overflow: auto;
`;

const CenterNameItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 1rem 0.5rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  font-weight: bold;
`;

const CenterMember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid gray;
`;

const NeedMoreInfo = styled.span`
  border: 1px solid red;
  border-radius: 0.5rem;
  padding: 0.2rem;
  color: red;
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

export default function ManageMember() {
  return (
    <MainContainer>
      <MainHeader>
        <span>뒤</span>
        <MainTitle>회원관리</MainTitle>
        <span>탭</span>
      </MainHeader>

      <ManageContentWrap>
        <CenterNameItem>
          <span>아자 아자 피트니스 센터</span>
          <span>5명</span>
        </CenterNameItem>
        <div>
          <CenterMember>
            <span>맥도날드 회원님</span>
            <NeedMoreInfo>상세정보 입력 필요</NeedMoreInfo>
          </CenterMember>
          <CenterMember>
            <span>버거킹 회원님</span>
            <span>잔여:16회/36회</span>
          </CenterMember>
          <CenterMember>
            <span>신형만 회원님</span>
            <span>잔여:11회/24회</span>
          </CenterMember>
          <CenterMember>
            <span>김땡땡 회원님</span>
            <span>잔여:5회/36회</span>
          </CenterMember>
          <CenterMember>
            <span>아자아자 회원님</span>
            <span>잔여:0회/50회</span>
          </CenterMember>
        </div>
      </ManageContentWrap>
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
