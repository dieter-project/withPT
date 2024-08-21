import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

// export type WorkoutRecordState = []


export type WorkoutPayload = {
  uploadDate: string,
  title: string,
  weight: number,
  exerciseSet: number,
  exerciseTime: number,
  times: number,
  bookmarkYn: boolean,
  bodyParts: string[],
  exerciseType: string,
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
