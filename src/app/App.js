import React from "react";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from "./providers/router";
import { Header } from "../widgets";

const App = () => {
  return (
    <>
      <Header/>
      <AppRouter />
    </>
  );
};

export default App;
