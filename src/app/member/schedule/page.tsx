"use client";

import PageHeader from "@/components/PageHeader";
import MonthlyCalendar from "@/components/member/MonthlyCalendar";
import { getLessonsDays } from "@/services/member/training";
import { Button } from "@/styles/Button";
import { BaseContentWrap, ContentSection, RoundBox } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { api } from "@/utils/axios";
import { format } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { styled } from "styled-components";
import { EmptyTodayDiet } from "../main/styles";
import { ExclamationMark } from "../chat/style";
import { ScheduleDate, ScheduleDetail } from "./styles";
import { LessonInfos } from "@/types/member/schedule";
import EmptyData from "@/components/member/EmptyData";

const page = () => {
  const title = "나의 수업일정";
  const [markDate, setMarkDate] = useState([]);
  const [activeDate, setActiveDate] = useState<Value>(new Date());
  const [lessonInfos, setLessonInfos] = useState<LessonInfos[]>([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("date");

  const getSchedule = async (activeDate: Value) => {
    const date = format(new Date(String(activeDate)), "yyyy-MM-dd");

    if (activeDate) {
      const { data } = await getLessonsDays({ date });
      setLessonInfos(data.data.lessonInfos);
    }
  };

  const onChange = (value: Value) => {
    setActiveDate(value);
  };

  useEffect(() => {
    if (search) {
      setActiveDate(new Date(search));
    }
  }, [search]);

  useEffect(() => {
    getSchedule(activeDate);
  }, [activeDate]);

  return (
    <>
      <PageHeader back title={title} />
      <BaseContentWrap>
        <ContentSection>
          <RoundBox variant="outline">
            <MonthlyCalendar
              activeDate={activeDate}
              setActiveDate={setActiveDate}
              markDate={markDate}
              onChange={onChange}
              // handleClick={handleDayClick}
            />
          </RoundBox>
        </ContentSection>
        <ContentSection>
          <LabelTitle>수업일정</LabelTitle>
          <div>
            {lessonInfos.length > 0 ? (
              <ul>
                {lessonInfos?.map(info => (
                  <li key={info.lesson.id}>
                    <ScheduleDate>
                      <LabelTitle>
                        {format(
                          new Date(info.lesson.schedule.date),
                          "MM. dd EEE",
                        )}
                      </LabelTitle>
                    </ScheduleDate>
                    <ScheduleDetail>
                      <div>10:00 ~ 10:50</div>
                      <div>with {info.trainer.name}</div>
                    </ScheduleDetail>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyData text="등록된 수업이 없습니다." />
            )}
          </div>
          <div>
            <Button $variant="primary">수업 예약하기</Button>
          </div>
        </ContentSection>
      </BaseContentWrap>
    </>
  );
};

export default page;
