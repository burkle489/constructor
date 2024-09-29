import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cheatSheetsReducer from "./reducers/cheatSheets";
import portalReducer from "./reducers/portal";
import sideMenuReducer from "./reducers/sideMenu";

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  cheatSheets: cheatSheetsReducer,
  portal: portalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
