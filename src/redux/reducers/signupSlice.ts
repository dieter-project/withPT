import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

export type SignupState = {
  name: string | null,
  year: string | null,
  month: string | null,
  date: string | null,
  gender: string | null,
  nickname: string | null,
  height: string | null,
  weight: string | null,
  meal_plan: string | null,
  workout_plan: string | null,
  weight_plan: string | null
};

let initialState: SignupState = {
  name: null,
  year: null,
  month: null,
  date: null,
  gender: null,
  nickname: null,
  height: null,
  weight: null,
  meal_plan: null,
  workout_plan: null,
  weight_plan: null
}

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    saveSignupState: (state, action) => {
      return { ...state, ...action.payload }
    },
    signupStateReset: (state) => {
      state = initialState
    }
  }
});

export const signupActions = signupSlice.actions;
export default signupSlice.reducer;
