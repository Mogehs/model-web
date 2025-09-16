import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPiecesMaterialState: false,
  styleState: false,
  soleStyleState: false,
  medallionStyleState: false,
  toeCapStyleState: false,
  modelStyleState: false,
  lacesStyleState: false,
  soleDisplaytStyleStateState: false,
  lacesType: "black",
  eyeletsStyleState: false,
  materialType: "all pieces",
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
    setModelStyleState: (state, action) => {
      state.modelStyleState = action.payload;
    },
    setLacesStyleState: (state, action) => {
      state.lacesStyleState = action.payload;
    },
    setEyeletsStyleState: (state, action) => {
      state.eyeletsStyleState = action.payload;
    },
    setSoleDisplayStyleState: (state, action) => {
      state.soleDisplayStyleState = action.payload;
    },
    setAllPiecesMaterialState: (state, action) => {
      state.allPiecesMaterialState = action.payload;
    },
    setMaterialType: (state, action) => {
      state.materialType = action.payload;
    },
    setLacesType: (state, action) => {
      state.lacesType = action.payload;
    },
  },
});

export const {
  setStyleState,
  setMedallionStyleState,
  setSoleStyleState,
  setToeCapStyleState,
  setModelStyleState,
  setLacesStyleState,
  setEyeletsStyleState,
  setAllPiecesMaterialState,
  setMaterialType,
  setLacesType,
  setSoleDisplayStyleState,
} = styleSlice.actions;

export default styleSlice.reducer;
