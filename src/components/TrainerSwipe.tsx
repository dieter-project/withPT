'use client'

import React, { Fragment, useRef, useState } from 'react'
import { css, styled } from 'styled-components'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css';

const TrainerContainer = styled.div`
  .swiper {
    width: 100%;
  }
  .swiper-wrapper {
    width: 90%;
  }
`

interface TrainerSwipeProps {
  background?: string;
}

const TrainerListContents = styled.li<TrainerSwipeProps>`
  background-color: var(--white);
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  ${ props => props.background === 'purple' && css`
    background-color: var(--purple50);
  `}

  > div {
    display: flex;
    &:first-child {
      .profile {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #eee;
        margin-right: 0.5rem;
      }
      .name {
        font-weight: var(--font-semibold);
      }
      .gym {
        font-size: var(--font-s);
        color: var(--font-gray500);
        margin-bottom: 0.5rem;
      }
      .remainder {
        span {
          color: var(--font-gray500);
        }
      }
    }
  }
`

export const TrainerSwipe = () => {
  const router = useRouter();
  const pathname = usePathname()
  const purple = !pathname.includes('main')

  const [trainers, setTrainer] = useState([
    {
      profile: "",
      name: "박지섭",
      gym: "아자아자 피트니스 센터",
      remainTimes: "16",
      allTimes: "36",
    },
    {
      profile: "",
      name: "홍길동",
      gym: "올데이 필라테스",
      remainTimes: "20",
      allTimes: "30",
    },
    {
      profile: "",
      name: "김철수",
      gym: "액티브 피트니스 센터",
      remainTimes: "1",
      allTimes: "50",
    },
  ])
  const swiperRef = useRef(null);

  return (
    <TrainerContainer>
      <Swiper
        observer={true}
        slidesPerView={'auto'}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {trainers?.map((trainer, index) => {
          return (
            <SwiperSlide key={index}>
              <TrainerListContents 
                onClick={() => router.push(`/member/trainer/${"1"}`)}
                background={purple ? "purple" : ""}
              >
                <div>
                  <div className='profile'>
                    <Image src={trainer.profile} width="50" height="50" alt='trainer profile image' />
                  </div>
                  <div>
                    <div className='name'>{trainer.name} 트레이너</div>
                    <div className='gym'>{trainer.gym}</div>
                    <div className='remainder'>잔여: {trainer.remainTimes}회 <span>/ {trainer.allTimes}회</span></div>
                  </div>
                </div>
                {/* <div>바로가기</div> */}
              </TrainerListContents>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </TrainerContainer>
  )
}
