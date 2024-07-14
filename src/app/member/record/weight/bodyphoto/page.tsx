'use client';

import PageHeader from '@/components/PageHeader';
import { BodyPhotoModal } from '@/components/member/record/BodyPhotoModal';
import { Checkbox } from '@/styles/Input';
import { BaseContentWrap } from '@/styles/Layout';
import { LabelTitle } from '@/styles/Text';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const PhotoGrid = styled.ul`
  display: grid;
  gap: 4px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  li {
    background-color: var(--purple50);
    height: 130px;
    cursor: pointer;
    position: relative;
    div {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`

const DozenIcon = styled.span`
  display: block;
  width: 0.9375rem;
  height: 0.9375rem;
  background: url('/svgs/icon_dozen.svg');
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`

const PhotoCheckbox = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  input[type="checkbox"] {
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid var(--font-gray500);
    border-radius: 6px;
    background-color: rgba(255,255,255,0.5);
  }

  input[type="checkbox"]:checked {
    border: none;
    background: url(/svgs/icon_checked.svg) no-repeat;
    background-color: var(--primary);
    background-position: center;
  }
`

interface BodyPhoto {
  uploadDate: string,
  url: string[]
}


const page = () => {
  const title = '눈바디 히스토리'
  const [bodyphoto, setBodyPhoto] = useState([
    {
      uploadDate: "2024-03-08",
      url: [
        "https://flexible.img.hani.co.kr/flexible/normal/970/580/imgdb/child/2024/0129/17064911312214_20240123502746.jpg",
        "https://flexible.img.hani.co.kr/flexible/normal/970/580/imgdb/child/2024/0129/17064911312214_20240123502746.jpg",
        "https://flexible.img.hani.co.kr/flexible/normal/970/580/imgdb/child/2024/0129/17064911312214_20240123502746.jpg"
      ]
    },
    {
      uploadDate: "2024-03-08",
      url: [
        "https://flexible.img.hani.co.kr/flexible/normal/970/580/imgdb/child/2024/0129/17064911312214_20240123502746.jpg"
      ]
    },
    {
      uploadDate: "2024-03-08",
      url: [
        "https://flexible.img.hani.co.kr/flexible/normal/970/580/imgdb/child/2024/0129/17064911312214_20240123502746.jpg"
      ]
    },
    {
      uploadDate: "2024-03-08",
      url: [
        "https://flexible.img.hani.co.kr/flexible/normal/970/580/imgdb/child/2024/0129/17064911312214_20240123502746.jpg"
      ]
    },
    {
      uploadDate: "2024-03-08",
      url: [
        "https://flexible.img.hani.co.kr/flexible/normal/970/580/imgdb/child/2024/0129/17064911312214_20240123502746.jpg"
      ]
    },
  ])
  const [displayModal, setDisplayModal] = useState(false)
  const [photo, setPhoto] = useState<null | string[]>(null)
  
  
  const handlePopupShow = (url: string[]) => {
    setDisplayModal(true)
    setPhoto(url)
  }
  
  return (
    <>
    {displayModal && 
    <BodyPhotoModal 
      photo={photo}
      setDisplayModal={setDisplayModal}
    />}
      <PageHeader title={title}/>
      <BaseContentWrap>
        <PhotoGrid>
          {bodyphoto?.map((photo, index) => {
            return (
              <li key={index} onClick={() => handlePopupShow(photo.url)}>
                <div>
                  <PhotoCheckbox>
                    <input type="checkbox" />
                  </PhotoCheckbox>
                  <img src={photo.url[0]} alt="" />
                  { photo?.url.length > 1 && <DozenIcon/> }
                </div>
              </li>
            )
          })}
        </PhotoGrid>
      </BaseContentWrap>
    </>
  )
}

export default page