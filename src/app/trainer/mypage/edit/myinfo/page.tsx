"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import beforePage from "../../../../../public/icons/beforePage.png";
import { Button } from "@/styles/Trainer/TrainerButton";
import { NoIconInput } from "@/styles/TrainerInput";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks";
import ContentHeader from "@/components/TrainerPageTitle";
import profileNoImg from "../../../../../../public/Trainer/Mypage/profile-no-image.png";

interface Trbirth {
  year: string;
  month: string;
  date: string;
}

interface TrInfo {
  name: string;
  birth: Trbirth | string;
  sex: string;
}

interface TrGenderLabelProps {
  selected: boolean;
  htmlFor: string;
  children: React.ReactNode;
}

const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

const MainContentWrap = styled.div`
  padding: 5rem 1.5rem 6.2rem;
`;

const FormTitle = styled.h4`
  font-size: var(--font-m);
  margin-bottom: 0.2rem;
`;

const SignupFormWrap = styled.form`
  margin-top: 2rem;
`;

const SignupFormInnerWrap = styled.div`
  margin-bottom: 2rem;
`;

const TrGenderLabel = styled.label<TrGenderLabelProps>`
  width: 100%;
  height: 3rem;
  background-color: var(--purple50);
  border: ${props => (props.selected ? "1.5px solid var(--primary)" : "none")};
  border-radius: 8px;
  color: ${props => (props.selected ? "var(--primary)" : "black")};
  margin: 0 0.3rem;
  padding: 0.75rem 0;
  text-align: center;
`;

const TrGenderRadio = styled.input`
  appearance: none;
  background-color: var(--purple50);
`;

const TrRegisItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Slash = styled.span`
  padding: 0 0.75rem;
`;

const ButtonAreaFixed = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 2.4rem 1.6rem 1.6rem;
  width: 100%;
  z-index: 100;
  background-color: transparent;
`;

const NextStep = styled(Link)`
  display: block;
  border: none;
  border-radius: 0.6rem;
  line-height: 3.5rem;
  width: 100%;
  background-color: var(--primary);
  color: white;
  font-size: var(--font-m);
  text-align: center;
  padding: 0 1.6rem;
`;

const ProfileInputWrap = styled.div`
  position: relative;
  margin: 0 auto;
`;

const ProfileImage = styled(Image)`
  display: block;
  width: 6.25rem;
  height: 6.25rem;
  margin: 0 auto;
  border-radius: 50%;
  &::-webkit-file-upload-button {
    display: none;
  }
`;

const ProfileInputFile = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  color: transparent;
`;

const ProfileLabel = styled.label`
  position: absolute;
  width: 6.25rem;
  height: 6.25rem;
  right: 35%;
  border-radius: 50%;
  background-color: transparent;
  color: transparent;
  text-align: center;
`;

export default function myinfo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  const fileInput = useRef(null);
  const title = "내 정보 수정";
  const [inputData, setInputData] = useState<TrInfo>({
    name: "",
    birth: {
      year: "",
      month: "",
      date: "",
    },
    sex: "",
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const inputRef = useRef<null[] | HTMLInputElement[]>([]);
  const states = useAppSelector(state => state.trainerSignup);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "year" || name === "month" || name === "date") {
      setInputData(prevState => ({
        ...prevState,
        birth:
          typeof prevState.birth !== "string"
            ? {
                ...prevState.birth,
                [name]: value.replace(/[^0-9.]/g, ""),
              }
            : "",
      }));
    } else {
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  const handleNext = () => {
    const birthJoin =
      typeof inputData.birth !== "string"
        ? `${inputData.birth.year}-${inputData.birth.month.padStart(
            2,
            "0",
          )}-${inputData.birth.date.padStart(2, "0")}`
        : "";

    if (
      inputData.name.length <= 0 &&
      inputRef.current[0] !== null &&
      inputRef.current[0] !== undefined
    ) {
      inputRef.current[0].focus();
      return false;
    }
    if (
      typeof inputData.birth !== "string" &&
      inputData.birth.year.length <= 0 &&
      inputRef.current[1] !== null &&
      inputRef.current[1] !== undefined
    ) {
      inputRef.current[1].focus();
      return false;
    }
    if (
      typeof inputData.birth !== "string" &&
      inputData.birth.month.length <= 0 &&
      inputRef.current[2] !== null
    ) {
      inputRef.current[2].focus();
      return false;
    }
    if (
      typeof inputData.birth !== "string" &&
      inputData.birth.date.length <= 0 &&
      inputRef.current[3] !== null
    ) {
      inputRef.current[3].focus();
      return false;
    }
    if (inputData.sex.length <= 0 && inputRef.current[4] !== null) {
      inputRef.current[4].focus();
      return false;
    }

    dispatch(
      signupActions.saveSignupState({
        name: inputData.name.trim(),
        birth: birthJoin,
        sex: inputData.sex,
      }),
    );
    // sessionStorage.setItem('member_login_step1', JSON.stringify(inputData))
    console.log("inputData", inputData);
    console.log("states: ", states);
  };

  useEffect(() => {}, []);

  const onChangeImage = e => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  return (
    <MainContainer>
      <ContentHeader title={title} variant="iconBack"></ContentHeader>
      <MainContentWrap>
        <ProfileInputWrap>
          <ProfileLabel className="input-file-button" htmlFor="input-file">
            업로드
          </ProfileLabel>
          <ProfileInputFile
            type="file"
            id="input-file"
            onChange={onChangeImage}
            style={{ display: "none" }}
          />
          {selectedImage ? (
            <ProfileImage
              src={selectedImage}
              alt="프로필 없을때"
              width={30}
              height={30}
            />
          ) : (
            <ProfileImage
              src={profileNoImg}
              alt="프로필사진"
              width={30}
              height={30}
            />
          )}
        </ProfileInputWrap>
        <SignupFormWrap method="post" autoComplete="on">
          <SignupFormInnerWrap>
            <FormTitle>이름</FormTitle>
            <TrRegisItemWrap>
              <NoIconInput
                name="name"
                type="text"
                required
                value={inputData.name}
                onChange={handleInputChange}
              ></NoIconInput>
            </TrRegisItemWrap>
          </SignupFormInnerWrap>
          <SignupFormInnerWrap>
            <FormTitle>성별</FormTitle>
            <TrRegisItemWrap>
              <TrGenderLabel
                name="sex"
                htmlFor="radio-box1"
                selected={selectedGender === "남자"}
                onChange={handleInputChange}
                ref={element => (inputRef.current[4] = element)}
              >
                <TrGenderRadio
                  type="radio"
                  name="sex"
                  id="radio-box1"
                  value="남자"
                  checked={selectedGender === "남자"}
                  onChange={() => setSelectedGender("남자")}
                ></TrGenderRadio>
                남자
              </TrGenderLabel>
              <TrGenderLabel
                htmlFor="radio-box2"
                selected={selectedGender === "여자"}
                onChange={handleInputChange}
                ref={element => (inputRef.current[4] = element)}
              >
                <TrGenderRadio
                  type="radio"
                  name="sex"
                  id="radio-box2"
                  value="여자"
                  checked={selectedGender === "여자"}
                  onChange={() => setSelectedGender("여자")}
                ></TrGenderRadio>{" "}
                여자
              </TrGenderLabel>
            </TrRegisItemWrap>
          </SignupFormInnerWrap>
          <SignupFormInnerWrap>
            <FormTitle>생년월일</FormTitle>
            <TrRegisItemWrap>
              <NoIconInput
                type="text"
                name="year"
                value={
                  typeof inputData.birth !== "string"
                    ? inputData.birth.year
                    : ""
                }
                maxLength={4}
                onChange={handleInputChange}
                ref={element => (inputRef.current[1] = element)}
                style={{ textAlign: "center" }}
                required
              ></NoIconInput>
              <Slash>/</Slash>
              <NoIconInput
                type="text"
                name="month"
                maxLength={2}
                value={
                  typeof inputData.birth !== "string"
                    ? inputData.birth.month
                    : ""
                }
                onChange={handleInputChange}
                ref={element => (inputRef.current[2] = element)}
                inputMode="decimal"
                style={{ textAlign: "center" }}
                required
              ></NoIconInput>
            </TrRegisItemWrap>
          </SignupFormInnerWrap>
        </SignupFormWrap>
        <ButtonAreaFixed>
          <Link href="/trainer/signup/step2" passHref>
            <Button variant="primary" onClick={handleNext}>
              저장하기
            </Button>
          </Link>
        </ButtonAreaFixed>
      </MainContentWrap>
    </MainContainer>
  );
}
