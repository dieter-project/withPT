"use client";

import { MealSearchModal } from "@/components/MealSearchModal";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/styles/Button";
import { Input, InputRowWrap, InputWrap } from "@/styles/Input";
import { BaseContentWrap } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { styled } from "styled-components";

const ContentsWrap = styled(BaseContentWrap)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const page = () => {
  const title = "추가하기";

  return (
    <>
      {/* <MealSearchModal/> */}
      <PageTitle title={title} />
      <ContentsWrap>
        <div>
          <div>
            <LabelTitle>종류입력</LabelTitle>
            <Input type="text" placeholder="종류를 검색해보세요" />
          </div>
          <InputRowWrap>
            <LabelTitle>그람 수</LabelTitle>
            <InputWrap>
              <Input type="text" name="" id="" className="" />
              <span>g</span>
            </InputWrap>
          </InputRowWrap>
        </div>
        <div>
          <Button variant="primary">저장하기</Button>
        </div>
      </ContentsWrap>
    </>
  );
};

export default page;
