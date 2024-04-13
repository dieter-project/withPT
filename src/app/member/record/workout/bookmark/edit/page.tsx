"use client";

import PageTitle from "@/components/PageTitle";
import { Button } from "@/styles/Button";
import { CategoryPartList } from "@/styles/CategoryPartList";
import { Input, InputRowWrap, InputWrap } from "@/styles/Input";
import { BaseContentWrap, FormWrap } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { ToggleButton } from "@/styles/TogglButton";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const BookmarkButton = styled(Button)`
  margin-bottom: 1.5rem;
`;

const BookmarkSaveToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;
const page = () => {
  const title = "운동 입력";
  const [inputData, setInputData] = useState({
    name: "",
    category: "",
    part: "anaerobic",
    content: "",
  });

  return (
    <>
      <PageTitle title={title} />
      <BaseContentWrap>
        {/* <BookmarkButton variant='outline'>북마크에서 가져오기</BookmarkButton> */}
        <FormWrap>
          <LabelTitle>운동명</LabelTitle>
          <Input type="text" placeholder="제목을 입력하세요" />
        </FormWrap>
        <FormWrap>
          <LabelTitle>분류</LabelTitle>
          <CategoryPartList>
            <li>유산소</li>
            <li className="active">무산소</li>
            <li>스트레칭</li>
          </CategoryPartList>
        </FormWrap>
        <FormWrap>
          <LabelTitle>부위</LabelTitle>
          <CategoryPartList>
            <li>전신</li>
            <li>팔</li>
            <li>복근</li>
            <li className="active">하체</li>
            <li>등</li>
            <li>어깨</li>
          </CategoryPartList>
        </FormWrap>
        <FormWrap>
          <LabelTitle>운동 내용</LabelTitle>
          <InputRowWrap>
            {inputData.part === "aerobic" ? (
              <InputWrap>
                <Input type="text" />
                <span>분</span>
              </InputWrap>
            ) : inputData.part === "anaerobic" ? (
              <>
                <InputWrap>
                  <Input type="text" />
                  <span>kg</span>
                </InputWrap>{" "}
                x
                <InputWrap>
                  <Input type="text" />
                  <span>회</span>
                </InputWrap>{" "}
                x
                <InputWrap>
                  <Input type="text" />
                  <span>set</span>
                </InputWrap>
              </>
            ) : (
              <InputWrap>
                <Input type="text" />
                <span>분</span>
              </InputWrap>
            )}
          </InputRowWrap>
        </FormWrap>
        {/* <BookmarkSaveToggle>
          <LabelTitle>북마크에 저장하기</LabelTitle>
          <ToggleButton>
            <input role="switch" type="checkbox" />
          </ToggleButton>
        </BookmarkSaveToggle> */}
        <div>
          <Button variant="primary">수정하기</Button>
        </div>
      </BaseContentWrap>
    </>
  );
};

export default page;
