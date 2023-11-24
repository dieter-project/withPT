import React from 'react'
import Timeline from '../../public/svgs/icon_timeline.svg'
import { styled } from 'styled-components'
import { useRouter } from 'next/navigation'

const TrainerWrap = styled.div`
  ul {
    scroll-snap-type: x mandatory;
    display: flex;
    overflow-x: scroll;
    li {
      scroll-snap-align: center;
      min-width: 90%;
      display: flex;
      justify-content: space-between;
      &:not(:last-child) {
        margin-right: 1.25rem;
      }
      > div {
        &:first-child {
          display: flex;
          .profile {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #eee;
            margin-right: 0.5rem;
          }
          .name {
            font-weight: var(--font-semibold);
            margin-bottom: 4px;
          }
          .gym {
            font-size: var(--font-s);
            color: var(--font-gray700);
            margin-bottom: 4px;
          }
          .time {
            display: flex;
            font-size: var(--font-xs);
            color: var(--font-gray500);
            margin-bottom: 4px;
            span {
              display: block;
              width: 1.125rem;
              height: 1.125rem;
            }
          }
          .reminder {

          }
        }
        &:last-child {
          width: 0.5rem;
          height: 0.5rem;
          border-right: 1px solid var(--black);
          border-bottom: 1px solid var(--black);
          transform: rotate(-45deg);
          overflow: hidden;
          text-indent: -999px;
        }
      }
    }
  }
`
export const MemberIndividualTrainerSwipe = () => {
  const router = useRouter();

  return (
    <TrainerWrap>
      <ul>
        <li className='section-contents'>
          <div>
            <div className='profile'>이미지</div>
            <div>
              <div className='name'>김땡땡 트레이너</div>
              <div className='gym'>아자아자 피트니스 센터</div>
              <div className='time'>
                <span><Timeline /></span>
                <div>10:00 ~ 22:00</div>
              </div>
              <div className='remainder'>잔여: 16회 / 36회</div>
            </div>
          </div>
          <div>바로가기</div>
        </li>
        <li className='section-contents'
          onClick={() => router.push(`/member/trainer/${"1"}`)}>
          <div>
            <div className='profile'>이미지</div>
            <div>
              <div className='name'>김땡땡 트레이너</div>
              <div className='gym'>아자아자 피트니스 센터</div>
              <div className='time'>10:00 ~ 22:00</div>
              <div className='remainder'>잔여: 16회 / 36회</div>
            </div>
          </div>
          <div>바로가기</div>
        </li>
        <li className='section-contents'
          onClick={() => router.push(`/member/trainer/${"1"}`)}>
          <div>
            <div className='profile'>이미지</div>
            <div>
              <div className='name'>김땡땡 트레이너</div>
              <div className='gym'>아자아자 피트니스 센터</div>
              <div className='time'>10:00 ~ 22:00</div>
              <div className='remainder'>잔여: 16회 / 36회</div>
            </div>
          </div>
          <div>바로가기</div>
        </li>
      </ul>
    </TrainerWrap>
  )
}
