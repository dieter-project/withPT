"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  SearchBarWrap,
  SearchIcon,
  SearchBarInput,
} from "@/styles/trainer/TrainerSearchBar";
import searchIcon from "../../../../../public/trainer/icons/searchLightGray.png";
import beforePage from "../../../../../public/icons/beforePage.png";
import settingTabBeforeImg from "../../../../../public/trainer/Header/settingTabBeforeRegion.png";
import settingTabImg from "../../../../../public/trainer/Header/settingTabTwoRegion.png";
import setting from "../../../../../public/trainer/setting.jpg";
import { api } from "@/utils/axios";

const MemberItem = ({ member, isSelected, toggleSelection }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => toggleSelection(member.id)}
      />
      {member.name}
    </li>
  );
};

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
  width: 1.5rem;
  height: 1.5rem;
`;

const SettingTabImg = styled(Image)`
  width: 140px;
  height: 90px;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
`;

const SettingTextWrap = styled.div`
  position: absolute;
  top: 4rem;
  right: 1rem;
  width: 9rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -1rem;
    right: 0;
    width: 1rem;
    height: 1rem;
    background-image: url(${settingTabBeforeImg.src});
    background-size: cover; /* 배경 이미지를 가득 채우도록 설정 *
      /* no-repeat center; */
    background-size: 100% 100%;
  }
`;

const SettingButton = styled.button`
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-gray);
`;

const MainContentWrap = styled.div`
  padding: 5rem 1.2rem 5rem;
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
  font-size: var(--font-l);
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

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
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

const RemainClassCount = styled.div`
  font-size: var(--font-m);
`;

export default function ManageMember() {
  const router = useRouter();
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

  const toggleSetting = () => {
    setIsSettingOpen(!isSettingOpen);
  };

  const [members2, setMembers2] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
  ]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [isSelectionEnabled, setIsSelectionEnabled] = useState(false);
  const [searchText, setSearchText] = useState(null);

  // 회원 선택 토글 함수
  const toggleSelection = memberId => {
    const isSelected = selectedMembers.includes(memberId);
    if (isSelected) {
      setSelectedMembers(selectedMembers.filter(id => id !== memberId));
    } else {
      setSelectedMembers([...selectedMembers, memberId]);
    }
  };

  // 해제하기 버튼 클릭 핸들러
  const handleRelease = () => {
    setIsSelectionEnabled(!isSelectionEnabled);
  };

  const getResponseTest = async () => {
    try {
      const response = await api.get(
        `/api/v1/gyms/2/personal-trainings/members/waiting`,
      );
      const responseStatus = response.data.status;
      const responseData = response.data;
      console.log("통신 결과", responseData);
      if (responseStatus === "success") {
        console.log(responseData);
      }
    } catch (error) {
      console.log("error fetching", error);
    }
  };

  useEffect(() => {
    getResponseTest();
  }, []);

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
          <SettingImg src={setting} alt="설정 이미지" onClick={toggleSetting} />
        </div>
        {isSettingOpen && (
          <>
            <SettingTextWrap>
              <SettingButton>회원 정보 수정</SettingButton>
              <SettingButton onClick={handleRelease}>
                회원 해제하기
              </SettingButton>
            </SettingTextWrap>
          </>
        )}
      </MainHeader>
      <MainContentWrap>
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
                <SearchBarWrap>
                  <SearchIcon
                    src={searchIcon}
                    alt="검색 회색 돋보기 아이콘"
                  ></SearchIcon>

                  <SearchBarInput
                    type="text"
                    name="센터 검색바"
                    placeholder="검색"
                    onChange={e => setSearchText(e.target.value)}
                  ></SearchBarInput>
                </SearchBarWrap>
              </div>

              <CenterMember>
                <MemberName>맥도날드 회원님</MemberName>
                <NeedMoreInfo>상세정보 입력 필요</NeedMoreInfo>
              </CenterMember>
              <CenterMember>
                <MemberName>버거킹 회원님</MemberName>
                <RemainClassCount>
                  <span>잔여 : 16회</span>
                  <TotalClassCount> / 36회</TotalClassCount>
                </RemainClassCount>
              </CenterMember>
              <CenterMember>
                <MemberName>신형만 회원님</MemberName>
                <RemainClassCount>
                  <span>잔여 : 16회</span>
                  <TotalClassCount> / 36회</TotalClassCount>
                </RemainClassCount>
              </CenterMember>
              <CenterMember>
                <MemberName>김땡땡 회원님</MemberName>
                <RemainClassCount>
                  <span>잔여 : 16회</span>
                  <TotalClassCount> / 36회</TotalClassCount>
                </RemainClassCount>
              </CenterMember>
              <CenterMember>
                <MemberName>아자아자 회원님</MemberName>
                <RemainClassCount>
                  <span>잔여 : 16회</span>
                  <TotalClassCount> / 36회</TotalClassCount>
                </RemainClassCount>
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

        {isSelectionEnabled && (
          <ul>
            {members.map((member, index) => (
              <MemberItem
                key={index}
                member={member}
                isSelected={selectedMembers.includes(member.id)}
                toggleSelection={toggleSelection}
              />
            ))}
          </ul>
        )}

        {!isSelectionEnabled && (
          <ul>
            {members2.map((member, i) => (
              <>
                <li key={i}> member </li>
              </>
            ))}
          </ul>
        )}
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
      </MainContentWrap>
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
