import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about: null,
  news: null,
  laws: null,
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    putData: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { putData } = dataSlice.actions;
export default dataSlice.reducer;
