import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import resultReducer from "./results/resultSlice";

export const store = configureStore({
  reducer: {
    standings: resultReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
