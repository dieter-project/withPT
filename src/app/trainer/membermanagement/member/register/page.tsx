"use client";
import { useState, useEffect } from "react";
import { api } from "@/utils/axios";
import styled from "styled-components";
import Link from "next/link";
import { startOfWeek, addDays, format } from "date-fns";
import Image from "next/image";
import arrowRightIcon from "../../../../../../public/Trainer/icons/arrowRightGray.png";
import ContentHeader from "@/components/trainer/molecules/header/Header";
import { ListButton } from "@/styles/Trainer/TrainerButton";
import Footer from "@/components/trainer/organisms/Footer/TrainerFooter";

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

const CenterName = styled.span`
  font-weight: 600;
`;

const ArrowRightIcon = styled(Image)`
  position: absolute;
  top: 26%;
  right: 2%;
`;

export default function MemberRegist() {
  const title = "신규회원 등록";

  const getResponseTest = async () => {
    try {
      const response = await api.get(`/api/v1/gyms/personal-trainings`);
      const responseStatus = response.data.status;
      const responseData = response.data;
      console.log("통신 결과", responseData);
      if (responseStatus === "success") {
        console.log(responseData);
      }
    } catch (error) {
      console.log("error fetching", error);
    }
  };

  useEffect(() => {
    getResponseTest();
  }, []);

  return (
    <MainContainer>
      <ContentHeader title={title} variant="withBack"></ContentHeader>
      <ManageContentWrap>
        <ManageMemberWrap>
          <ManageTitleWrap>
            <ManageTitle>센터 목록</ManageTitle>
          </ManageTitleWrap>

          <Link href="/trainer/membermanagement/member/register/search">
            <ListButton>
              <CenterName>아자 아자 피트니스 센터</CenterName>
              <ArrowRightIcon
                src={arrowRightIcon}
                alt="회원 등록 페이지 아이콘"
              />
            </ListButton>
          </Link>
          <Link href="/trainer/membermanagement/member">
            <ListButton>
              <CenterName>아자 아자 피트니스 센터</CenterName>
              <ArrowRightIcon
                src={arrowRightIcon}
                alt="회원 등록 페이지 아이콘"
              />
            </ListButton>
          </Link>
          <Link href="/trainer/membermanagement/member">
            <ListButton>
              <CenterName>아자 아자 피트니스 센터</CenterName>
              <ArrowRightIcon
                src={arrowRightIcon}
                alt="회원 등록 페이지 아이콘"
              />
            </ListButton>
          </Link>
        </ManageMemberWrap>
      </ManageContentWrap>
      <Footer />
    </MainContainer>
  );
}
