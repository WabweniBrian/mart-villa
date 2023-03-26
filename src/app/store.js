import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import uiReducer from "../features/uiSlice";

export default configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
  },
});
