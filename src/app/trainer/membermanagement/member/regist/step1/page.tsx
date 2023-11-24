"use client";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const MainHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 3rem;
  background-color: #ffffff;
  padding: 1rem;
  z-index: 100;
  text-align: center;
  font-weight: bold;
`;

const ManageContentWrap = styled.div`
  padding: 3rem 1.2rem 5rem;
`;

const ManageMemberWrap = styled.div`
  margin-top: 1.5rem;
`;

const ManageTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ManageTitle = styled.h4`
  font-weight: 600;
`;

const SearchMemberName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--purple50);
  padding: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
`;

const SearchInput = styled.input`
  background-image: url("/searchLight.png");
  background-size: auto;
  background-color: var(--purple50);
  background-repeat: no-repeat;
  width: 90%;
  padding-left: 2em;
  border: none;
  outline: none;
`;

const MemberList = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--font-gray400);
  border-radius: 0.5rem;
  padding: 1rem;
`;

const MemberListItem = styled.span`
  margin: 0 0.3rem;
  color: var(--font-gray500);
`;

const SendReqButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem 0;
  border: 1px solid var(--font-gray400);
  border-radius: 0.5rem;
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

export default function MemberRegistStep1() {
  const [selectedItem, setSelectedItem] = useState(null);

  //   const handleItemClick = index => {
  //     setSelectedItem(index);
  //   };
  return (
    <MainContainer>
      <MainHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <img
            style={{ display: "inline-block" }}
            src="/beforePage.jpg"
            alt="이전 페이지 이미지"
          />
          <ManageTitle>회원 등록</ManageTitle>
          <div></div>
        </div>
      </MainHeader>
      <ManageContentWrap>
        <ManageMemberWrap>
          <ManageTitleWrap>
            <ManageTitle>아자아자 피트니스 센터</ManageTitle>
          </ManageTitleWrap>

          <SearchMemberName>
            <SearchInput
              type="text"
              placeholder="회원 닉네임을 검색해보세요."
            ></SearchInput>
          </SearchMemberName>
          <div>
            <ul>
              <MemberList
              //    style={{
              //     cursor: 'pointer',
              //     backgroundColor: selectedItem === index ? 'lightblue' : 'white',
              //   }}
              >
                {/* {items.map((item, index) => (
            <MemberList
              key={index}
              onClick={() => handleItemClick(index)}
              isSelected={selectedItem === index}
            >))} */}
                <div>
                  <img src="#!" style={{ display: "inline-block" }}></img>
                  <span>이은서</span>
                  <MemberListItem>happylee</MemberListItem>
                </div>
                <div>여자 / 95년생</div>
              </MemberList>
            </ul>
            <SendReqButton>등록 요청 보내기</SendReqButton>
          </div>
        </ManageMemberWrap>
      </ManageContentWrap>
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
