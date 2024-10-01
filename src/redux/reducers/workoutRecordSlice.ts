import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

// export type WorkoutRecordState = []


export type WorkoutPayload = {
  exerciseDate: string | null,
  title: string | null,
  weight: number | null,
  set: number | null,
  times: number | null,
  hour: number | null,
  bookmarkYn: string | null,
  bodyPart: string | null,
  exerciseType: string | null,
}

const initialState: WorkoutPayload[] = []
// function userReducer() {

// }

// export default userReducer;

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
    workoutStateReset: (state) => {
      return state = []
    }
  }
});

export const workoutRecordActions = workoutRecordSlice.actions;
export default workoutRecordSlice.reducer;
