import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import member from "./reducers/memberSlice";
import trainerSignup from "./reducers/trainerSignupSlice";
import signup from "./reducers/signupSlice";
import workoutRecord from "./reducers/workoutRecordSlice";
import storage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

// const createNoopStorage = () => {
//   return {
//     getItem(_key: any) {
//       return Promise.resolve(null);
//     },
//     setItem(_key: any, value: any) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key: any) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window === 'undefined'
//     ? createNoopStorage()
//     : createWebStorage('local');

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["signup", "workoutRecord", "trainersignup"], //적용할 리듀서
  timeout: 1000,
};

const rootReducer = combineReducers({
  member,
  signup,
  workoutRecord,
  trainerSignup,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
// export const persistor = persistStore(store);
