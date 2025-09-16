import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  designState: true,
  medallionState: false,
  soleState: "rubber",
  lacesStyle: "black",
  eyeletsStyle: "blind eyelets",
  eyeletsColor: "black",
  materialColor: "black",
  toeCapColor: "black",
  vampColor: "black",
  facingColor: "black",
  quarterColor: "black",
  heelCapColor: "black",
  toungueColor: "black",
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
    setToeCapColor: (state, action) => {
      state.toeCapColor = action.payload;
    },
    setVampColor: (state, action) => {
      state.vampColor = action.payload;
    },
    setFacingColor: (state, action) => {
      state.facingColor = action.payload;
    },
    setQuarterColor: (state, action) => {
      state.quarterColor = action.payload;
    },
    setHeelCapColor: (state, action) => {
      state.heelCapColor = action.payload;
    },
    setToungueColor: (state, action) => {
      state.toungueColor = action.payload;
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
  setToeCapColor,
  setVampColor,
  setFacingColor,
  setQuarterColor,
  setHeelCapColor,
  setToungueColor,
} = designSlice.actions;

export default designSlice.reducer;
