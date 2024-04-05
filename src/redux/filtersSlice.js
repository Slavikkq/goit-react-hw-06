import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    searchTerm: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload.toLowerCase();
    },
  },
});

export const { changeFilter, setSearchTerm } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.name;
export const selectSearchTerm = (state) => state.filters.searchTerm;

export default filtersSlice.reducer;
