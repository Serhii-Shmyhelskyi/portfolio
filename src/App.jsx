import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <div className="container">
        <Content />
      </div>
    </div>
  );
};

export default App;
