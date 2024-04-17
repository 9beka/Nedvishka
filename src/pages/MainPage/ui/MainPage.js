import React from "react";
import "./MainPage.scss";
import { Options } from "../../../shared/ui";
import { FilterForm, Sell } from "../../../features/ui";
import { AboutUs, Contacts, OurAgency ,Footer } from "../../../widgets";

const MainPage = () => {
  return (
    <>
      <div className="main__wrapper">
        <div className="main__wrapper__fon"></div>
        <div className="container">
          <FilterForm />
        </div>
        <Sell />
        <OurAgency />
        <AboutUs />
        <Contacts />
        <Footer/>
      </div>
    </>
  );

};
export default MainPage;
