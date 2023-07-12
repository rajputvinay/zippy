import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    RestaurantCards: [],
  },
  reducers: {
    updateCards: (state, action) => {
      state.RestaurantCards = [...action.payload];
    },
  },
});

export const { updateCards } = SearchSlice.actions;
export default SearchSlice.reducer;
