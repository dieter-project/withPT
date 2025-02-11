// store/spinnerSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SpinnerState {
  spinnerType: string;
}

const initialState: SpinnerState = {
  spinnerType: "/basic",
};

const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    setSpinnerType(state, action: PayloadAction<string>) {
      state.spinnerType = action.payload;
    },
  },
});

export const useSpinner = spinnerSlice.actions;
export default spinnerSlice.reducer;
