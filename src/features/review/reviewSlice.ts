import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ReviewState } from "../../types/types";

const initialState: ReviewState = {
  id: "",
  author: "",
  place: "",
  published_at: "",
  rating: 0,
  content: "",
  response: "",
  response_author: "",
  response_date: "",
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    updateReview: (state, action) => {
      const payloadKeys = Object.keys(action.payload) as Array<
        keyof typeof state
      >;
      payloadKeys.forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { updateReview } = reviewSlice.actions;

export const selectReview = (state: RootState) => state.review;

export default reviewSlice.reducer;
