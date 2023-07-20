import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";

const App = () => {
  const [position, setPosition] = useState(false);
  const isActive = (isActive) => setPosition(isActive);

  // тільки при ширині 450px буде змінюватися  position дял меню, для фіксувані екрану при відкриті меню

  let menuLogic =
    window.innerWidth < 450
      ? position
        ? { position: "fixed" }
        : { position: "static" }
      : { position: "static" };

  return (
    <div className="wrapper" style={menuLogic}>
      <div>
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
