import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Menu />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;
