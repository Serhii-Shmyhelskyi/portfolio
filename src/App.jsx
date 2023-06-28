import React from "react";

import { HashRouter, Outlet } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Menu />
        <HashRouter>
          <Outlet></Outlet>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;
