import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reviewReducer from "../features/review/reviewSlice";
import reviewListReducer from "../features/reviewList/reviewListSlice";
import showDetailsReducer from "../features/details/detailsSlice";

export const store = configureStore({
  reducer: {
    review: reviewReducer,
    reviewList: reviewListReducer,
    showDetails: showDetailsReducer,
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
