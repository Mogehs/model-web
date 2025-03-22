import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modelLoaded: false,
  selectedModel: "wingTip",
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setModelLoaded: (state, action) => {
      state.modelLoaded = action.payload;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
  },
});

export const { setModelLoaded, setSelectedModel } = modelSlice.actions;
export default modelSlice.reducer;
