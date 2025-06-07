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

interface TrainerProps {
  trainer: {
    id: number,
    name: string,
    imageUrl: string,
  },
  gym: {
    id: number,
    name: string,
  },
  pt: {
    id: number,
    totalPtCount: number,
    remainingPtCount: number,
    infoInputStatus: string,
    registrationAllowedStatus: string,
    registrationRequestDate: string
  }
}
export const TrainerSwipe = ({ data }: { data: TrainerProps[] }) => {
  const router = useRouter();
  const pathname = usePathname()
  const purple = !pathname.includes('main')

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
        {data?.map((trainer, index) => {
          return (
            <SwiperSlide key={index}>
              <TrainerListContents 
                onClick={() => router.push(`/member/trainer/${"1"}`)}
                background={purple ? "purple" : ""}
              >
                <div>
                  <div className='profile'>
                    <Image src={trainer.trainer.imageUrl} width="50" height="50" alt='trainer profile image' />
                  </div>
                  <div>
                    <div className='name'>{trainer.trainer.name} 트레이너</div>
                    <div className='gym'>{trainer.gym.name}</div>
                    <div className='remainder'>잔여: {trainer.pt.remainingPtCount}회 <span>/ {trainer.pt.totalPtCount}회</span></div>
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
