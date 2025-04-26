"use client";
import { Button } from "@/styles/Button";
import { BaseContentWrap, ButtonAreaFixed } from "@/styles/Layout";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TextWrap = styled.div`
  text-align: center;
  > div {
    font-size: var(--font-xl);
    font-weight: var(--font-semibold);
  }
`;
const RoleChoiceButtonWrap = styled.div`
  margin-top: 2.75rem;
  display: flex;
  gap: 1.25rem;
`;

const RoleChoiceButton = styled.label`
  width: 50%;
  height: 200px;
  border-radius: 0.5rem;
  background-color: var(--purple50);
  cursor: pointer;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"] + .role {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    gap: 40px;
  }

  input[type="radio"]:checked + .role {
    border: 1px solid var(--primary);
    background-color: var(--purple100);
    .role-type {
      color: var(--primary);
      font-weight: var(--font-semibold);
    }
  }
`;
const ImgWrap = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RoleSelectPage = () => {
  const [isActive, setIsActive] = useState({
    member: false,
    trainer: false,
  });
  const router = useRouter();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "member") {
      setIsActive({
        member: true,
        trainer: false,
      });
    } else if (event.target.value === "trainer") {
      setIsActive({
        member: false,
        trainer: true,
      });
    }
  };

  const handleOnNext = () => {
    if (isActive.member === true) {
      window.sessionStorage.setItem("role", "MEMBER");
      router.push("/member/login");
    } else if (isActive.trainer === true) {
      window.sessionStorage.setItem("role", "TRAINER");
      router.push("/trainer/login");
    }
  };

  useEffect(() => {
    const role = window.localStorage.getItem("role");

    if (role === "MEMBER") router.push("/member/login");
    if (role === "TRAINER") router.push("/trainer/login");
  }, []);

  return (
    <BaseContentWrap>
      <TextWrap>
        <div>위피티에 오신걸 환영합니다!</div>
        <p>시작하실 회원 타입을 선택해 주세요</p>
      </TextWrap>
      <RoleChoiceButtonWrap>
        <RoleChoiceButton>
          <input
            type="radio"
            name="role"
            value="member"
            onChange={handleOnChange}
          />
          <div className="role">
            <ImgWrap>
              <img src="/images/member_profile.png" alt="member image" />
            </ImgWrap>
            <div
              className="role-type"
              style={
                isActive.trainer === true
                  ? { color: "#A2A2A5", fontWeight: "500" }
                  : {}
              }
            >
              일반회원
            </div>
          </div>
        </RoleChoiceButton>
        <RoleChoiceButton>
          <input
            type="radio"
            name="role"
            value="trainer"
            onChange={handleOnChange}
          />
          <div className="role">
            <ImgWrap>
              <img src="/images/trainer_profile.png" alt="trainer image" />
            </ImgWrap>
            <div
              className="role-type"
              style={
                isActive.member === true
                  ? { color: "#A2A2A5", fontWeight: "500" }
                  : {}
              }
            >
              트레이너
            </div>
          </div>
        </RoleChoiceButton>
      </RoleChoiceButtonWrap>
      {isActive.member === true || isActive.trainer === true ? (
        <ButtonAreaFixed $nav>
          <Button $variant="primary" onClick={handleOnNext}>
            다음
          </Button>
        </ButtonAreaFixed>
      ) : null}
    </BaseContentWrap>
  );
};

export default RoleSelectPage;
