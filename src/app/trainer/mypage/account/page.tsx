"use client";
import styled from "styled-components";
import Link from "next/link";
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

const ContentBody = styled.div`
  padding: 6.8rem 1.6rem 3.2rem 1.6rem;
`;

const MainContentWrap = styled.div`
  height: 100vh;
  margin-bottom: 0.2rem;
  padding: 3.5rem 1.2rem 5rem;
  overflow: auto;
`;

const MainTitle = styled.h4`
  font-weight: bold;
`;

const ButtonAreaFixed = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 2.4rem 1.6rem 1.6rem;
  width: 100%;
  z-index: 100;
  background-color: transparent;
`;

const NextStepButton = styled.button`
  background-color: #7f7f7f;
  color: #ffffff;
  font-weight: bold;
  padding: 0 1.6rem;
  height: 3rem;
  width: 100%;
  text-align: center;
  border-radius: 0.6rem;
`;

export default function Account() {
  return (
    <MainContainer>
      <MainHeader>내 정보 수정</MainHeader>
      <ContentBody>
        <div
          style={{
            borderRadius: "50%",
            width: "5rem",
            height: "5rem",
            backgroundColor: "lightGray",
            margin: "0 auto",
          }}
        >
          프로필 사진
        </div>
        <div>
          <div>
            <h4>닉네임</h4>
            <div>
              <input type="text" placeholder="김땡땡"></input>
              <button>중복확인</button>
            </div>
          </div>
          <div>
            <h4>키, 몸무게</h4>
            <div>
              <input type="text" placeholder="165cm"></input>/
              <input type="text" placeholder="50kg"></input>
            </div>
          </div>
          <div>
            <h4>성별</h4>
            <div>
              <button>남자</button>
              <button>여자</button>
            </div>
          </div>
        </div>
      </ContentBody>
      <ButtonAreaFixed>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <NextStepButton>저장하기</NextStepButton>
        </div>
      </ButtonAreaFixed>
    </MainContainer>
  );
}
