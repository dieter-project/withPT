"use client";

import PageHeader from "@/components/member/layout/PageHeader";
import { api } from "@/utils/axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Timeline from "../../../../../public/svgs/icon_timeline.svg";
import { LabelTitle } from "@/styles/Text";
import { BaseContentWrap, ContentSection, RoundBox } from "@/styles/Layout";
import { getPersonalTrainerAwards, getPersonalTrainerCareers, getPersonalTrainerCertificates, getPersonalTrainerEducation } from "@/services/member/training";

const InfoWrap = styled(RoundBox)`
  li {
    display: flex;
    gap: 0.625rem;
    align-items: center;
    justify-content: space-between;
    font-size: var(--font-xs);
    > div {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5rem;
    }
    > div:first-child {
      flex: 1;
    }
    > div:last-child {
      flex: 1;
      text-align: right;
    }
  }

  .more-view {
    border-top: 1px solid var(--border-gray300);
    font-size: var(--font-s);
    font-weight: var(--font-semibold);
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 0.75rem;
    padding-top: 0.5rem;
    &::after {
      content: "";
      display: block;
      width: 0.5rem;
      height: 0.5rem;
      border-right: 1px solid var(--black);
      border-bottom: 1px solid var(--black);
      transform: rotate(45deg);
      margin-top: 4px;
      margin-left: 0.5rem;
    }
  }
`;

const LicenseWrap = styled(InfoWrap)`
  li {
    > div:first-child {
      flex: 1;
    }
    > div:last-child {
      flex: 4;
    }
  }
`;

const page = ({ params }: { params: { id: number } }) => {
  let title = "트레이너";
  const trainerId = params.id;
  const [education, setEducation] = useState();
  const [certificates, setCertificates] = useState();
  const [careers, setCareers] = useState();
  const [pageable, setPageable] = useState({
    page: 0,
    size: 1,
    sort: [],
  });

  useEffect(() => {
    console.log("trainerId: ", trainerId);
    handleGetTrainer();
  }, []);

  const handleGetTrainer = async () => {
    try {
      const [eduResponse, certResponse, carResponse] = await Promise.all([
        getPersonalTrainerEducation(trainerId, pageable),
        getPersonalTrainerCertificates(trainerId, pageable),
        getPersonalTrainerCareers(trainerId, pageable),
      ]);
      setEducation(eduResponse.data.data)
      setCertificates(certResponse.data.data)
      setCareers(carResponse.data.data)
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <PageHeader back={true} title={title} />
      <BaseContentWrap>
        <ContentSection>
          <LabelTitle>경력 입력</LabelTitle>
          <InfoWrap variant="purple">
            <ul>
              <li>
                <div>2022.08 ~ 현재</div>
                <div>아자아자 피트니스 센터장</div>
              </li>
              <li>
                <div>2022.08 ~ 2022.05</div>
                <div>바디포커스 PT 팀장</div>
              </li>
              <li>
                <div>2022.08 ~ 현재</div>
                <div>엑슬휘트니스 PT</div>
              </li>
            </ul>
            <div className="more-view">
              <div>더보기</div>
              <span></span>
            </div>
          </InfoWrap>
        </ContentSection>
        <ContentSection>
          <LabelTitle>자격증/수상/교육</LabelTitle>
          <LicenseWrap variant="purple">
            <ul>
              <li>
                <div>2023.03</div>
                <div>스포츠지도자 2급 보디빌딩 / 문화체육관광부</div>
              </li>
              <li>
                <div>2023.03</div>
                <div>체형분석과 운동처방 PART 1,2 / 박시현 아카데미</div>
              </li>
              <li>
                <div>2023.03</div>
                <div>운동해결전략 및 운동처방 교육 / 한국인재교육원</div>
              </li>
            </ul>
            <div className="more-view">
              <div>더보기</div>
              <span></span>
            </div>
          </LicenseWrap>
        </ContentSection>
        <ContentSection>
          <LabelTitle>학력사항</LabelTitle>
          <InfoWrap variant="purple">
            <ul>
              <li>
                <div>2023. 03</div>
                <div>경희대학교 학사</div>
              </li>
            </ul>
          </InfoWrap>
        </ContentSection>
      </BaseContentWrap>
    </>
  );
};

export default page;
