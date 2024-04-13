"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import beforePageImg from "../../../../../public/icons/beforePage.png";
import toggleOffButtonImg from "../../../../../public/Trainer/icons/toggleOffButton.png";
import toggleOnButtonImg from "../../../../../public/Trainer/icons/toggleOnButton.png";
import settingTabImg from "../../../../../public/Trainer/settingTab.png";
import settingImg from "../../../../../public/Trainer/setting.jpg";

const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  width: 100%;
  line-height: 3.63rem;
  z-index: 100;
  font-weight: 600;
  font-size: var(--font-xl);
  padding: 0 1.25rem;
`;

const MainTitle = styled.h4`
  font-size: var(--font-xl);
  font-weight: 600;
  margin: 0 auto;
`;

const SettingImg = styled.img`
  display: inline-block;
`;

const BeforeImage = styled(Image)``;

const SettingTabImg = styled(Image)`
  display: inline-block;
  position: absolute;
  top: 58%;
  right: 0;
`;

const ToggleImg = styled(Image)``;

const SettingTopTxt = styled.div`
  line-height: 1.69rem;
  position: absolute;
  bottom: -60%;
  right: 9%;
  font-size: var(--font-s);
  font-weight: 500;
  border-bottom: 1px solid var(--border-gray);
`;

const SettingUnderTxt = styled.div`
  position: absolute;
  line-height: 1.69rem;
  bottom: -110%;
  right: 10%;
  font-size: var(--font-s);
  font-weight: 500;
`;

const MainContentWrap = styled.div`
  padding: 5rem 1.5rem 6.2rem;
`;

const CenterMember = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 0.5rem;
  border-top: 1px solid var(--border-gray);
  border-bottom: 1px solid var(--border-gray);
`;

const MemberName = styled.span`
  font-size: var(--font-l);
  font-weight: 600;
`;

const RemainNumber = styled.span`
  color: var(--font-gray600);
  margin-left: 0.2rem;
`;

const NeedMoreInfo = styled.span`
  line-height: 2.1rem;
  font-size: var(--font-s);
  border: 1px solid var(--coral);
  border-radius: 0.5rem;
  padding: 0 0.56rem;
  color: var(--coral);
`;

const AwaitReqMember = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  color: var(--gray);
  font-weight: 600;
`;

const AlertResend = styled.span`
  font-size: var(--font-s);
  border: 1px solid var(--font-gray500);
  border-radius: 0.5rem;
  padding: 0.63rem 0.75rem;
  color: var(--font-gray700);
`;

const MemberListTit = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: 0 0.5rem;
`;

const MemberListTitBold = styled.span`
  font-size: var(--font-m);
  font-weight: 600;
  margin-right: 0.44rem;
`;

const MemberListTitLight = styled.span`
  font-size: var(--font-s);
  color: var(--border-gray2);
`;

const WaitingMemberWrap = styled.div`
  border-bottom: 1px solid var(--border-gray);
`;

const WaitingMember = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`;

const MemberCheckbox = styled.input`
  margin-right: 0.5rem;
`;

export default function ManageMember() {
  const [isTapOpen, setIsTapOpen] = useState(false);

  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);

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

  const toggleNameSelection = (name: string) => {
    const updatedSelectedNames = selectedNames.includes(name)
      ? selectedNames.filter(n => n !== name)
      : [...selectedNames, name];
    setSelectedNames(updatedSelectedNames);
  };

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  const handleDeleteMembers = () => {
    // Implement the logic to delete selected members
    console.log("Deleting members:", selectedNames);
    // Reset selected names after deletion
    setSelectedNames([]);
    // Hide checkboxes after deletion
    setShowCheckboxes(false);
  };

  return (
    <MainContainer>
      <MainHeader>
        <BeforeImage
          src={beforePageImg}
          alt="이전 페이지"
          width="24"
          height="24"
        ></BeforeImage>
        <MainTitle>아자아자 피트니스 센터</MainTitle>
        <div style={{ position: "relative" }}>
          <SettingImg
            src={settingImg}
            alt="설정 이미지"
            width="24"
            height="24"
            onClick={toggleSetting}
          />
        </div>
        {isSettingOpen && (
          <>
            <SettingTabImg
              src={settingTabImg}
              alt="설정 하단 탭 이미지"
              width="148"
              height="106"
            />
            <SettingTopTxt>회원 정보 수정</SettingTopTxt>
            <SettingUnderTxt onClick={toggleCheckboxes}>
              회원 해제하기
            </SettingUnderTxt>
          </>
        )}
      </MainHeader>

      <MainContentWrap>
        <MemberListTit>
          <MemberListTitBold>회원목록</MemberListTitBold>
          <MemberListTitLight> 총 회원 수 : 5명</MemberListTitLight>
        </MemberListTit>
        <div>
          <CenterMember>
            {showCheckboxes && (
              <MemberCheckbox
                type="checkbox"
                checked={selectedNames.includes("맥도날드 회원님")}
                onChange={() => toggleNameSelection("맥도날드 회원님")}
              />
            )}
            <MemberName>맥도날드 회원님</MemberName>
            <NeedMoreInfo>상세정보 입력 필요</NeedMoreInfo>
          </CenterMember>
          <CenterMember>
            <MemberName>버거킹 회원님</MemberName>
            <div>
              <span>잔여: 16회 /</span>
              <RemainNumber>36회</RemainNumber>
            </div>
          </CenterMember>
          <CenterMember>
            <MemberName>신형만 회원님</MemberName>
            <div>
              <span>잔여: 16회 /</span>
              <RemainNumber>36회</RemainNumber>
            </div>
          </CenterMember>
          <CenterMember>
            <MemberName>김땡땡 회원님</MemberName>
            <div>
              <span>잔여: 16회 /</span>
              <RemainNumber>36회</RemainNumber>
            </div>
          </CenterMember>
          <CenterMember>
            <MemberName>아자아자 회원님</MemberName>
            <div>
              <span>잔여: 16회 /</span>
              <RemainNumber>36회</RemainNumber>
            </div>
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
            <ToggleImg
              src={toggleOffButtonImg}
              alt="토글 아이콘"
              width="24"
              height="24"
            />
          )}
          {isTapOpen && (
            <ToggleImg
              src={toggleOnButtonImg}
              alt="토글 아이콘"
              width="24"
              height="24"
            />
          )}
        </AwaitReqMember>
        {isTapOpen && (
          <WaitingMemberWrap>
            <WaitingMember>
              <MemberName>맥도날드 회원님</MemberName>
              <AlertResend>알림 재전송</AlertResend>
            </WaitingMember>
            <WaitingMember>
              <MemberName>나득근 회원님</MemberName>
              <AlertResend>알림 재전송</AlertResend>
            </WaitingMember>
          </WaitingMemberWrap>
        )}
        <button onClick={handleDeleteMembers}>회원 해제하기</button>
      </MainContentWrap>
    </MainContainer>
  );
}
