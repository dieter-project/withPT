import { SignupRequest } from "@/types/common/auth";
import { createSlice } from "@reduxjs/toolkit";

let initialState: SignupRequest = {
  email: '',
  name: '',
  birth: '',
  sex: '',
  height: 0,
  weight: 0,
  dietType: '',
  targetWeight: 0,
  exerciseFrequency: '',
  authProvider: '',
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
