import React from "react";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from "./providers/router";
import {Footer, Header} from "../widgets";

const App = () => {
    //check
  return (
    <>
      <Header/>
      <AppRouter />
        <Footer/>
    </>
  );
};

export default App;
