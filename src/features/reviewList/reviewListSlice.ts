import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ReviewState } from "../../types/types";

const initialState: ReviewState[] = require("../../data/reviews.json");

export const reviewListSlice = createSlice({
  name: "reviewList",
  initialState,
  reducers: {
    updateList: (state, action) => {
      state[state.findIndex((el) => el.id === action.payload.id)] =
        action.payload;
    },
  },
});

export const { updateList } = reviewListSlice.actions;

export const selReviewList = (state: RootState) => state.reviewList;

export default reviewListSlice.reducer;
