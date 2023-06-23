import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import Content from "../../pages/Content/index";
import Me from "../../pages/Me";
import Blog from "../../pages/Blog";
import Contacts from "../../pages/Contacts";
import ErrorPage from "../../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    // portfolio
    element: <App />,
    children: [
      {
        index: true,
        element: <Content />,
      },
      {
        path: "/me",
        element: <Me />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
