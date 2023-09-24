"use client";

import { persistStore } from "redux-persist";
import store from "./store";
// import * as reactRedux from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  let persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
