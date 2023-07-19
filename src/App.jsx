import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";

const App = () => {
  const [position, setPosition] = useState(false);
  const isActive = (isActive) => setPosition(isActive);
  return (
    <div style={position ? { position: "fixed" } : { position: "absolute" }}>
      <div className="wrapper">
        <Header />
        <div className="container">
          <Menu isActive={isActive} />
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default App;
