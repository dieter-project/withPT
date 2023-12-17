'use client'
import React, { useEffect, useState } from 'react';
import useFcmToken from '@/hooks/useFcmToken';
import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from '@/lib/firebase';
import { BaseContentWrap, ButtonAreaFixed, RoundBox } from '@/styles/Layout';
import { styled } from 'styled-components';
import { Button } from '@/styles/Button';
import { useRouter } from 'next/navigation';

const TextWrap = styled.div`
  text-align: center;
  > div {
    font-size: var(--font-xl);
    font-weight: var(--font-semibold);
  }
`
const RoleChoiceButtonWrap = styled.div`
  margin-top: 2.75rem;
  display: flex;
  gap: 1.25rem;
`

const RoleChoiceButton = styled.label`
  width: 50%;
  height: 200px;
  border-radius: 0.5rem;
  background-color: var(--purple50);
  cursor: pointer;
  
  input[type='radio'] {
    display: none;
  }
  
  input[type='radio'] + .role {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    gap: 40px;
  }

  input[type='radio']:checked + .role {
    border: 1px solid var(--primary);
    background-color: var(--purple100);
    .role-type {
      color: var(--primary);
      font-weight: var(--font-semibold);
    }
  }
`
const ImgWrap = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default function Home() {
  const [isActive, setIsActive] = useState({
    member: false,
    trainer: false,
  })
  const router = useRouter()
  const { fcmToken,notificationPermissionStatus } = useFcmToken();
  // fcmToken && console.log('FCM token:', fcmToken);

  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('/firebase-messaging-sw.js');
  //   });
  // }

  useEffect(() => {
    // requestNotificationPermission()
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        // console.log('Foreground push notification received:', payload);
        // Handle the received push notification while the app is in the foreground
        // You can display a notification or update the UI based on the payload
      });
      
      return () => {
        unsubscribe(); // Unsubscribe from the onMessage event
      };
    }
  }, [])

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'member') {
      setIsActive({
        member: true,
        trainer: false,
      })
    } else if (event.target.value === 'trainer') {
      setIsActive({
        member: false,
        trainer: true,
      })
    }
  }

  const handleOnNext = () => {
    if ( isActive.member === true ) {
      window.sessionStorage.setItem('role', 'MEMBER')
      router.push('/member/login')
    } else if ( isActive.trainer === true ) {
      window.sessionStorage.setItem('role', 'TRAINER')
      router.push('/trainer/login')
    }
  }

  useEffect(() => {
    const role = window.localStorage.getItem('role')

    if (role === 'MEMBER') router.push('/member/login')
    if (role === 'TRAINER') router.push('/trainer/login')
  }, [])

  return (
    <BaseContentWrap>
      <TextWrap>
        <div>위피티에 오신걸 환영합니다!</div>
        <p>시작하실 회원 타입을 선택해 주세요</p>
      </TextWrap>
      <RoleChoiceButtonWrap>
        <RoleChoiceButton>
          <input type="radio" name="role" value="member" onChange={handleOnChange}/>
          <div className='role'>
            <ImgWrap>
              <img src="/images/member_profile.png" alt="member image" />
            </ImgWrap>
            <div 
              className='role-type'
            >일반회원</div>
          </div>
        </RoleChoiceButton>
        <RoleChoiceButton>
          <input type="radio" name="role" value="trainer" onChange={handleOnChange}/>
          <div className='role'>
            <ImgWrap>
              <img src="/images/trainer_profile.png" alt="trainer image" />
            </ImgWrap>
            <div 
              className='role-type'
              style={
                isActive.member === true 
                ? {color: "#A2A2A5", fontWeight: "500"} 
                : {}
              }
            >트레이너</div>
          </div>
        </RoleChoiceButton>
      </RoleChoiceButtonWrap>
      { isActive.member === true || isActive.trainer === true 
        ? <ButtonAreaFixed nav={true.toString()}>
            <Button
              variant='primary' 
              onClick={handleOnNext}
            >다음</Button>
          </ButtonAreaFixed>
        : null
      }
    </BaseContentWrap>
  );
}


