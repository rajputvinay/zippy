import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    CartItems: [],
    isLoggedIn: false,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.CartItems.push(action.payload);
    },
    manageLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    updateCartItem(state, action) {
      const existingCartItmeIndex = state.CartItems.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      const existingCartItem = state.CartItems[existingCartItmeIndex];
      existingCartItem.card.info.inStock++;
    },
    removeCartItem(state, action) {
      const existingCartItmeIndex = state.CartItems.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      const existingCartItem = state.CartItems[existingCartItmeIndex];
      if (existingCartItem.card.info.inStock === 1) {
        // state.CartItems.pop();
        state.CartItems = state.CartItems.filter(
          (item) => item.card.info.id !== action.payload.card.info.id
        );
      } else {
        existingCartItem.card.info.inStock--;
      }
    },
    totalBill: (state, action) => {
      state.CartItems.reduce(() => {}, 0);
    },
  },
});
export const { addToCart, updateCartItem, removeCartItem, manageLogin } =
  cartSlice.actions;
export default cartSlice.reducer;
