import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedModel: "oxford",
  selectedStyle: "wingTip",
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setSelectedStyle: (state, action) => {
      state.selectedModel = action.payload;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
  },
});

export const { setSelectedStyle, setSelectedModel } = modelSlice.actions;
export default modelSlice.reducer;
