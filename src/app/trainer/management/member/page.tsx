"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const MainHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const MainTitle = styled.h4`
  font-weight: bold;
  margin: 0 auto;
`;

const SettingImg = styled.img`
  display: inline-block;
`;

const SettingTabImg = styled.img`
  display: inline-block;
  position: absolute;
  top: 2rem;
  right: 0;
`;

const SettingTopTxt = styled.div`
  position: absolute;
  top: 4rem;
  right: 2rem;
  font-weight: normal;
  padding: 0.1rem 0;
  border-bottom: 1px solid var(--border-gray);
`;

const SettingUnderTxt = styled.div`
  position: absolute;
  top: 6rem;
  right: 2rem;
  font-weight: normal;
  padding: 0.1rem 0;
`;

const ManageContentWrap = styled.div`
  padding: 4rem 1.2rem 5rem;
`;

const CenterNameItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--purple50);
  padding: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
`;

const CenterName = styled.span`
  font-weight: 600;
`;

const CenterMember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid var(--border-gray);
`;

const MemberName = styled.span`
  font-size: var(--middle);
  font-weight: 600;
`;

const NeedMoreInfo = styled.span`
  font-size: var(--font-s);
  border: 1px solid var(--coral);
  border-radius: 0.5rem;
  padding: 0.3rem;
  color: var(--coral);
`;

const AwaitReqMember = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  color: var(--font-gray500);
  font-weight: 500;
  border-bottom: 1px solid var(--border-gray);
`;

const AlertResend = styled.span`
  font-size: var(--font-s);
  border: 1px solid var(--font-gray500);
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  color: var(--font-gray500);
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
  const [isTapOpen, setIsTapOpen] = useState(false);

  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const [selectedNames, setSelectedNames] = useState([]);

  // const toggleNameSelection = name => {
  //   if (selectedNames.includes(name)) {
  //     setSelectedNames(selectedNames.filter(n => n !== name));
  //   } else {
  //     setSelectedNames([...selectedNames, name]);
  //   }
  // };

  const toggleTap = () => {
    setIsTapOpen(!isTapOpen);
  };

  const toggleSetting = () => {
    setIsSettingOpen(!isSettingOpen);
  };

  return (
    <MainContainer>
      <MainHeader>
        <Image
          style={{ display: "inline-block" }}
          src="/beforePage.jpg"
          alt="이전 페이지 이미지"
          width="25"
          height="25"
        />
        <MainTitle>회원관리</MainTitle>
        <div style={{ position: "relative" }}>
          <SettingImg
            src="/setting.jpg"
            alt="설정 이미지"
            width="20"
            height="25"
            onClick={toggleSetting}
          />
        </div>
        {isSettingOpen && (
          <>
            <SettingTabImg
              src="/settingTab.png"
              alt="설정 하단 탭 이미지"
              width="150"
              height="150"
            />
            <SettingTopTxt>회원 정보 추가</SettingTopTxt>
            <SettingUnderTxt>회원 해제하기</SettingUnderTxt>
          </>
        )}
      </MainHeader>

      <ManageContentWrap>
        <CenterNameItem>
          <CenterName>아자 아자 피트니스 센터</CenterName>
          <span>5명</span>
        </CenterNameItem>
        <div>
          <CenterMember>
            <MemberName>맥도날드 회원님</MemberName>
            <NeedMoreInfo>상세정보 입력 필요</NeedMoreInfo>
          </CenterMember>
          <CenterMember>
            <MemberName>버거킹 회원님</MemberName>
            <span>잔여:16회 / 36회</span>
          </CenterMember>
          <CenterMember>
            <MemberName>신형만 회원님</MemberName>
            <span>잔여: 11회 / 24회</span>
          </CenterMember>
          <CenterMember>
            <MemberName>김땡땡 회원님</MemberName>
            <span>잔여: 5회 / 36회</span>
          </CenterMember>
          <CenterMember>
            <MemberName>아자아자 회원님</MemberName>
            <span>잔여: 0회 / 50회</span>
          </CenterMember>
        </div>
        {/* 이름 데이터 들어가면 수정 */}
        {/* <div>
      {names.map((name) => (
        <Link key={name}>
          <label>
            <input
              type="checkbox"
              checked={selectedNames.includes(name)}
              onChange={() => toggleNameSelection(name)}
            />
            {name}
          </label>
        </ㅣ>
      ))}
    </div> */}
        <AwaitReqMember onClick={toggleTap}>
          <div>
            회원 등록 요청 대기중 <span>2</span>
          </div>
          {!isTapOpen && (
            <Image
              style={{ display: "inline-block" }}
              src="/toggleClose.jpg"
              alt="토글 닫힘"
              width="5"
              height="2"
            />
          )}
          {isTapOpen && (
            <Image
              style={{ display: "inline-block" }}
              src="/toggleOpen.jpg"
              alt="토글 열림"
              width="5"
              height="2"
            />
          )}
        </AwaitReqMember>
        {isTapOpen && (
          <div>
            <CenterMember>
              <MemberName>맥도날드 회원님</MemberName>
              <AlertResend>알림 재전송</AlertResend>
            </CenterMember>
            <CenterMember>
              <MemberName>나득근 회원님</MemberName>
              <AlertResend>알림 재전송</AlertResend>
            </CenterMember>
          </div>
        )}
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
