'use client';

import { LabelTitle } from '@/styles/Text';
import React, { use, useEffect, useState } from 'react'
import styled from 'styled-components';
import Plus from '../../../../../public/svgs/icon_plus.svg'
import { Input } from '@/styles/Input';
import ChatHeader from '@/components/member/chat/ChatHeader';
import { BaseContentWrap } from '@/styles/Layout';


const ChatTrainerListWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`

const ChatTrainerList = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border-gray300);
  padding: 1rem 0.625rem;
  
  &:last-of-type {
    border-bottom: 1px solid var(--border-gray300);
  }

  > div:first-child {
    display: flex;
    gap: 1.25rem;
    align-items: center;
  }
`
const ProfileCircle = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ChatTrainerListInfo = styled.div`
  > div {
    &:first-child {
      font-weight: var(--font-semibold);
    }
    &:last-child {
      font-size: 0.875rem;
      color: var(--font-gray500);
    }
  }
`

const NewChatButton = styled.button`
  width: 3.75rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 0.375rem;
  font-size: 0.875rem;
`

const SearchInputWrap = styled.div`
  width: 100%;
  height: 3rem;
  position: relative;
  margin-bottom: 1rem;
  input::-webkit-input-placeholder{
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png) ;
    background-size: contain;
    background-position:  1px center;
    background-repeat: no-repeat;
    text-indent: 0;
    padding-left: 3px;
  }
`

const ResetButton = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: url('/svgs/icon_input_reset.svg');
  background-position: center;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate3d(0, -50%, 0);
`

const page = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [resetShow, setResetShow] = useState(false);

  const title = '새로운 채팅'

  useEffect(() => {

  }, [])

  const handleInputchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value)
  }

  const handleReset = () => {
    setSearchKeyword("")
    setResetShow(false)
  }

  return (
    <>
      <ChatHeader title={title} back={false} />
      <BaseContentWrap>
        <section>
          <SearchInputWrap>
            <Input 
              type="text" 
              placeholder='검색' 
              value={searchKeyword}
              onChange={handleInputchange}
              onFocus={() => setResetShow(true)}
            />
            {resetShow && <ResetButton onClick={handleReset}></ResetButton>}
          </SearchInputWrap>
        </section>
        <section>
          <ChatTrainerListWrap>
            <div>
              <ul>
                <ChatTrainerList>
                  <div>
                    {/* <ProfileCircle>
                    <img src="" alt="" />
                  </ProfileCircle> */}
                    <ChatTrainerListInfo>
                      <div>트레이너</div>
                      <div>센터</div>
                    </ChatTrainerListInfo>
                  </div>
                  <div>
                    <NewChatButton>
                      <Plus fill="#6C69FF" width="0.75rem" height="0.75rem" />
                      <div>채팅</div>
                    </NewChatButton>
                  </div>
                </ChatTrainerList>
              </ul>
            </div>
          </ChatTrainerListWrap>
        </section>
      </BaseContentWrap>
    </>
  )
}

export default page;