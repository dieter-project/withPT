"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/TrainerFooter";
import stepLigntIcon from "../../../../public/Trainer/Mypage/check-step-light.png";

const MainContainer = styled.div``;

const MainHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 3rem;
  width: 100%;
  padding: 1.12rem 0;
  text-align: center;
  font-weight: 600;
  background-color: #ffffff;
  z-index: 100;
  font-size: var(--font-xl);
`;

const TrainerProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const ModifyMyInfoButton = styled(Link)`
  color: var(--border-gray2);
  font-weight: 500;
  font-size: var(--font-s);
`;

const TrainerName = styled.div`
  width: 70%;
  line-height: 1.8125rem;
  font-size: 1.375rem;
  font-weight: 600;
`;

const TrainerPic = styled.img`
  width: 30%;
  border-radius: 50%;
`;

const MainContentWrap = styled.div`
  height: 100vh;
  padding: 3.5rem 1.2rem 5rem;
  overflow: auto;
`;

const MainTitle = styled.h4`
  font-weight: bold;
  font-size: var(--font-l);
  margin-bottom: 0.75rem;
  margin-left: 0.5rem;
`;

const TrainerMainWrap = styled.div`
  margin-top: 2.19rem;
`;

const TrainerResumeTap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TrainerResume = styled.div`
  padding: 0.64rem 0.94rem;
  background-color: var(--purple50);
`;

const TrainerResumeAward = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

const NoCareerWrap = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--purple50);
  padding: 1.06rem 0.88rem 1.13rem;
`;

const NoInputCareerMessage = styled.div`
  font-size: var(--font-s);
`;

const InputCareerMessage = styled.div`
  font-size: var(--font-l);
  font-weight: 600;
`;

const CenterContentWrap = styled.div`
  margin-top: 2.88rem;
`;

const CenterList = styled.div`
  width: 30%;
  background-color: var(--purple50);
  text-align: center;
  padding: 1.3rem 0rem;
  border-radius: 0.5rem;
  font-family: 600;
`;

const CenterListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MypageCtg = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 0.8rem 0;
`;

export default function Mypage() {
  return (
    <MainContainer>
      <MainHeader>마이페이지</MainHeader>
      <MainContentWrap>
        <TrainerProfile>
          <TrainerName>
            김땡땡님! <br /> 오늘도 힘찬 하루 보내세요!
          </TrainerName>
          <TrainerPic src="#!" alt="프로필 사진"></TrainerPic>
        </TrainerProfile>
        <ModifyMyInfoButton href="trainer/mypage/edit/myinfo">
          내 정보 수정
        </ModifyMyInfoButton>
        <TrainerMainWrap>
          <TrainerResumeTap>
            <MainTitle>이력 관리</MainTitle>
          </TrainerResumeTap>

          <Link href="/trainer/mypage/edit/career">
            <TrainerResume>
              <TrainerResumeAward>
                <span>2023 .03</span>
                <span>보디빌더 대회 최우수상</span>
              </TrainerResumeAward>
              <TrainerResumeAward>
                <span>2022 .03</span>
                <span>보디빌더 대회 우수상</span>
              </TrainerResumeAward>
              <TrainerResumeAward>
                <span>2010 .03 ~ 2016 . 02</span>
                <span>보디빌더 대회 최우수상</span>
              </TrainerResumeAward>
            </TrainerResume>
          </Link>
          <Link href="/trainer/mypage/edit/career">
            <NoCareerWrap href="/trainer/mypage/edit/career">
              <div>
                <NoInputCareerMessage>
                  현재 작성된 이력이 없으세요.
                </NoInputCareerMessage>
                <InputCareerMessage>이력 입력하기</InputCareerMessage>
              </div>
              <Image src={stepLigntIcon} alt="체크" />
            </NoCareerWrap>
          </Link>
        </TrainerMainWrap>

        <CenterContentWrap>
          <MainTitle>내 센터관리</MainTitle>
          <CenterListWrap>
            <CenterList>
              아자아자
              <br />
              피트니스 센터
            </CenterList>
            <CenterList>
              으라차차
              <br />
              피트니스 센터
            </CenterList>
            <CenterList>
              득근득근
              <br />
              피트니스 센터
            </CenterList>
          </CenterListWrap>
        </CenterContentWrap>

        <MypageCtg>
          <span>공지사항</span>
          <Image src={stepLigntIcon} alt="다음 스텝으로 넘어가는 화살표" />
        </MypageCtg>
        <MypageCtg>
          <Link href="trainer/login">로그아웃</Link>
          <Image src={stepLigntIcon} alt="다음 스텝으로 넘어가는 화살표" />
        </MypageCtg>
        <MypageCtg>
          <span>계정관리</span>
          <Image src={stepLigntIcon} alt="다음 스텝으로 넘어가는 화살표" />
        </MypageCtg>
      </MainContentWrap>
      <Footer />
    </MainContainer>
  );
}
