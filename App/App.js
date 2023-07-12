import React from "react";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./src/components/footer";
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
