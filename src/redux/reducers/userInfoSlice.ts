import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

export type UserInfoState = {
  id: number | null,
  name: string | null,
  email: string | null,
  accessToken: string | null,
};

let initialState: UserInfoState = {
  id: null,
  name: null,
  email: null,
  accessToken: null,
}

export type TokenPayload = {
  accessToken: string | null
}
// function userReducer() {

// }

// export default userReducer;

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    isLogin(state, action){
      return { 
        ...state, 
        ...action.payload 
      }
    },
    getToken(state, action: PayloadAction<string>){
      state.accessToken = action.payload
      console.log('token state: ', current(state));
    },
    userInfoReset(state) {
      return state = initialState
    }
  }
});

export const userInfoActions = userInfoSlice.actions;
export default userInfoSlice.reducer;
