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
  background-color: #ffffff;
  z-index: 100;
`;

const MainTitle = styled.h4`
  font-weight: bold;
  margin: 0 auto;
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

export default function MypageNone() {
  return (
    <MainContainer>
      <MainHeader>
        <MainTitle>마이페이지</MainTitle>
      </MainHeader>
      <div>아</div>
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
