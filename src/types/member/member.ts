export interface MemberInfo {
  id: number;
  email: string;
  authProvider: string;
  loginType: string;
  name: string;
  height: number;
  weight: number;
  birth: string;
  sex: string;
  imageUrl: string;
  dietType: string;
  exerciseFrequency: string;
  targetWeight: number;
  role: string;
  joinDate: string;
  lastModifiedDate: string;
}

export interface PtInfos {
  gym: { id: number; name: string };
  pt: {
    centerFirstRegistrationMonth: string;
    id: number;
    infoInputStatus: string;
    note: string;
    registrationAllowedStatus: string;
    registrationStatus: string;
    remainingPtCount: number;
    totalPtCount: number;
  };
  trainer: {
    id: number;
    imageUrl: string;
    name: string;
  };
}

interface Ibirth {
  year: string;
  month: string;
  date: string;
}

export interface Imember {
  name: string;
  birth: Ibirth | string;
  sex: string;
  height: string;
  weight: string;
}
