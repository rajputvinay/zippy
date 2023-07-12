import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import CartSlice from "./CartSlice";

const Store = configureStore({
  reducer: {
    search: SearchSlice,
    cart: CartSlice,
  },
});

export default Store;
