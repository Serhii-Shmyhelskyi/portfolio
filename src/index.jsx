import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./redux/store";
import { router } from "./components/Router/routes";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={<h3>Loading</h3>} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
      {/* <RouterProvider router={router} /> */}
    </PersistGate>
  </Provider>
);
