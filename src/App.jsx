import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Menu />
        <Content />
      </div>
    </div>
  );
};

export default App;
