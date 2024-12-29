"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import ContentHeader from "@/components/trainer/molecules/Header/Header";
import { DeleteInputXbutton } from "@/styles/Trainer/TrainerInput";
import { Container, ContentBody } from "@/styles/Trainer/TrainerLayout";
import { NoIconInput } from "@/styles/Trainer/TrainerInput";
import { Button } from "@/styles/Trainer/TrainerButton";
import Footer from "@/components/trainer/organisms/Footer/TrainerFooter";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import TimeSelector from "@/components/trainer/molecules/TimeSelector/TimeSelector";

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

const RegisterItemWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const RegisterContentTitle = styled.div`
  width: 15%;
`;

const FlexWrap = styled.div`
  display: flex;
`;

export default function EditPage() {
  const title = "경력수정";
  const [centerName, setCenterName] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  return (
    <Container>
      <ContentHeader title={title} variant="withBack"></ContentHeader>
      <ContentBody>
        <ContentInnerBody>
          {/* 경력 */}
          <RegisterAllWrap>
            <RegisterItemWrap>
              <RegisterContentTitle>센터</RegisterContentTitle>
              <NoIconInput
                name="name"
                type="text"
                required
                value={centerName || ""}
                onChange={e => setCenterName(e.target.value)}
                // onChange={handleInputChange}
              ></NoIconInput>
              <DeleteInputXbutton
                onClick={() => {
                  setCenterName(null);
                }}
              >
                {" "}
              </DeleteInputXbutton>
            </RegisterItemWrap>
            <RegisterItemWrap>
              <RegisterContentTitle>직책</RegisterContentTitle>
              <NoIconInput
                name="name"
                type="text"
                required
                // value={inputData.name}
                // onChange={handleInputChange}
              ></NoIconInput>
            </RegisterItemWrap>
            <FlexWrap>
              <RegisterContentTitle>기간</RegisterContentTitle>
              <TimeSelector
                selectedYear={selectedYear}
                handleYearChange={handleYearChange}
                selectedMonth={selectedMonth}
                handleMonthChange={handleMonthChange}
              ></TimeSelector>
            </FlexWrap>
          </RegisterAllWrap>
        </ContentInnerBody>
        <Footer />
      </ContentBody>
    </Container>
  );
}
