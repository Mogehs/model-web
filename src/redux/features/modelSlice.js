import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedModel: "oxford",
  selectedStyle: "cap toe",
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
    setSelectedStyle: (state, action) => {
      state.selectedStyle = action.payload;
    },
  },
});

export const { setSelectedStyle, setSelectedModel } = modelSlice.actions;
export default modelSlice.reducer;
