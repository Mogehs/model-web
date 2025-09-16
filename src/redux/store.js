import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./features/modelSlice";
import designReducer from "./features/designSlice";
import styleReducer from "./features/styleSlice";

export const store = configureStore({
  reducer: {
    model: modelReducer,
    design: designReducer,
    style: styleReducer,
  },
});
