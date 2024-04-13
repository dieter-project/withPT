'use client';

import PageTitle from '@/components/PageTitle';
import { TimeModal } from '@/components/TimeModal';
import { AddImgButton } from '@/styles/AddButton';
import { Button } from '@/styles/Button';
import { CategoryPartList } from '@/styles/CategoryPartList';
import { BaseContentWrap, ContentSection } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { MealImgWrap, MealList, MealTime } from './style';


const page = () => {
  const title = "식단 입력";
  const [modalOpen, setModalOpen] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [slideUpModal, setSlideUpModal] = useState(false);

  const router = useRouter()
  
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
            <Button variant='outline' onClick={() => router.push('/member/record/meal/register/add')}>추가하기</Button>
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
