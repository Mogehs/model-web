import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./features/modelSlice";
import designReducer from "./features/designSlice";

export const store = configureStore({
  reducer: {
    model: modelReducer,
    design: designReducer,
  },
});
