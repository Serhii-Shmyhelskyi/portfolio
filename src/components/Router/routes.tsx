import React, { FC } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import Content from "../../pages/Home/index";
import Me from "../../pages/Me";
import MyOldWorks from "../../pages/MyOldWorks";
import ErrorComponent from "../ErrorComponent";

export const router = createBrowserRouter([
  {
    path: "portfolio",
    // portfolio
    element: <App />,
    children: [
      {
        index: true,
        element: <Content />,
      },
      {
        path: "me",
        element: <Me />,
      },
      {
        path: "oldWorks",
        element: <MyOldWorks />,
      },
      {
        path: "*",
        element: <ErrorComponent />,
      },
    ],
  },
]);
