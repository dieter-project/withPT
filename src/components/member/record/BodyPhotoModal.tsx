import { ModalContainer } from '@/styles/components/Modal'
import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'

const Modal = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: var(--white);
  z-index: 10;
  display: flex;
  overflow: hidden;
  /* padding: 1rem; */

  .swiper-slide {
    > div {
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`


export const BodyPhotoModal = ({ 
  photo, 
  setDisplayModal 
}: { 
  photo: string[] | null,
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  console.log('photo: ', typeof photo);

  return (
    <ModalContainer>
      <Modal>
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
        >
          {photo && photo.map(ele => {
            return (
              <SwiperSlide>
                <div>
                  <img src={ele} alt="" />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Modal>
      <div className='overlay' onClick={() => setDisplayModal(false)}></div>
    </ModalContainer>
  )
}
