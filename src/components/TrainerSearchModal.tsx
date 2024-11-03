import React, { SetStateAction } from "react";
import { CloseBtn } from "@/styles/Trainer/TrainerButton";
import { Input } from "@/styles/Input";
import Image from "next/image";
import {
  SearchBarWrap,
  SearchBarInput,
} from "@/styles//Trainer/TrainerSearchBar";
import searchIcon from "../../public/Trainer/icons/searchLightGray.png";
// /Trainer/icons/searchLightGray.png";
import { styled } from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

const ModalInnerWrap = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 20px;
  border-radius: 1rem 1rem 0 0;
  transition: 0.3s;
`;

const ModalCloseXButton = styled(CloseBtn)`
  position: absolute;
  top: 1%;
  right: 2%;
`;

const ModalDimmed = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalHeader = styled.header`
  text-align: center;
  font-size: var(--font-l);
  font-weight: 700;
`;

const ModalBody = styled.div``;

const ModalContent = styled.div`
  margin: 3vh 0 2vh 0;
`;

const SearchIcon = styled(Image)`
  display: inline-block;
  width: 8%;
  line-height: 1.5rem;
`;

interface ModalProps {
  showModalContent: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchEvent: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TrainerSearchModalComponent = ({
  showModalContent,
  setIsModalOpen,
  searchEvent,
}: ModalProps) => {
  return (
    <ModalContainer>
      <ModalInnerWrap style={{ bottom: showModalContent ? "-30%" : "-100%" }}>
        <ModalHeader>헤더</ModalHeader>
        <ModalCloseXButton
          // src={ModalCloseXButtonImg}
          alt="모달을 닫는 버튼"
          onClick={() => setIsModalOpen(false)}
        />
        <ModalBody>
          <ModalContent>?</ModalContent>
        </ModalBody>
        <SearchBarWrap>
          <SearchIcon
            src={searchIcon}
            alt="검색 회색 돋보기 아이콘"
          ></SearchIcon>
          <SearchBarInput
            type="text"
            name="센터 검색바"
            placeholder="검색"
            onChange={searchEvent}
          ></SearchBarInput>
        </SearchBarWrap>
      </ModalInnerWrap>
      <ModalDimmed></ModalDimmed>
    </ModalContainer>
  );
};
