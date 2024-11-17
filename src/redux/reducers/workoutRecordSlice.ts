import { WorkoutPayload } from "@/types/member/record";
import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

const initialState: WorkoutPayload[] = []

const workoutRecordSlice = createSlice({
  name: 'workoutRecord',
  initialState,
  reducers: {
    addWorkoutState: (state, action) => {
      console.log('state: ', state);
      console.log('action: ', action);
      state.push(action.payload)
      // return [ ...state, { ...action.payload } ]
    },
    deleteWorkoutState: (state, action) => {
      return state.filter((workout, index) => action.payload !== index)
    },
    workoutStateReset: (state) => {
      return state = []
    }
  }
});

export const workoutRecordActions = workoutRecordSlice.actions;
export default workoutRecordSlice.reducer;
