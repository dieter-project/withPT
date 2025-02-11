import { Middleware, Store, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import memberReducer from "../redux/reducers/memberSlice";
import trainerReducer from "../redux/reducers/trainerSlice";

import {
  EnhancedStore,
  ThunkAction,
  configureStore,
  Action,
} from "@reduxjs/toolkit";
import { MakeStore, createWrapper } from "next-redux-wrapper";

const persistConfig = {
  key: "root",
  storage: typeof window !== "undefined" ? storage : null,
  // whitelist: ['auth'],
  timeout: 5000,
};

const rootReducer = combineReducers({
  trainer: trainerReducer,
  member: memberReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// const setupStore = (context: any): EnhancedStore => store;
// const makeStore: MakeStore<any> = (context: any) => setupStore(context)

// export const wrapper = createWrapper<Store>(makeStore)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch();
// export const useAppSelector = useSelector;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export default store;
