export interface TrainersInfo {
  trainer: {
    id: number,
    name: string,
    imageUrl: string
  },
  gym: {
    id: number,
    name: string
  },
  pt: {
    id: number,
    totalPtCount: number,
    remainingPtCount: number,
    infoInputStatus: string,
    // 등록이 됐어도 트레이너가 해당 회원 pt횟수 등을 등록해야 서비스 이용이 가능하니 이에 해당하는 정보 등록 여부
    registrationAllowedStatus: string,
    // 트레이너가 회원한테 등록 요청을 하면 회원이 이를 허용했는지 여부
    registrationRequestDate: string
  }
}