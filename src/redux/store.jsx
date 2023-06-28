import { configureStore } from "@reduxjs/toolkit";

import contentReducer from "./slices/contentSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export default store;

// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import menuReducer from "../redux/slices/menuSlice";
// import contentReducer from "./slices/contentSlice";

// const rootReducer = combineReducers({
//   menu: menuReducer,
//   content: contentReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export default store;
