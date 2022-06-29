import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface detailsState {
  showDetails: boolean;
}

const initialState: detailsState = {
  showDetails: false,
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    toggleShowDetails: (state) => {
      state.showDetails = !state.showDetails;
    },
  },
});

export const { toggleShowDetails } = detailsSlice.actions;

export const selectDetails = (state: RootState) => state.showDetails;

export default detailsSlice.reducer;
