import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

export type MemberState = {
  id: string | null,
  name: string | null,
  email: string | null,
  accessToken: string | null,
};

let initialState: MemberState = {
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

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    isLogin(state, action){
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      console.log('login state: ', current(state));
    },
    getToken(state, action: PayloadAction<string>){
      state.accessToken = action.payload
      console.log('token state: ', current(state));
    }
  }
});

export const memberActions = memberSlice.actions;
export default memberSlice.reducer;
