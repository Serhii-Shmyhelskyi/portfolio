import React from "react";

import { HashRouter, Outlet, Route, Routes } from "react-router-dom";

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
          <Routes>
            <Route path="" />
          </Routes>
        </HashRouter>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;
