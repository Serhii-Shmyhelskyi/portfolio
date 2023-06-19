import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "../redux/slices/menuSlice";
import contentReducer from "./slices/contentSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    content: contentReducer,
  },
});
