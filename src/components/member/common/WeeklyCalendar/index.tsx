'use client'

import { addDays, eachDayOfInterval, eachWeekOfInterval, format, subDays } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { DateText, DayText, DotWrap, WeeklyContainer, WeeklyScrollItem, WeeklyScrollWrap } from "./style";
import { ko } from "date-fns/locale";
import { useSwipeable } from 'react-swipeable';
type WeeklyRecord = {
  [date: string]: {
    diet: {
      totalCalorie: number;
      targetCalorie: number;
      record: boolean;
    };
    exercise: {
      record: boolean;
    };
    bodyInfo: {
      weight: number;
      targetWeight: number;
      record: boolean;
    };
  };
};


export const WeeklyCalendar = ({ weekly }: { weekly: WeeklyRecord | null }) => {
  const [recordDate, setRecordDate] = useState()
  const [aWeek, setAWeek] = useState<Date[][]>([])
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const week: Date[][] = [];
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    onSwipeStart: () => console.log('jkljskjfklajks')
  });



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

  const recordCheck = (date: string, type: string): boolean => {
    if (weekly && weekly[date]) {
      return !!weekly[date][type as keyof WeeklyRecord[string]].record;
    }
    return false;
  };

  return (
    <WeeklyContainer {...handlers} >
      {aWeek?.map((week, i) => {
        return (
          <WeeklyScrollWrap key={i} ref={scrollRef}>
            {week?.map((day, i) => {
              const txt = format(day, 'EEEEE', { locale: ko })
              return (
                <WeeklyScrollItem key={i} onClick={() => console.log(day)}>
                  <DayText>{txt}</DayText>
                  <DateText>{day.getDate()}</DateText>
                  <DotWrap>
                    <span style={{ backgroundColor: recordCheck(format(day, 'yyyy-MM-dd'), 'bodyInfo') ? '#FF5E5E' : '#EAEAEA' }}></span>
                    <span style={{ backgroundColor: recordCheck(format(day, 'yyyy-MM-dd'), 'diet') ? '#FFE926' : '#EAEAEA' }}></span>
                    <span style={{ backgroundColor: recordCheck(format(day, 'yyyy-MM-dd'), 'exercise') ? '#33DFD5' : '#EAEAEA' }}></span>
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
