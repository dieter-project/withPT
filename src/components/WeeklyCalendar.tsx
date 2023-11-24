import { addDays, eachDayOfInterval, eachWeekOfInterval, format, subDays } from 'date-fns'
import { ko } from 'date-fns/locale'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

const CalendarWrap = styled.section`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-gray);
  width: 100%;
  height: 55px;
  overflow: hidden;
  display: flex;
  .swiper {
    width: 100%;
  }
  .swiper-wrapper {
    display: flex;
    width: 100%;
    > div {
    width: 100%;
  }
  }
  ul, .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: calc(100vw - 40px);
  }
`

const CalendarItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DayText = styled.div`
  font-size: var(--font-xs);

  &.active {
    color: var(--white);
    width: 27px;
    height: 27px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    text-align: center;
  }
`

const DateText = styled.div`
  color: var(--font-gray700);
  font-weight: var(--font-medium);
  
  &.active {
    font-weight: var(--font-semibold);
    color: var(--black);
  }
`

const DotWrap = styled.div`
  display: flex;
  gap: 4px;
  span {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--border-gray);
  }
`


export const WeeklyCalendar = () => {
  const [recordDate, setRecordDate] = useState()
  const [aWeek, setAWeek] = useState<Date[][]>([])  
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const swiperRef = useRef(null);

  const makeWeek = (count: number): Date[][] => {

    const today = Date.now()
    const sevenDays = 1000 * 60 * 60 * 24 * (7 * count)
    const standard = today + sevenDays

    const weeks = eachWeekOfInterval(
      {
        start: subDays(new Date(standard), 7),
        end: addDays(new Date(standard), 7)
      }, {
        weekStartsOn: 0,
      },
      ).reduce((acc: Date[][], cur) => {
        const allDays = eachDayOfInterval({
          start: cur,
          end: addDays(cur, 6)
        })
        
        acc.push(allDays)
      return acc;
    }, [])
    
    // console.log('weeks: ', weeks);
    return weeks;
  }

  useEffect(() => {
    const week = makeWeek(0)
    setAWeek(week)
  }, [])

  const handleSlidePrev = (swiper: any) => {
    const prevWeek = makeWeek(-1)
    setAWeek((prev) => [...prevWeek, ...prev])
    swiper.update();
  }

  const swiperItem = aWeek?.map((week, i) => {
    return (
      <SwiperSlide key={i}>
        { week?.map((day, i)=> {
          const txt = format(day, 'EEEEE', {locale: ko})
          return (
            <CalendarItem key={i}>
              <DayText>{txt}</DayText>
              <DateText>{day.getDate()}</DateText>
              <DotWrap>
                <span></span>
                <span></span>
                <span></span>
              </DotWrap>
            </CalendarItem>
          )
        })}
      </SwiperSlide>
    )
  })

  return (
    <CalendarWrap>
      <Swiper 
        ref={swiperRef}
        initialSlide={1}
        // onSlideChange={(swiper) => {handleSlideChange(swiper)}}
        observer={true}
        onSlidePrevTransitionEnd={(swiper) => {handleSlidePrev(swiper)}}
      >
        {swiperItem}
      {/* {aWeek?.map((week, i) => {
        return (
          <SwiperSlide key={i}>
            { week?.map((day, i)=> {
              const txt = format(day, 'EEEEE', {locale: ko})
              return (
                <CalendarItem key={i}>
                  <DayText>{txt}</DayText>
                  <DateText>{day.getDate()}</DateText>
                  <DotWrap>
                    <span></span>
                    <span></span>
                    <span></span>
                  </DotWrap>
                </CalendarItem>
              )
            })}
          </SwiperSlide>
        )
      })} */}
      </Swiper>
    </CalendarWrap>
  )
}
