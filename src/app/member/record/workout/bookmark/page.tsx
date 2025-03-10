"use client";

import Header from "@/components/Header";
import { SettingPopup } from "@/components/SettingPopup";
import { getBookmarks } from "@/services/member/bookmark";
import { Button } from "@/styles/Button";
import { Checkbox } from "@/styles/Input";
import { BaseContentWrap, ButtonAreaFixed } from "@/styles/Layout";
import { ExclamationMark, LabelTitle } from "@/styles/Text";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { BookmarkList, DetailText, EmptyBookmark, NameText } from "./style";
import { useDispatch } from "react-redux";
import { workoutRecordActions } from "@/redux/reducers/workoutRecordSlice";

type BookmarkPayload = {
  title: string | null;
  weight: number | null;
  set: number | null;
  times: number | null;
  hour: number | null;
  bodyPart: string | null;
  exerciseType: string | null;
};

const page = () => {
  const [deleteMode, setDeleteMode] = useState(false);
  const [bookmarks, setBookmarks] = useState<BookmarkPayload[]>([]);
  const title = `운동북마크 ${deleteMode ? "삭제" : ""}`;
  const settingOption = ["운동 추가하기", "운동 삭제하기"];

  const router = useRouter();
  const dispatch = useDispatch();

  const handleGetBookmark = async () => {
    try {
      const {
        data: { data },
      } = await getBookmarks();
      setBookmarks(data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleSelectBookmark = (bookmark: BookmarkPayload) => {
    dispatch(
      workoutRecordActions.addWorkoutState({ ...bookmark, bookmarkYn: false }),
    );
    router.push("/member/record/workout/register");
  };

  useEffect(() => {
    handleGetBookmark();
  }, []);

  return (
    <>
      <SettingPopup settingOption={settingOption} />
      <Header back={true} title={title} setting={true} />
      <BaseContentWrap>
        {bookmarks.length > 0 ? (
          <>
            <LabelTitle>운동 종류</LabelTitle>
            <BookmarkList>
              <ul>
                {bookmarks?.map((bookmark, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleSelectBookmark(bookmark)}
                    >
                      {deleteMode && (
                        <Checkbox>
                          <input type="checkbox" />
                        </Checkbox>
                      )}
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
                  );
                })}
              </ul>
            </BookmarkList>
          </>
        ) : (
          <EmptyBookmark>
            <ExclamationMark>!</ExclamationMark>
            <div>북마크에 등록된 운동이 없어요.</div>
            <div>
              회원님께서 자주 하는 운동을
              <br />
              하단 추가하기를 통해 직접 등록해 주세요!
            </div>
          </EmptyBookmark>
        )}
      </BaseContentWrap>
      {bookmarks.length < 1 && (
        <ButtonAreaFixed $nav>
          <Button
            $variant="primary"
            onClick={() =>
              router.push("/member/record/workout/bookmark/register")
            }
          >
            북마크 등록하기
          </Button>
        </ButtonAreaFixed>
      )}
    </>
  );
};

export default page;
