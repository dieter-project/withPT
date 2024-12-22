import React from "react";
import { SearchBarWrap, SearchIcon, SearchBarInput } from "./style";
import searchIcon from "public/Trainer/icons/searchLightGray.png";

interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder = "검색",
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <SearchBarWrap>
        <SearchIcon src={searchIcon} alt="검색 회색 돋보기 아이콘" />
        <SearchBarInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </SearchBarWrap>
    </form>
  );
};

export default SearchBar;
