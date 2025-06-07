"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import ContentHeader from "@/components/trainer/molecules/header/Header";

const ContentInnerBody = styled.div``;

const RegisterAllWrap = styled.div`
  margin-bottom: 2rem;
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

const RegisterWrap = styled.div`
  padding: 1.8rem 0;
  border-bottom: 1px solid var(--border-darkgray);
`;

export default function ModifyCareer() {
  const title = "경력";
  const [centerName, setCenterName] = useState(null);
  const [plusFunction, setPlusFunction] = useState(() => handlePlusClick);
  const [registerWraps, setRegisterWraps] = useState([
    <RegisterAllWrap key={0} />,
  ]);

  const handlePlusClick = () => {
    const newRegisterWrap = <RegisterAllWrap key={registerWraps.length} />;
    setRegisterWraps(prevState => [...prevState, newRegisterWrap]);
  };

  return (
    <div>
      <ContentHeader
        title={title}
        variant="plus"
        onPlusClick={handlePlusClick}
      />
      <div style={{ paddingTop: "3rem" }}>
        <ContentInnerBody>
          {registerWraps.map((registerWrap, index) => (
            <RegisterWrap key={index}>
              <RegisterItemWrap>
                <RegisterContentTitle>센터</RegisterContentTitle>
                <div>센터이름</div>
              </RegisterItemWrap>
              <RegisterItemWrap>
                <RegisterContentTitle>직책</RegisterContentTitle>
                <input name="name" type="text" required />
              </RegisterItemWrap>
              <RegisterItemWrap>
                <RegisterContentTitle>기간</RegisterContentTitle>
                <div>
                  <div>
                    응?
                  </div>
                  <div>
                    응?
                  </div>
                </div>
              </RegisterItemWrap>
              <RegisterItemWrap>
                <RegisterContentTitle>기간</RegisterContentTitle>
                <div>
                  <div>
                    응?
                  </div>
                  <div>
                    응?
                  </div>
                  <div>재직중</div>
                </div>
              </RegisterItemWrap>
              <Link
                href={`/trainer/mypage/edit/career/modifycareer/editpage/${index}`}
              >
                <Button $variant="outlinegray">수정하기</Button>
              </Link>
            </RegisterWrap>
          ))}
        </ContentInnerBody>
      </div>
    </div>
  );
}
