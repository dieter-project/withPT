import React, { SetStateAction } from "react";
import {
  SearchBarWrap,
  SearchBarInput,
  SearchIcon,
} from "@/styles/TrainerSearchBar";
import searchIcon from "../../../../public/Trainer/icons/searchLightGray.png";
import { styled } from "styled-components";

export const SearchCenter = () => {
  return (
    <SearchBarWrap>
      <SearchIcon src={searchIcon} alt="검색 회색 돋보기 아이콘"></SearchIcon>
      <SearchBarInput
        type="text"
        name="센터 검색바"
        placeholder="검색"
        // onChange={searchEvent}
      ></SearchBarInput>
    </SearchBarWrap>
  );
};
