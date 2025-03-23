import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  styleState: false,
  soleStyleState: false,
  medallionStyleState: false,
  toeCapStyleState: false,
};

const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    setStyleState: (state, action) => {
      state.styleState = action.payload;
    },
    setMedallionStyleState: (state, action) => {
      state.medallionStyleState = action.payload;
    },
    setSoleStyleState: (state, action) => {
      state.soleStyleState = action.payload;
    },
    setToeCapStyleState: (state, action) => {
      state.toeCapStyleState = action.payload;
    },
  },
});

export const {
  setStyleState,
  setMedallionStyleState,
  setSoleStyleState,
  setToeCapStyleState,
} = styleSlice.actions;

export default styleSlice.reducer;
