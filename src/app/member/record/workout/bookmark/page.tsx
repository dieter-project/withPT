'use client';

import Header from '@/components/Header';
import { SettingPopup } from '@/components/SettingPopup';
import { Button } from '@/styles/Button';
import { Checkbox } from '@/styles/Input';
import { BaseContentWrap, ButtonAreaFixed } from '@/styles/Layout';
import { ExclamationMark, LabelTitle } from '@/styles/Text';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const BookmarkList = styled.div`
  ul {
    li {
      padding: 1rem 0;
      border-top: 1px solid var(--border-gray);
      display: flex;
      align-items: center;
      > div:first-child {
        margin-right: 1.2rem;
      }
    }
  }
`

const NameText = styled.div`
  font-size: var(--font-l);
  font-weight: var(--font-semibold);
`

const DetailText = styled.div`
  display: flex;
  div {
    font-size: var(--font-s);
    color: var(--font-gray700);
  }
`

const EmptyBookmark = styled.div`
  width: 100%;
  height: calc(100vh - (4.375rem + 3rem + 5.1rem)); // - 네비게이션 높이, 헤더 높이, 버튼 높이
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--font-secondary);

  > div {
    &:first-of-type {
      font-weight: var(--font-semibold);
      margin: 0.5rem 0;
    }
    &:last-of-type {
      font-weight: var(--font-regular);
    }
  }
`

type BookmarkPayload = {
  title: string | null,
  weight: number | null,
  set: number | null,
  times: number | null,
  hour: number | null,
  bodyPart: string | null,
  exerciseType: string | null,
}

const page = () => {
  const [deleteMode, setDeleteMode] = useState(false)
  const [bookmarks, setBookmarks] = useState<BookmarkPayload[]>([])
  const title = `운동북마크 ${deleteMode ? "삭제" : ""}`
  const settingOption = ['운동 추가하기', '운동 삭제하기']

  const router = useRouter()

  const handleGetBookmark = async () => {
    
  }
  
  useEffect(() => {
    handleGetBookmark()
    setBookmarks([
      ...bookmarks,
      {
        title: "레그프레스",
        weight: 35,
        set: 3,
        times: 12,
        hour: null,
        bodyPart: null,
        exerciseType: null,
      },
      {
        title: "힙 어브덕션",
        weight: 35,
        set: 3,
        times: 12,
        hour: null,
        bodyPart: null,
        exerciseType: null,
      }
    ])
  }, [])
  return (
    <>
      <SettingPopup settingOption={settingOption}/>
      <Header 
        back={true} 
        title={title} 
        setting={true}
      />
      <BaseContentWrap>
        {bookmarks.length > 0
          ? <>
            <LabelTitle>운동 종류</LabelTitle>
            <BookmarkList>
              <ul>
                {bookmarks?.map((bookmark, index) => {
                  return (
                    <li key={index}>
                      {deleteMode &&
                        <Checkbox>
                          <input type="checkbox" />
                        </Checkbox>}
                      <div>
                        <NameText>{bookmark.title}</NameText>
                        <DetailText>
                          <div>{bookmark.title}</div>
                          <div>{bookmark.weight}kg</div>
                          <div>x {bookmark.times}회</div>
                          <div>x {bookmark.set}set</div>
                        </DetailText>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </BookmarkList>
          </>
          : <EmptyBookmark>
              <ExclamationMark>!</ExclamationMark>
              <div>북마크에 등록된 운동이 없어요.</div>
              <div>회원님께서 자주 하는 운동을 하단 추가하기를 통해 직접 등록해 주세요!</div>
            </EmptyBookmark>
        }
      </BaseContentWrap>
      <ButtonAreaFixed nav={true.toString()}>
        <Button variant='primary' onClick={() => router.push('/member/record/workout/bookmark/register')}>북마크 등록하기</Button>
      </ButtonAreaFixed>
    </>
  )
}

export default page