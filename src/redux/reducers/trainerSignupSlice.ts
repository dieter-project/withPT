import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

interface WorkSchedules {
  day: string;
  inTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  outTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
}

interface Gyms {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  workSchedules: WorkSchedules[];
}

interface Certificates {
  name: string;
  institution: string;
  acquisitionYearMonth: string;
}

interface Academics {
  institution: string;
  name: string;
  major: string;
  degree: string;
  country: string;
  enrollmentYear: string;
  graduationYear: string;
}

interface Careers {
  centerName: string;
  jobPosition: string;
  status: string;
  startOfWorkYearMonth: string;
  endOfWorkYearMonth: string;
}

interface Awards {
  name: string;
  institution: string;
  acquisitionYear: string;
}

interface Educations {
  name: string;
  institution: string;
  acquisitionYearMonth: string;
}

export type SignupState = {
  email: string | null;
  name: string | null;
  birth: string | null;
  sex: string | null;
  careers: Careers[] | null;
  academics: Academics[] | null;
  certificates: Certificates[] | null;
  awards: Awards[] | null;
  educations: Educations[] | null;
  gyms: Gyms[] | null;
  oauthProvider: string | null;
  role: string | null;
};

let initialState: SignupState = {
  email: null,
  name: null,
  birth: null,
  sex: null,
  careers: null,
  academics: null,
  certificates: null,
  awards: null,
  educations: null,
  gyms: null,
  oauthProvider: null,
  role: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    saveSignupState: (state, action) => {
      return { ...state, ...action.payload };
    },
    signupStateReset: state => {
      return (state = initialState);
    },
  },
});

export const signupActions = signupSlice.actions;
export default signupSlice.reducer;
