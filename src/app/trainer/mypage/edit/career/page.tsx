"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import ContentHeader from "@/components/TrainerPageTitle";
import JoinStep from "@/components/trainer/TrSignUpStep";
import { Container, ContentBody } from "@/styles/TrainerLayout";
import Footer from "@/components/TrainerFooter";
import ModalCloseXButtonImg from "../../../../../../public/Trainer/Modal/close-line.png";
import showMoreIcon from "../../../../../../public/Trainer/Mypage/show-more-icon.png";
import searchIconImg from "../../../../../../public/searchLight.png";
import checkIconPurple from "../../../../../../public/Trainer/checkIconPurple.png";

const ContentInnerBody = styled.div``;

const SignupStepInfo = styled.p`
  font-size: var(--font-xxxl);
  font-weight: 600;
  color: #222;
`;

const SignupStepInfoSub = styled.p`
  font-size: var(--font-m);
  color: var(--font-gray700);
`;

const RegisterFormWrap = styled.div`
  height: 3.5rem;
  margin-bottom: 1.5rem;
`;

const FormTitle = styled.h4`
  font-size: var(--font-l);
  margin-bottom: 0.2rem;
`;

const TrRegisItemWrap = styled.div`
  color: var(--font-gray400);
`;

const SignupButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  line-height: 3.5rem;
  background-color: var(--purple50);
  padding: 0.3rem 0.5rem;
  font-size: var(--font-m);
`;

const RegisterStatus = styled.div`
  display: flex;
  align-items: center;
`;

const RegisterMessage = styled.span`
  color: var(--primary);
`;

const SelectedItemDay = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedItemTime = styled.div``;

const OverLapErrorMessage = styled.div``;

const ScheduleFlexWrap = styled.div`
  border: 1px solid var(--font-gray400);
  border-radius: 0.5rem;
  padding: 1rem 1.19rem;
`;

const ScheduleFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckIcon = styled(Image)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.38rem;
`;

const RegisterAllWrap = styled.div`
  margin-bottom: 2rem;
`;

const RegisterTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RegisterTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.63rem;
`;

const RegisterModify = styled(Link)`
  font-size: var(--font-xs);
  color: var(--font-gray700);
`;

const PlusIcon = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--font-secondary);
  text-align: center;
`;

const SearchIcon = styled(Image)`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
`;

const TrainerResume = styled.div`
  padding: 0rem 0.94rem 0.64rem 0.94rem;
  background-color: var(--purple50);
  /* border-radius: 0.5rem; */
`;

const TrainerResumeAward = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

const ShowMoreButton = styled.button`
  width: 100%;
  text-align: center;
  border-top: 1px solid var(--border-gray);
  padding-top: 0.56rem;
`;

const ShowMoreImg = styled(Image)`
  display: inline-block;
  margin-left: 0.44rem;
`;

const SignupFormWrap = styled.div`
  margin-bottom: 1rem;
`;

export default function myinfo() {
  const title = "이력관리";

  const [showMoreCareer, setShowMoreCareer] = useState(false);
  const [showMoreAwards, setShowMoreAwards] = useState(false);
  const [showMoreAcademics, setShowMoreAcademics] = useState(false);

  let careerMockData = {
    data: {
      size: 0,
      content: [
        {
          id: 0,
          centerName: "아자아자 피트니스",
          jobPosition: "센터장",
          status: "EMPLOYED",
          startOfWorkYearMonth: {
            year: 2024,
            month: "JANUARY",
            monthValue: 3,
            leapYear: true,
          },
          endOfWorkYearMonth: {
            year: 2024,
            month: "FEBURARY",
            monthValue: 2,
            leapYear: true,
          },
        },
        {
          id: 1,
          centerName: "영차 피트니스",
          jobPosition: "센터장",
          status: "EMPLOYED",
          startOfWorkYearMonth: {
            year: 2023,
            month: "JANUARY",
            monthValue: 0,
            leapYear: true,
          },
          endOfWorkYearMonth: {
            year: 2023,
            month: "JANUARY",
            monthValue: 0,
            leapYear: true,
          },
        },
        {
          id: 2,
          centerName: "귀염 피트니스",
          jobPosition: "센터장",
          status: "EMPLOYED",
          startOfWorkYearMonth: {
            year: 2023,
            month: "JANUARY",
            monthValue: 1,
            leapYear: true,
          },
          endOfWorkYearMonth: {
            year: 2023,
            month: "JANUARY",
            monthValue: 5,
            leapYear: true,
          },
        },
        {
          id: 3,
          centerName: "귀염 피트니스",
          jobPosition: "센터장",
          status: "EMPLOYED",
          startOfWorkYearMonth: {
            year: 2023,
            month: "JANUARY",
            monthValue: 1,
            leapYear: true,
          },
          endOfWorkYearMonth: {
            year: 2023,
            month: "JANUARY",
            monthValue: 5,
            leapYear: true,
          },
        },
        {
          id: 4,
          centerName: "귀염 피트니스",
          jobPosition: "센터장",
          status: "EMPLOYED",
          startOfWorkYearMonth: {
            year: 2023,
            month: "JANUARY",
            monthValue: 1,
            leapYear: true,
          },
          endOfWorkYearMonth: {
            year: 2023,
            month: "JANUARY",
            monthValue: 5,
            leapYear: true,
          },
        },
      ],
      number: 0,
      sort: {
        empty: true,
        sorted: true,
        unsorted: true,
      },
      numberOfElements: 0,
      pageable: {
        offset: 0,
        sort: {
          empty: true,
          sorted: true,
          unsorted: true,
        },
        pageSize: 0,
        paged: true,
        pageNumber: 0,
        unpaged: true,
      },
      first: true,
      last: true,
      empty: true,
    },
  };

  let awardsMockData = {
    data: {
      size: 0,
      content: [
        {
          id: 0,
          name: "스포츠지도자 2급",
          institution: "문화체육관광부",
          acquisitionYear: {
            value: 2022,
            leap: true,
          },
        },
        {
          id: 1,
          name: "스포츠지도자 2급",
          institution: "문화체육관광부",
          acquisitionYear: {
            value: 2022,
            leap: true,
          },
        },
        {
          id: 2,
          name: "스포츠지도자 2급",
          institution: "문화체육관광부",
          acquisitionYear: {
            value: 2022,
            leap: true,
          },
        },
        {
          id: 3,
          name: "스포츠지도자 2급",
          institution: "문화체육관광부",
          acquisitionYear: {
            value: 2022,
            leap: true,
          },
        },
        {
          id: 4,
          name: "스포츠지도자 2급",
          institution: "문화체육관광부",
          acquisitionYear: {
            value: 2022,
            leap: true,
          },
        },
        {
          id: 5,
          name: "스포츠지도자 2급",
          institution: "문화체육관광부",
          acquisitionYear: {
            value: 2022,
            leap: true,
          },
        },
      ],
      number: 0,
      sort: {
        empty: true,
        sorted: true,
        unsorted: true,
      },
      numberOfElements: 0,
      pageable: {
        offset: 0,
        sort: {
          empty: true,
          sorted: true,
          unsorted: true,
        },
        pageSize: 0,
        paged: true,
        pageNumber: 0,
        unpaged: true,
      },
      first: true,
      last: true,
      empty: true,
    },
  };

  let academicMockData = {
    data: {
      size: 0,
      content: [
        {
          id: 0,
          name: "경희대학교",
          major: "체육학과",
          institution: "FOUR_YEAR_UNIVERSITY",
          degree: "HIGH_SCHOOL_DIPLOMA",
          country: "string",
          enrollmentYear: {
            value: 2022,
            leap: true,
          },
          graduationYear: {
            value: 2023,
            leap: true,
          },
        },
        {
          id: 1,
          name: "경희대학교",
          major: "체육학과",
          institution: "FOUR_YEAR_UNIVERSITY",
          degree: "HIGH_SCHOOL_DIPLOMA",
          country: "string",
          enrollmentYear: {
            value: 2022,
            leap: true,
          },
          graduationYear: {
            value: 2023,
            leap: true,
          },
        },
        {
          id: 2,
          name: "경희대학교",
          major: "체육학과",
          institution: "FOUR_YEAR_UNIVERSITY",
          degree: "HIGH_SCHOOL_DIPLOMA",
          country: "string",
          enrollmentYear: {
            value: 2022,
            leap: true,
          },
          graduationYear: {
            value: 2023,
            leap: true,
          },
        },
        {
          id: 3,
          name: "경희대학교",
          major: "체육학과",
          institution: "FOUR_YEAR_UNIVERSITY",
          degree: "HIGH_SCHOOL_DIPLOMA",
          country: "string",
          enrollmentYear: {
            value: 2022,
            leap: true,
          },
          graduationYear: {
            value: 2023,
            leap: true,
          },
        },
        {
          id: 4,
          name: "경희대학교",
          major: "체육학과",
          institution: "FOUR_YEAR_UNIVERSITY",
          degree: "HIGH_SCHOOL_DIPLOMA",
          country: "string",
          enrollmentYear: {
            value: 2022,
            leap: true,
          },
          graduationYear: {
            value: 2023,
            leap: true,
          },
        },
      ],
      number: 0,
      sort: {
        empty: true,
        sorted: true,
        unsorted: true,
      },
      numberOfElements: 0,
      pageable: {
        offset: 0,
        sort: {
          empty: true,
          sorted: true,
          unsorted: true,
        },
        pageSize: 0,
        paged: true,
        pageNumber: 0,
        unpaged: true,
      },
      first: true,
      last: true,
      empty: true,
    },
  };

  return (
    <Container>
      <ContentHeader title={title} variant="withBack"></ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          {/* 경력 */}
          <RegisterAllWrap>
            <RegisterTitleWrap>
              <RegisterTitle>경력</RegisterTitle>
              {careerMockData.data.content[0] && (
                <RegisterModify
                  href="/trainer/mypage/edit/career/modifycareer"
                  passHref
                >
                  수정
                </RegisterModify>
              )}
            </RegisterTitleWrap>
            <TrainerResume>
              {careerMockData.data.content[0] ? (
                showMoreCareer ? (
                  <>
                    {careerMockData.data.content.map((schedule, index) => (
                      <TrainerResumeAward key={index}>
                        <span>
                          {schedule.startOfWorkYearMonth.year}.
                          {schedule.startOfWorkYearMonth.monthValue} ~{" "}
                          {schedule.endOfWorkYearMonth.year}.
                          {schedule.endOfWorkYearMonth.monthValue}
                        </span>
                        <span>
                          {schedule.centerName} {schedule.jobPosition}
                        </span>
                      </TrainerResumeAward>
                    ))}
                  </>
                ) : (
                  <>
                    {careerMockData.data.content
                      .slice(0, 3)
                      .map((schedule, index) => (
                        <TrainerResumeAward key={index}>
                          <span>
                            {schedule.startOfWorkYearMonth.year}.
                            {schedule.startOfWorkYearMonth.monthValue} ~{" "}
                            {schedule.endOfWorkYearMonth.year}.
                            {schedule.endOfWorkYearMonth.monthValue}
                          </span>
                          <span>
                            {schedule.centerName} {schedule.jobPosition}
                          </span>
                        </TrainerResumeAward>
                      ))}
                  </>
                )
              ) : (
                <>
                  <PlusIcon>+</PlusIcon>
                </>
              )}
            </TrainerResume>
            <TrainerResume>
              {careerMockData.data.content[0] ? (
                <>
                  <ShowMoreButton
                    onClick={() => {
                      setShowMoreCareer(!showMoreCareer);
                    }}
                  >
                    <span>{showMoreCareer ? "접기" : "더보기"}</span>
                    <ShowMoreImg
                      src={showMoreIcon}
                      alt="더보기 이미지"
                    ></ShowMoreImg>
                  </ShowMoreButton>{" "}
                </>
              ) : (
                ""
              )}
            </TrainerResume>
          </RegisterAllWrap>
          {/* 자격증/수상 */}
          <RegisterAllWrap>
            <RegisterTitleWrap>
              <RegisterTitle>자격증/수상/교육</RegisterTitle>
              {awardsMockData.data.content[0] && (
                <RegisterModify
                  href="/trainer/mypage/edit/career/modifycareer"
                  passHref
                >
                  수정
                </RegisterModify>
              )}
            </RegisterTitleWrap>
            <TrainerResume>
              {awardsMockData.data.content[0] ? (
                showMoreAwards ? (
                  <>
                    {awardsMockData.data.content.map((schedule, index) => (
                      <TrainerResumeAward key={index}>
                        <span>
                          {schedule.acquisitionYear.value} ~{" "}
                          {schedule.acquisitionYear.value}.
                          {schedule.acquisitionYear.value}
                        </span>
                        <span>{schedule.name}</span>
                      </TrainerResumeAward>
                    ))}
                  </>
                ) : (
                  <>
                    {awardsMockData.data.content
                      .slice(0, 3)
                      .map((schedule, index) => (
                        <TrainerResumeAward key={index}>
                          <span>
                            {schedule.acquisitionYear.value} ~{" "}
                            {schedule.acquisitionYear.value}.
                            {schedule.acquisitionYear.value}
                          </span>
                          <span>{schedule.name}</span>
                        </TrainerResumeAward>
                      ))}
                  </>
                )
              ) : (
                <>
                  <PlusIcon>+</PlusIcon>
                </>
              )}
            </TrainerResume>
            <TrainerResume>
              {awardsMockData.data.content[0] ? (
                <>
                  <ShowMoreButton
                    onClick={() => {
                      setShowMoreAwards(!showMoreAwards);
                    }}
                  >
                    <span>{showMoreAwards ? "접기" : "더보기"}</span>
                    <ShowMoreImg
                      src={showMoreIcon}
                      alt="더보기 이미지"
                    ></ShowMoreImg>
                  </ShowMoreButton>{" "}
                </>
              ) : (
                ""
              )}
            </TrainerResume>
          </RegisterAllWrap>
          {/* 학력*/}
          <RegisterAllWrap>
            <RegisterTitleWrap>
              <RegisterTitle>학력</RegisterTitle>
              {academicMockData.data.content[0] && (
                <RegisterModify
                  href="/trainer/mypage/edit/career/careermodify"
                  passHref
                >
                  수정
                </RegisterModify>
              )}
            </RegisterTitleWrap>
            <TrainerResume>
              {academicMockData.data.content[0] ? (
                showMoreAcademics ? (
                  <>
                    {academicMockData.data.content.map((schedule, index) => (
                      <TrainerResumeAward key={index}>
                        <span>
                          {schedule.enrollmentYear.value} ~{" "}
                          {schedule.graduationYear.value}.
                          {schedule.graduationYear.value}
                        </span>
                        <span>
                          {schedule.name} {schedule.major}
                        </span>
                      </TrainerResumeAward>
                    ))}
                  </>
                ) : (
                  <>
                    {academicMockData.data.content
                      .slice(0, 3)
                      .map((schedule, index) => (
                        <TrainerResumeAward key={index}>
                          <span>
                            {schedule.enrollmentYear.value} ~{" "}
                            {schedule.graduationYear.value}.
                            {schedule.graduationYear.value}
                          </span>
                          <span>
                            {schedule.name} {schedule.major}
                          </span>
                        </TrainerResumeAward>
                      ))}
                  </>
                )
              ) : (
                <>
                  <PlusIcon>+</PlusIcon>
                </>
              )}
            </TrainerResume>
            <TrainerResume>
              {academicMockData.data.content[0] ? (
                <>
                  <ShowMoreButton
                    onClick={() => {
                      setShowMoreAcademics(!showMoreAcademics);
                    }}
                  >
                    <span>{showMoreAcademics ? "접기" : "더보기"}</span>
                    <ShowMoreImg
                      src={showMoreIcon}
                      alt="더보기 이미지"
                    ></ShowMoreImg>
                  </ShowMoreButton>{" "}
                </>
              ) : (
                ""
              )}
            </TrainerResume>
          </RegisterAllWrap>
        </ContentInnerBody>
        <Footer />
      </ContentBody>
    </Container>
  );
}
