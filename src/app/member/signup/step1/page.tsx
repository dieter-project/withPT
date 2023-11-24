'use client'

import PageTitle from '@/components/PageTitle'
import JoinStep from '@/components/SignUpStep'
import { Container } from '@/styles/Container'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { LabelTitle, Subtext, SignupTitle } from '@/styles/Text'
import { styled } from 'styled-components'
import { Input, InputRowWrap } from '@/styles/Input'
import { Button } from '@/styles/Button'
import { UserInfoForm } from '@/styles/UserInfoForm'
import { useDispatch } from 'react-redux'
import { signupActions } from '@/redux/reducers/signupSlice'

interface Ibirthdate {
  year: string,
  month: string,
  date: string,
}

interface Imember {
  name: string,
  birthdate: Ibirthdate | string,
  gender: string
}

const RadioButton = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;

  label {
    width: 100%;
    height: 48px;
    display: flex;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio'] + span {
    width: 100%;
    height: 48px;
    background-color: var(--purple50);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  input[type='radio']:checked + span {
    background-color: var(--purple200);
    color: var(--black);
  }
`

const page = () => {
  const [inputData, setInputData] = useState<Imember>({
    name: "",
    birthdate: {
      year: "",
      month: "",
      date: ""
    },
    gender: ""
  })
  
  const title = '회원가입'

  const router = useRouter()
  const inputRef = useRef([])
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    if (name === 'year' || name === 'month' || name === 'date') {
      setInputData(prevState => ({
        ...prevState,
        birthdate: 
          typeof prevState.birthdate !== 'string' 
          ? { 
            ...prevState.birthdate,
            [name]: value
          }
          : ''
      }))
    } else {
      setInputData({
        ...inputData,
        [name]: value
      })
    }
  }
  
  // useEffect(()=>{
    // birthdateFormat = `${birthdate.year}-${birthdate.month.padStart(2, '0')}-${birthdate.date.padStart(2, '0')}`
    
    // console.log('birthdateFormat: ', birthdateFormat);
  // }, [birthdate])

  const handleNext = () => {
    
    // if (inputData.name.trim() === "") return false;
    // if (inputData.birthdate === "") return false;
    // if (inputData.gender.trim() === "") return false;

    const birthdateJoin = typeof inputData.birthdate !== 'string' 
      ? `${inputData.birthdate.year}-${inputData.birthdate.month.padStart(2, '0')}-${inputData.birthdate.date.padStart(2, '0')}`
      : ''
    
    // setInputData({
    //   ...inputData,
    //   birthdate: birthdateJoin,
    // })
    dispatch(signupActions.saveSignupState({
      name: inputData.name,
      birthdate: birthdateJoin,
      gender: inputData.gender
    }))
    // sessionStorage.setItem('member_login_step1', JSON.stringify(inputData))
    router.push(`/member/signup/step2`)
  }

  useEffect(() => {
    //step2 에서 뒤로가기 눌렀을 때
    // const session = sessionStorage.getItem('member_login_step1')
    // const sessionObj = JSON.parse(session || '{}') //''로만 넣으면 parse할 수 없어서 에러나는 듯
    
    // if(sessionObj !== null) {
    //   setInputData({
    //     ...inputData, 
    //     name: sessionObj.name,
    //     year: sessionObj.year,
    //     month: sessionObj.month,
    //     date: sessionObj.date,
    //     gender: sessionObj.gender
    //   })
    // }
    
  }, [])

  return (
    <Container>
      <PageTitle title={title}/>
      <JoinStep active={'1'}/>
      <UserInfoForm>
        <div>
          <div className='title'>
            <SignupTitle>안녕하세요, 회원님!</SignupTitle>
            <Subtext>아래 정보가 맞는지 확인해주세요.</Subtext>
          </div>
          <div>
            <div>
              <LabelTitle>이름</LabelTitle>
              <Input 
                type="text" 
                name="name"
                value={inputData.name} 
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelTitle>생년월일</LabelTitle>
              <InputRowWrap>
                <Input 
                  type="text" 
                  name="year"
                  value={typeof inputData.birthdate !== 'string' ? inputData.birthdate.year : ""} 
                  maxLength={4}
                  onChange={handleInputChange}/>/
                <Input 
                  type="text"
                  name="month" 
                  maxLength={2}
                  value={typeof inputData.birthdate !== 'string' ? inputData.birthdate.month : ""} 
                  onChange={handleInputChange}/>/
                <Input 
                  type="text" 
                  name="date"
                  maxLength={2}
                  value={typeof inputData.birthdate !== 'string' ? inputData.birthdate.date : ""} 
                  onChange={handleInputChange}/>
              </InputRowWrap>
            </div>
            <div>
              <LabelTitle>성별</LabelTitle>
              <RadioButton>
                <label>
                  <input 
                    type="radio"
                    name="gender" 
                    value="male" 
                    onChange={handleInputChange}/>
                  <span>남성</span>
                </label>
                <label>
                  <input 
                    type="radio"
                    name="gender" 
                    value="female" 
                    onChange={handleInputChange}/>
                  <span>여성</span>
                </label>
              </RadioButton>
            </div>
          </div>
        </div>
        <div>
          <Button 
            variant='primary' 
            onClick={handleNext}
          >다음</Button>
        </div>
      </UserInfoForm>
    </Container>
  )
}

export default page;