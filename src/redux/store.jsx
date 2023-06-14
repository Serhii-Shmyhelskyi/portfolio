import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slices/countSlice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
