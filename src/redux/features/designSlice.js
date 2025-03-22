import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  designState: true,
  medallionState: false,
  leatherSoleState: true,
  trackingEvaSoleState: false,
  rubberSoleState: false,
};

const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    setDesignState: (state, action) => {
      state.designState = action.payload;
    },
    setMedallionState: (state, action) => {
      state.medallionState = action.payload;
    },
    setLeatherSoleState: (state, action) => {
      state.leatherSoleState = action.payload;
    },
    setTrackingEvaSoleState: (state, action) => {
      state.trackingEvaSoleState = action.payload;
    },
    setRubberSoleState: (state, action) => {
      state.rubberSoleState = action.payload;
    },
  },
});

export const {
  setDesignState,
  setMedallionState,
  setLeatherSoleState,
  setTrackingEvaSoleState,
  setRubberSoleState,
} = designSlice.actions;

export default designSlice.reducer;
