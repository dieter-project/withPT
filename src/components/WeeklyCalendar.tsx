import { addDays, eachDayOfInterval, eachWeekOfInterval, format, subDays } from 'date-fns'
import { ko } from 'date-fns/locale'
import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'

const WeeklyContainer = styled.section`
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-gray300);
  width: 100%;
  height: 3.75rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
  /* justify-content: center; */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const WeeklyScrollWrap = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: calc(100vw - 40px);
  scroll-snap-align: start;
`

const WeeklyScrollItem = styled.li`
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
    background-color: var(--border-gray300);
  }
`


export const WeeklyCalendar = () => {
  const [recordDate, setRecordDate] = useState()
  const [aWeek, setAWeek] = useState<Date[][]>([])
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const week: Date[][] = [];

  const makeWeek = (count: number, boundary: number = 7): Date[][] => {

    const today = Date.now()
    const sevenDays = 1000 * 60 * 60 * 24 * (7 * count)
    const standard = today + sevenDays

    const weeks = eachWeekOfInterval(
      {
        start: subDays(new Date(standard), boundary),
        end: addDays(new Date(standard), boundary)
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

    return weeks;
  }

  useEffect(() => {
    setAWeek(makeWeek(0))
  }, [])


  useEffect(() => {
    const rect = scrollRef.current?.getBoundingClientRect();
    console.log('rect: ', rect && rect.left);

  }, [scrollRef])

  const handleSlidePrev = (swiper: any) => {
    const prevWeek = makeWeek(-1, 1)
    console.log('prevWeek: ', prevWeek);
    // setAWeek((prev) => [...prevWeek, ...prev])
    // swiper.appendSlide(prevWeek)
    const addPrev = prevWeek.map(() => {

    })
    swiper.prependSlide(addPrev)
    swiper.update();
  }

  return (
    <WeeklyContainer>
      {aWeek?.map((week, i) => {
        return (
          <WeeklyScrollWrap key={i} ref={scrollRef}>
            {week?.map((day, i) => {
              const txt = format(day, 'EEEEE', { locale: ko })
              return (
                <WeeklyScrollItem key={i}>
                  <DayText>{txt}</DayText>
                  <DateText>{day.getDate()}</DateText>
                  <DotWrap>
                    <span></span>
                    <span></span>
                    <span></span>
                  </DotWrap>
                </WeeklyScrollItem>
              )
            })}
          </WeeklyScrollWrap>
        )
      })}
    </WeeklyContainer>
  )
}
