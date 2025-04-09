import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  designState: true,
  medallionState: false,
  soleState: "rubber",
  lacesStyle: "black",
  eyeletsStyle: "blind eyelets",
  eyeletsColor: "black",
  materialColor: "#262626",
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
    setSoleState: (state, action) => {
      state.soleState = action.payload;
    },
    setLacesStyle: (state, action) => {
      state.lacesStyle = action.payload;
    },
    setEyeletsStyle: (state, action) => {
      state.eyeletsStyle = action.payload;
    },
    setEyeletsColor: (state, action) => {
      state.eyeletsColor = action.payload;
    },
    setMaterialColor: (state, action) => {
      state.materialColor = action.payload;
    },
  },
});

export const {
  setDesignState,
  setMedallionState,
  setSoleState,
  setLacesStyle,
  setEyeletsStyle,
  setEyeletsColor,
  setMaterialColor,
} = designSlice.actions;

export default designSlice.reducer;
