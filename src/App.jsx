import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Content />
      </div>
    </>
  );
};

export default App;
