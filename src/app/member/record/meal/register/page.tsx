"use client";

import PageTitle from "@/components/PageTitle";
import { TimeModal } from "@/components/TimeModal";
import { AddImgButton } from "@/styles/AddButton";
import { Button } from "@/styles/Button";
import { CategoryPartList } from "@/styles/CategoryPartList";
import { BaseContentWrap, ContentSection } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const MealTime = styled.div`
  width: 7.5rem;
  height: 40px;
  border: 1px solid var(--border-gray);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

const MealList = styled.ul`
  margin-bottom: 1.5rem;
  li {
    width: 100%;
    height: 3rem;
    background-color: var(--purple50);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.625rem;
    cursor: pointer;

    > div {
      padding: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      .amount {
        font-size: var(--font-s);
      }
    }

    .active {
      border: 1px solid var(--primary);
      background-color: var(--purple50);
      color: var(--primary);
    }
  }
`;

const MealImgWrap = styled.ul`
  li {
    width: 111px;
    height: 111px;
    border-radius: 0.5rem;
    background-color: var(--purple50);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const page = () => {
  const title = "식단 입력";
  const [modalOpen, setModalOpen] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [slideUpModal, setSlideUpModal] = useState(false);

  return (
    <>
      {displayModal && (
        <TimeModal
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          slideUpModal={slideUpModal}
          setSlideUpModal={setSlideUpModal}
        />
      )}
      <PageTitle title={title} />
      <BaseContentWrap>
        <ContentSection>
          <LabelTitle>분류</LabelTitle>
          <CategoryPartList>
            <li>아침</li>
            <li>아점</li>
            <li>점심</li>
            <li>점저</li>
            <li>저녁</li>
            <li>간식</li>
          </CategoryPartList>
        </ContentSection>
        <ContentSection>
          <LabelTitle>식사 시간</LabelTitle>
          <MealTime onClick={() => setDisplayModal(true)}>
            식사시간 입력
          </MealTime>
        </ContentSection>
        <ContentSection>
          <LabelTitle>음식 종류</LabelTitle>
          <MealList>
            <li>
              <div>
                <div>견과류</div>
                <div className="amount">20g</div>
              </div>
              <div>X</div>
            </li>
            <li>
              <div>
                <div>요거트</div>
                <div className="amount">150g</div>
              </div>
              <div>X</div>
            </li>
            <Button variant="outline" onClick={() => setModalOpen(true)}>
              추가하기
            </Button>
          </MealList>
        </ContentSection>
        <ContentSection>
          <LabelTitle>사진</LabelTitle>
          <MealImgWrap>
            <AddImgButton></AddImgButton>
          </MealImgWrap>
        </ContentSection>
        <Button variant="primary">저장하기</Button>
      </BaseContentWrap>
    </>
  );
};

export default page;
