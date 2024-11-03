"use client";
import { useState, useEffect } from "react";
import { api } from "@/utils/axios";
import styled from "styled-components";
import Link from "next/link";
import { startOfWeek, addDays, format } from "date-fns";
import Image from "next/image";
import arrowRightIcon from "../../../../../../../public/Trainer/icons/arrowRightGray.png";
import ContentHeader from "@/components/TrainerPageTitle";
import { ListButton } from "@/styles/Trainer/TrainerButton";

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

  const getResponseTest = async () => {
    try {
      const response = await api.get(`/api/v1/gyms/2/members/search?name=jane`);
      // const responseStatus = response.data.status;
      // const responseData = response?.data;
      console.log("통신 결과", response);
      //   if (responseStatus === "success") {
      //     console.log(responseData);
      //   }
    } catch (error) {
      console.log("error fetching", error);
    }
  };

  useEffect(() => {
    getResponseTest();
  }, []);

  return (
    <MainContainer>
      <ContentHeader title={title}></ContentHeader>
      <ManageContentWrap>
        <ManageMemberWrap>
          <ManageTitleWrap>
            <ManageTitle>아자아자 피트니스 센터</ManageTitle>
          </ManageTitleWrap>

          <MemberSearchInput type="text" placeholder="검색"></MemberSearchInput>
        </ManageMemberWrap>
      </ManageContentWrap>
    </MainContainer>
  );
}
