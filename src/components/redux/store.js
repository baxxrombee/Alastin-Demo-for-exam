import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import currencyReducer from "./currencySlice";
import magazinReducer from "./magazinSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    currency: currencyReducer,
    magazin: magazinReducer,
  },
});

export default store;
