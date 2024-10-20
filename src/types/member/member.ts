export interface MemberInfo  {
  id: number,
  email: string,
  authProvider: string,
  loginType: string,
  name: string,
  height: number,
  weight: number,
  birth: string,
  sex: string,
  imageUrl: string,
  dietType: string,
  exerciseFrequency: string,
  targetWeight: number,
  role: string,
  joinDate: string,
  lastModifiedDate: string
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
