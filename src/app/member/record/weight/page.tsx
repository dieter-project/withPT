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
import { BodyInfo, BodyInfoRecordRequest, Weight, WeightRecordRequest } from '@/types/member/record';
import { getBody, postBodyImage, postWeight } from '@/services/member/body';
import { Skeleton } from 'antd';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const page = () => {
  const [weightInput, setWeightInput] = useState<WeightRecordRequest>({
    weight: 0,
    uploadDate: todayDate
  })

  const [bodyInfoInput, setBodyInfoInput] = useState<BodyInfoRecordRequest>({
    bmi: 0,
    bodyFatPercentage: 0,
    skeletalMuscle: 0,
    uploadDate: todayDate
  })
  const [todayBodyInfos, setTodayBodyInfos] = useState<{
    weights: Weight[],
    bodyInfo: BodyInfo
  }>()
  const [displayModal, setDisplayModal] = useState(false);
  const [files, setFiles] = useState<File[]>([])
  const [isFocus, setIsFocus] = useState(false)
  const [showBtn, setShowBtn] = useState(false)
  const router = useRouter()
  const fileRef = useRef<null | HTMLInputElement>(null);

  const title = '체중'

  const handleGetBodyInfo = async () => {
    try {
      const { data: { data } } = await getBody(todayDate);
      console.log('data: ', data);
      setTodayBodyInfos(data)
    } catch (error) {
      console.log('error: ', error);
    }
  }


  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowBtn(true)
    const weight = event.target.value.replace(/[^0-9]/g, "")
    setWeightInput({
      ...weightInput,
      weight: Number(weight)
    })
  }

  const handleWeightSave = async () => {
    const response = await postWeight({
      uploadDate: todayDate,
      weight: weightInput.weight
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
      setFiles(prev => [...prev, ...fileArray])
    }
  }

  useEffect(() => {
    if (files.length > 0) {
      const formData = new FormData();
      files.forEach((file, idx) => {
        formData.append('files', file)
      })
      handleBodyPhotoSubmit(formData)
    }
  }, [files])

  const handleBodyPhotoSubmit = async (files: FormData) => {
    const response = await postBodyImage(files)
    console.log('response: ', response);
  }

  useEffect(() => {
    if (todayBodyInfos) {
      setWeightInput(prev => ({
        ...prev,
        weight: todayBodyInfos.weights[0]?.weight,
        uploadDate: todayBodyInfos.weights[0]?.recentUploadDate
      }))
      setBodyInfoInput(prev => ({
        ...prev,
        bmi: todayBodyInfos.bodyInfo.bmi,
        bodyFatPercentage: todayBodyInfos.bodyInfo.bodyFatPercentage,
        skeletalMuscle: todayBodyInfos.bodyInfo.skeletalMuscle,
        uploadDate: todayBodyInfos.bodyInfo.recentUploadDate
      }))
    }
  }, [todayBodyInfos])

  useEffect(() => {
    handleGetBodyInfo()
  }, [])

  return (
    <>
      {displayModal && <WeightEditModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        bodyInfo={bodyInfoInput}
        setBodyInfo={setBodyInfoInput}
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
            {todayBodyInfos
              ? <div className='recent-date'>최근기록 {todayBodyInfos.weights[0]?.recentUploadDate && format(new Date(todayBodyInfos.weights[0].recentUploadDate), 'MM월 dd일')}</div>
              : <div className='recent-date'>최근기록이 없습니다</div>}
          </TitleWrap>
          <WeightBox variant='purple'>
            <WeightInput isFocus={isFocus}>
              <input
                type="text"
                value={weightInput.weight}
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
            {todayBodyInfos
              ? <div className='recent-date'>최근기록 {format(new Date(todayBodyInfos.bodyInfo.recentUploadDate), 'MM월 dd일')}</div>
              : <div className='recent-date'>최근기록이 없습니다</div>}
          </TitleWrap>
          <WeightDetail>
            {bodyInfoInput.skeletalMuscle > 0
              ? <>
                <AddDetailButton variant='purple' onClick={() => setDisplayModal(true)}>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionValueText>{bodyInfoInput.skeletalMuscle} kg</CompositionValueText>
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
            {bodyInfoInput.bodyFatPercentage > 0
              ? <>
                <AddDetailButton variant='purple' onClick={() => setDisplayModal(true)}>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionValueText>{bodyInfoInput.bodyFatPercentage} %</CompositionValueText>
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
            {bodyInfoInput.bmi > 0
              ? <>
                <AddDetailButton variant='purple' onClick={() => setDisplayModal(true)}>
                  <PlusRound>
                    <Plus fill="white" width="0.75rem" height="0.75rem" />
                  </PlusRound>
                  <CompositionValueText>{bodyInfoInput.bmi} Kg</CompositionValueText>
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