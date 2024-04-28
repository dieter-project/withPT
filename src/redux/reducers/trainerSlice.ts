import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

export type TrainerState = {
  id: string | null;
  name: string | null;
  email: string | null;
  accessToken: string | null;
};

let initialState: TrainerState = {
  id: null,
  name: null,
  email: null,
  accessToken: null,
};

export type TokenPayload = {
  accessToken: string | null;
};

const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {
    isLogin(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    getToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
      console.log("token state: ", current(state));
    },
  },
});

export const trainerActions = trainerSlice.actions;
export default trainerSlice.reducer;
