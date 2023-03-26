import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDataItems: [],
  loading: true,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getCurrentItems: (state, action) => {
      state.currentDataItems = action.payload;
    },

    setIsLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default dataSlice.reducer;

export const dataStore = (state) => state.data;

export const { getCurrentItems, setIsLoading } = dataSlice.actions;
