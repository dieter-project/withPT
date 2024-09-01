import React from 'react';
import { SettingIcon } from './../styles/components/Header';
import { format } from "date-fns"

/* 운동 기록 */
export const EXERCISE_TYPE = [
  {
    title: '유산소',
    value: 'AEROBIC',
  }, {
    title: '무산소',
    value: 'ANAEROBIC',
  }, {
    title: '스트레칭',
    value: 'STRETCHING',
  }
]

export const BODY_PART = [
  {
    title: '전신',
    value: 'FULL_BODY',
  }, {
    title: '팔',
    value: 'ARM',
  }, {
    title: '복근',
    value: 'ABS',
  }, {
    title: '하체',
    value: 'LOWER_BODY',
  }, {
    title: '등',
    value: 'BACK',
  }, {
    title: '어깨',
    value: 'SHOULDER',
  }, {
    title: '가슴',
    value: 'CHEST',
  }, {
    title: '허리',
    value: 'WAIST',
  }, {
    title: '엉덩이',
    value: 'BUTTOCKS',
  }, {
    title: '코어',
    value: 'CORE',
  }
]

export const EXERCISE_GOAL = [
  {
    title: "FIRST_TIME",
    text: "운동은 처음이라 잘 모르겠어요",
    value: 0
  },
  {
    title: "ONCE_TWICE_A_WEEK",
    text: "주 1~2회",
    value: 2
  },
  {
    title: "THREE_TIMES_A_WEEK_OR_MORE",
    text: "주 3회 이상",
    value: 3
  },
  {
    title: "FIVE_TIMES_A_WEEK_OR_MORE",
    text: "주 5회 이상",
    value: 5
  },
  {
    title: "EVERYDAY",
    text: "매일 운동할래요",
    value: 7
  },

]

export const MEAL_CATEGORY = [
  {
    title: "아침",
    value: "BREAKFAST"
  }, {
    title: "아점",
    value: "BRUNCH",
  }, {
    title: "점심",
    value: "LUNCH",
  }, {
    title: "점저",
    value: "LINNER",
  }, {
    title: "저녁",
    value: "DINNER",
  }, {
    title: "야식",
    value: "LNS",
  }, {
    title: "간식",
    value: "SNACK",
  }
]

const timezone = 1000 * 60 * 60 * 9
export const todayDate = format(Date.now() + timezone, 'yyyy-MM-dd')
