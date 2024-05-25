'use client';

import Header from '@/components/Header';
import { BaseContentWrap, ContentSection, RoundBox } from '@/styles/Layout';
import { GoalBox } from '@/styles/RecordPage';
import { LabelTitle } from '@/styles/Text';
import React, { useEffect, useRef, useState } from 'react'
import Plus from '../../../../../public/svgs/icon_plus.svg'
import { AddImgButton } from '@/styles/AddButton';
import { useRouter } from 'next/navigation';
import {
  AddDetailButton,
  CompositionText,
  CompositionValueText,
  PlusRound,
  TitleWrap,
  WeightBox,
  WeightDetail,
  WeightInput,
  WeightSaveBtn
} from './style';
import { api } from '@/utils/axios';
import { todayDate } from '@/constants/record';
import { WeightEditModal } from '@/components/WeightEditModal';
import { FileInput } from '@/styles/Input';
import { WeightRecord } from '@/types/member/record';
import { getBody, postBodyImage, postWeight } from '@/services/member/body';

const page = () => {
  const [todayWeight, setTodayWeight] = useState<WeightRecord>({
    bmi: 0,
    bodyFatPercentage: 0,
    skeletalMuscle: 0,
    weight: 0,
    bodyRecordDate: todayDate
  })
  const [displayModal, setDisplayModal] = useState(false);
  const [files, setFiles] = useState<File[]>([])
  const [isFocus, setIsFocus] = useState(false)
  const [showBtn, setShowBtn] = useState(false)
  const router = useRouter()
  const fileRef = useRef<null | HTMLInputElement>(null);

  const title = '체중'

  const handleGetWeight = async () => {
    try {
      const { data } = await getBody(todayDate);
      console.log('data: ', data);
      if (data) {
        setTodayWeight({
          ...todayWeight,
          ...data.data
        })
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }


  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowBtn(true)
    const weight = event.target.value.replace(/[^0-9]/g, "")
    setTodayWeight({
      ...todayWeight,
      weight: Number(weight)
    })
  }

  const handleWeightSave = async () => {
    const response = await postWeight({
      bodyRecordDate: todayDate,
      weight: todayWeight.weight
    })
    console.log('response: ', response);
    setShowBtn(false)
  }

  const handleBodyPhotoClick = () => {
    if (fileRef.current) { fileRef.current.click(); }
  }

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      console.log('fileArray: ', fileArray);
      setFiles(prev => [...prev, ...fileArray])
    }
    // console.log('files: ', files);

  }

  useEffect(() => {
    if (files.length > 0) {
      const formData = new FormData();
      files.forEach((ele, idx) => {
        formData.append('files', files[idx])
      })
      handleBodyPhotoSubmit(formData)
    }
  }, [files])

  const handleBodyPhotoSubmit = async (files: FormData) => {
    const response = await postBodyImage({
      files
    })
    console.log('response: ', response);
  }

  useEffect(() => {
    handleGetWeight()
  }, [])

  return (
    <>
      {displayModal && <WeightEditModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        todayWeight={todayWeight}
        setTodayWeight={setTodayWeight}
      />}
      <Header back={true} title={title} />
      <BaseContentWrap>
        <section>
          달력
        </section>
        <ContentSection>
          <GoalBox>
            <div>
              <p>목표 체중까지 -7kg 남았어요</p>
              <div>-1kg 감량 성공했어요!</div>
            </div>
            <div>
              <img src="/images/weight_achv.png" alt="" />
            </div>
          </GoalBox>
        </ContentSection>
        <ContentSection>
          <TitleWrap>
            <LabelTitle>체중</LabelTitle>
            <div className='recent-date'>최근기록 11월 15일</div>
          </TitleWrap>
          <WeightBox variant='purple'>
            <WeightInput isFocus={isFocus}>
              <input
                type="text"
                value={todayWeight.weight}
                onChange={handleWeightChange}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
              />
              <span>kg</span>
            </WeightInput>
            {showBtn && <WeightSaveBtn $variant='primary' onClick={handleWeightSave}>저장</WeightSaveBtn>}
          </WeightBox>
        </ContentSection>
        <ContentSection>
          <TitleWrap>
            <LabelTitle>신체 정보</LabelTitle>
            <div className='recent-date'>최근기록이 없습니다</div>
          </TitleWrap>
          <WeightDetail>
            {todayWeight.skeletalMuscle > 0
              ? <>
                <AddDetailButton variant='purple' onClick={() => setDisplayModal(true)}>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionValueText>21.8%</CompositionValueText>
                  <CompositionText>골격근량</CompositionText>
                </AddDetailButton>
              </>
              : <>
                <AddDetailButton variant='purple' onClick={() => setDisplayModal(true)}>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionText>골격근량</CompositionText>
                </AddDetailButton>
              </>}
            {todayWeight.bodyFatPercentage > 0
              ? <>
                <AddDetailButton variant='purple' onClick={() => setDisplayModal(true)}>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionValueText>29.1%</CompositionValueText>
                  <CompositionText>체지방률</CompositionText>
                </AddDetailButton>
              </>
              : <>
                <AddDetailButton variant='purple' onClick={() => setDisplayModal(true)}>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionText>체지방률</CompositionText>
                </AddDetailButton>
              </>}
            {todayWeight.bmi > 0
              ? <>
                <AddDetailButton variant='purple' onClick={() => setDisplayModal(true)}>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionValueText>22.4%</CompositionValueText>
                  <CompositionText>BMI</CompositionText>
                </AddDetailButton>
              </>
              : <>
                <AddDetailButton variant='purple' onClick={() => setDisplayModal(true)}>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionText>BMI</CompositionText>
                </AddDetailButton>
              </>}
          </WeightDetail>
        </ContentSection>
        <ContentSection>
          <TitleWrap variant='bodyphoto'>
            <LabelTitle>눈바디</LabelTitle>
            <div className='bodyphoto-history' onClick={() => router.push('/member/record/weight/bodyphoto')}>눈바디 히스토리</div>
          </TitleWrap>
          <ul>
            <li>
              <div>
                <img src="" alt="" />
              </div>
            </li>
            <li>
              <AddImgButton onClick={handleBodyPhotoClick}></AddImgButton>
              <FileInput type="file" ref={fileRef} onChange={handleChangeFile} multiple />
            </li>
          </ul>
        </ContentSection>
      </BaseContentWrap>
    </>
  )
}

export default page