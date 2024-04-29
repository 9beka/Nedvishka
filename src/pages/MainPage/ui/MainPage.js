import React, {useLayoutEffect} from "react";
import "./MainPage.scss";
import { FilterForm, Sell } from "../../../features/ui";
import {AboutUs, Contacts, Footer, Header, OurAgency} from "../../../widgets";
import gsap from "gsap";


const MainPage = () => {


  useLayoutEffect(() => {
    gsap.fromTo('.main__wrapper__fon', {x:-500,opacity:0},{x:0,opacity:1})
  })


  return (
    <>

      <Header/>
      <div className="main__wrapper">
        <div className="main__wrapper__fon"></div>
        <div className="container">
          <FilterForm />
        </div>

        <Sell />
        <OurAgency />
        <AboutUs />
        <Contacts />
      </div>
      <Footer/>

    </>
  );

};
export default MainPage;
