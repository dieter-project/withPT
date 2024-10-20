import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

export type SignupState = {
  email: string | null,
  name: string | null,
  birth: string | null,
  sex: string | null,
  height: number | null,
  weight: number | null,
  dietType: string | null,
  exerciseFrequency: number | null,
  targetWeight: number | null,
  authProvider: string | null,
  role: string | null
};

let initialState: SignupState = {
  email: null,
  name: null,
  birth: null,
  sex: null,
  height: null,
  weight: null,
  dietType: null,
  exerciseFrequency: null,
  targetWeight: null,
  authProvider: null,
  role: null
}

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    saveSignupState: (state, action) => {
      return { ...state, ...action.payload }
    },
    signupStateReset: (state) => {
      return state = initialState
    }
  }
});

export const signupActions = signupSlice.actions;
export default signupSlice.reducer;
