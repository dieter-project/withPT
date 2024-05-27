"use client";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { startOfWeek, addDays, format } from "date-fns";
import Image from "next/image";
import arrowRightIcon from "../../../../../../../public/Trainer/icons/arrowRightGray.png";
import ContentHeader from "@/components/TrainerPageTitle";
import { ListButton } from "@/styles/TrainerButton";

const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const MainHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 3rem;
  background-color: #ffffff;
  padding: 1rem;
  z-index: 100;
  text-align: center;
  font-weight: bold;
`;

const ManageContentWrap = styled.div`
  padding: 3rem 1.2rem 5rem;
`;

const ManageMemberWrap = styled.div`
  margin-top: 1.5rem;
`;

const ManageTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ManageTitle = styled.h4`
  font-weight: 600;
`;

const MemberSearchInput = styled.input`
  width: 100%;
  margin-top: 1.12rem;
  padding: 0.62rem 0.88rem;
  background-color: var(--purple50);
  font-size: 1rem;
  font-weight: 400;
  border: none;
`;

export default function MemberRegistSearch() {
  const title = "회원 등록";
  return (
    <MainContainer>
      <ContentHeader title={title}></ContentHeader>
      <ManageContentWrap>
        <ManageMemberWrap>
          <ManageTitleWrap>
            <ManageTitle>아자아자 피트니스 센터</ManageTitle>
          </ManageTitleWrap>

          <MemberSearchInput type="text" placeholder="검색"></MemberSearchInput>

          <label>
            <input type="radio" name="sport" value="soccer" /> Soccer
          </label>
          <label>
            <input type="radio" name="sport" value="baseball" /> Baseball
          </label>
        </ManageMemberWrap>
      </ManageContentWrap>
    </MainContainer>
  );
}
