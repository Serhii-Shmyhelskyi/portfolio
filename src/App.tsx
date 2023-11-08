import React from "react";

import { Outlet } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Menu />
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default App;
