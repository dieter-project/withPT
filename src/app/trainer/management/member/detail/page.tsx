"use client";
import styled from "styled-components";
import Link from "next/link";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import { useState, useEffect } from "react";
import tabBar from "../../public/tabBar.png";
import { autoBatchEnhancer } from "@reduxjs/toolkit";

const MainContainer = styled.div`
  background-color: #efefef;
`;

const MainHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 3rem;
  position: relative;
  display: flex;
  text-align: center;
  font-weight: bold;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const Before = styled.span`
  position: absolute;
`;

const MainTitle = styled.h4`
  font-weight: bold;
  margin: 0 auto;
`;

const MainContentWrap = styled.div`
  height: 100vh;
  margin-bottom: 0.2rem;
  padding: 3.5rem 1.2rem 5rem;
  overflow: auto;
`;

const ProfileWrap = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const ProfileName = styled.span`
  display: block;
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

export default function ManagementMember() {
  return (
    <MainContainer>
      <MainHeader>
        <Before>뒤</Before>
        <MainTitle>회원정보</MainTitle>
      </MainHeader>

      <MainContentWrap>
        <ProfileWrap>
          <div>
            <div>
              <img src="!#"></img>
            </div>
            <ProfileName>맥도날드</ProfileName>
            <span>아자아자 피트니스 센터</span>
          </div>
        </ProfileWrap>
        <div className="profilecontentwrap">
          <div>
            <span>이름</span>
            <input type="text"></input>
          </div>
          <div>
            <span>성별</span>
            <input type="text"></input>
          </div>
          <div>
            <span>키/체중</span>
            <input type="text" placeholder="175cm/60kg"></input>
          </div>
          <div>
            <span>목표</span>
            <input type="text"></input>
          </div>
          <div>
            <span>PT</span>
            <div>
              <input type="text" placeholder="아직 입력 전이에요."></input>
            </div>
            <Link href="!#">입장하기</Link>
          </div>
          <div>
            <span>메모</span>
            <input type="text" placeholder="아직 입력 전이에요."></input>
          </div>
          <div>
            <span>등록일</span>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
          </div>
          <div>
            <span>재등록</span>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
          </div>
        </div>
      </MainContentWrap>
    </MainContainer>
  );
}
