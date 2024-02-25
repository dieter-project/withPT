"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import beforePage from "../../../../../public/icons/beforePage.png";
import settingTabImg from "../../../../../public/Trainer/settingTab.png";
import setting from "../../../../../public/Trainer/setting.jpg";

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
  height: 3.62rem;
  z-index: 100;
  padding: 0 1.25rem;
`;

const MainTitle = styled.h4`
  font-size: var(--font-xl);
  font-weight: 600;
  margin: 0 auto;
`;

const SettingImg = styled(Image)`
  display: inline-block;
`;

const SettingTabImg = styled(Image)`
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
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  padding: 0.3rem;
  color: var(--primary);
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
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  color: var(--primary);
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

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TabItem = styled.button`
  font-size: var(--font-l);
  cursor: pointer;
  width: 100%;
  padding-bottom: 0.59rem;
`;

const MemberSearchInput = styled.input`
  width: 100%;
  margin-top: 1.12rem;
  padding: 0.62rem 0.88rem;
  background-color: var(--purple50);
  font-size: 1rem;
  font-weight: 400;
  border: none;
`;

const TotalClassCount = styled.span`
  color: var(--font-gray600);
`;

export default function ManageMember() {
  const [activeTab, setActiveTab] = useState("members");
  const [isTapOpen, setIsTapOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [showCheckboxes, setShowCheckboxes] = useState(false);

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "맥도날드 회원님",
      checked: false,
      remaining: 10,
      total: 20,
    },
    { id: 2, name: "버거킹 회원님", checked: false, remaining: 5, total: 15 },
    // ... 다른 회원 데이터들
  ]);

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  const toggleTap = () => {
    setIsTapOpen(!isTapOpen);
  };

  const toggleSetting = () => {
    setIsSettingOpen(!isSettingOpen);
  };

  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };
  const handleCheckboxChange = id => {
    setMembers(prevMembers =>
      prevMembers.map(member =>
        member.id === id ? { ...member, checked: !member.checked } : member,
      ),
    );
  };

  const handleRemoveMembers = () => {
    const selectedMembers = members.filter(member => member.checked);
    // 선택된 회원을 삭제하는 로직을 구현하세요 (예: 서버에 요청을 보내는 등)
    console.log("삭제할 회원:", selectedMembers);
    setMembers(prevMembers => prevMembers.filter(member => !member.checked));
    setShowCheckboxes(false); // 회원을 삭제한 후 체크박스 감추기
  };

  const router = useRouter();

  return (
    <MainContainer>
      <MainHeader>
        <button onClick={() => router.back()}>
          <Image
            style={{ display: "inline-block" }}
            src={beforePage}
            alt="이전 페이지 이미지"
            width="25"
            height="25"
          />
        </button>
        <MainTitle>아자아자 피트니스 센터</MainTitle>
        <div style={{ position: "relative" }}>
          <SettingImg
            src={setting}
            alt="설정 이미지"
            width="20"
            height="25"
            onClick={toggleSetting}
          />
        </div>
        {isSettingOpen && (
          <>
            <SettingTabImg
              src={settingTabImg}
              alt="설정 하단 탭 이미지"
              width="150"
              height="150"
            />
            <SettingTopTxt>회원 정보 수정</SettingTopTxt>
            <SettingUnderTxt>회원 해제하기</SettingUnderTxt>
          </>
        )}
      </MainHeader>
      <ManageContentWrap>
        <TabContainer>
          <TabItem
            onClick={() => handleTabChange("members")}
            style={{
              borderBottom:
                activeTab === "members" ? "1px solid black" : "none",
            }}
          >
            회원 목록{" "}
            <span
              style={{
                color: activeTab === "members" ? "blue" : "black",
              }}
            >
              12
            </span>
          </TabItem>
          <TabItem
            onClick={() => handleTabChange("waiting")}
            style={{
              borderBottom:
                activeTab === "waiting" ? "1px solid black" : "none",
            }}
          >
            대기 회원{" "}
            <span
              style={{
                color: activeTab === "waiting" ? "blue" : "black",
              }}
            >
              5
            </span>
          </TabItem>
        </TabContainer>
        <div>
          {activeTab === "members" && (
            <>
              <div>
                <MemberSearchInput
                  type="text"
                  placeholder="검색"
                ></MemberSearchInput>
              </div>

              <CenterMember>
                <MemberName>맥도날드 회원님</MemberName>
                <NeedMoreInfo>상세정보 입력 필요</NeedMoreInfo>
              </CenterMember>
              <CenterMember>
                <MemberName>버거킹 회원님</MemberName>
                <div>
                  <span>잔여 : 16회</span>
                  <TotalClassCount> / 36회</TotalClassCount>
                </div>
              </CenterMember>
              <CenterMember>
                <MemberName>신형만 회원님</MemberName>
                <div>
                  <span>잔여 : 16회</span>
                  <TotalClassCount> / 36회</TotalClassCount>
                </div>
              </CenterMember>
              <CenterMember>
                <MemberName>김땡땡 회원님</MemberName>
                <div>
                  <span>잔여 : 16회</span>
                  <TotalClassCount> / 36회</TotalClassCount>
                </div>
              </CenterMember>
              <CenterMember>
                <MemberName>아자아자 회원님</MemberName>
                <div>
                  <span>잔여 : 16회</span>
                  <TotalClassCount> / 36회</TotalClassCount>
                </div>
              </CenterMember>
            </>
          )}
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
        {activeTab === "waiting" && (
          <>
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
          </>
        )}
      </ManageContentWrap>
    </MainContainer>
  );
}

// {activeTab === "members" && (
//   <>
//     <div>
//       <MemberSearchInput type="text" placeholder="검색" />
//     </div>

//     {showCheckboxes && (
//       <div>
//         {members.map((member) => (
//           <CenterMember key={member.id}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={member.checked}
//                 onChange={() => handleCheckboxChange(member.id)}
//               />
//               <MemberName>{member.name}</MemberName>
//               <span>잔여: {member.remaining}회 / {member.total}회</span>
//             </label>
//           </CenterMember>
//         ))}
//       </div>
//     )}

//     <div>
//       <SettingUnderTxt onClick={toggleCheckboxes}>
//         회원해제
//       </SettingUnderTxt>
//     </div>

//     {showCheckboxes && (
//       <div>
//         <button onClick={handleRemoveMembers}>회원해제</button>
//       </div>
//     )}
//   </>
// )}
