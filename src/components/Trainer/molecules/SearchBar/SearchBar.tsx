import React from "react";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";
import { styled } from "styled-components";

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
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const handleClear = () => {
    const event = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  return (
    <form onSubmit={onSubmit}>
      <SearchBarWrap>
        {!value && <Icon name="search" size={24} />}
        <SearchBarInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {value && (
          <ClearButton type="button" onClick={handleClear}>
            <Icon name="xCircleGray" size={20} />
          </ClearButton>
        )}
      </SearchBarWrap>
    </form>
  );
};

export default SearchBar;

const SearchBarWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
  background-color: var(--purple50);
  border-radius: 0.5rem;
  background-size: 100% 100%;
  position: relative;
`;

const SearchBarInput = styled.input`
  width: 100%;
  display: inline-block;
  border: none;
  padding: 0.81rem 0 0.81rem 0.5rem;
  background-color: var(--purple50);
  color: black;

  &::placeholder {
    color: var(--font-gray500);
  }

  &:focus {
    outline: none;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;
