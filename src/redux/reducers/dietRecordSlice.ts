import { DietFood } from "@/types/member/record";
import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";


const initialState: DietFood[] = []

const dietRecordSlice = createSlice({
  name: 'dietRecord',
  initialState,
  reducers: {
    addDietState: (state, action) => {
      return [...state, { ...action.payload }]
    },
    deleteDietState: (state, action) => {
      return state.filter((diet, index) => action.payload !== index)
    },
    dietStateReset: (state) => {
      return state = []
    }
  }
});

export const dietRecordActions = dietRecordSlice.actions;
export default dietRecordSlice.reducer;
