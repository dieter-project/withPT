import { format } from "date-fns"

/* 운동 기록 */
export const exerciseType = [{
  text: '유산소',
  value: 'AEROBIC',
}, {
  text: '무산소',
  value: 'ANAEROBIC',
}, {
  text: '스트레칭',
  value: 'STRETCHING',
}]

export const bodyPart = [{
  text: '전신',
  value: 'WHOLE_BODY',
}, {
  text: '팔',
  value: 'ARM',
}, {
  text: '복근',
  value: 'ABS',
}, {
  text: '하체',
  value: 'LOWER_BODY',
}, {
  text: '등',
  value: 'BACK',
}, {
  text: '어깨',
  value: 'SHOULDER',
}, {
  text: '가슴',
  value: 'CHEST',
}, {
  text: '허리',
  value: 'WAIST',
}, {
  text: '엉덩이',
  value: 'HIP',
}, {
  text: '코어',
  value: 'CORE',
}]

const timezone = 1000 * 60 * 60 * 9
export const todayDate = format(Date.now() + timezone, 'yyyy-MM-dd')
