import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/data.slice";
export const store = configureStore({
  reducer: {
    dataReducer,
  },
});
