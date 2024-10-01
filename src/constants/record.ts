import React from 'react';
import { SettingIcon } from './../styles/components/Header';
import { format } from "date-fns"

/* 운동 기록 */
export const EXERCISE_TYPE: {
  title: string,
  value: string,
  src: string,
  bodyPart?: {
    title: string,
    value: string,
    specificBodyParts?: {
      title: string,
      value: string,
    }[]
  }[],
}[] = [
    {
      title: '유산소',
      value: 'AEROBIC',
      src: '/svgs/icon_cardio.svg'
    }, {
      title: '무산소',
      value: 'ANAEROBIC',
      src: '/svgs/icon_anaerobic.svg',
      bodyPart: [
        {
          title: '전신',
          value: 'FULL_BODY',

        },
        {
          title: '상체',
          value: 'UPPER_BODY',
          specificBodyParts: [
            {
              title: '가슴',
              value: 'CHEST',
            },
            {
              title: '복부',
              value: 'ABS',
            },
            {
              title: '등',
              value: 'BACK',
            },
            {
              title: '허리',
              value: 'WAIST',
            },
            {
              title: '어깨',
              value: 'SHOULDERS',
            },
            {
              title: '팔',
              value: 'ARMS',
            },
          ],
        },
        {
          title: '하체',
          value: 'LOWER_BODY',
          specificBodyParts: [
            {
              title: '엉덩이',
              value: 'GLUTES',
            },
            {
              title: '앞 허벅지',
              value: 'QUADRICEPS',
            },
            {
              title: '뒤 허벅지',
              value: 'HAMSTRINGS',
            },
            {
              title: '내전근',
              value: 'ADDUCTOR',
            },
          ],
        },
      ]
    }, {
      title: '스트레칭',
      value: 'STRETCHING',
      src: '/svgs/icon_stretching.svg',
      bodyPart: [
        {
          title: '전신',
          value: 'FULL_BODY',
        },
        {
          title: '상체',
          value: 'UPPER_BODY',
        },
        {
          title: '하체',
          value: 'LOWER_BODY',
        },
      ]
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

export const DIET_CATEGORY = [
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
export const thisMonth = format(Date.now() + timezone, 'yyyy-MM')
