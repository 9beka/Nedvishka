import React, {useEffect, useState, Suspense, lazy} from "react";
import {useSelector} from "react-redux";
import gsap from "gsap";
import "./MainPage.scss";
import {MyLoader} from "../../../shared/ui";
import {Header, Footer} from "../../../widgets";

// Используем динамическую загрузку для компонентов
const Sell = lazy(() => import('../../../features/ui/Sell/Sell'));
const OurAgency = lazy(() => import("../../../widgets/OurAgency/ui/OurAgency"));
const AboutUs = lazy(() => import("../../../widgets/AboutUs/ui/AboutUs"));
const Contacts = lazy(() => import("../../../widgets/Contacts/ui/Contacts"));

const MainPage = () => {
    const {loading} = useSelector((state) => state.ads);

    useEffect(() => {


        gsap.fromTo(
            ".main__wrapper__fon",
            {x: -500, opacity: 0},
            {x: 0, opacity: 1}
        );
    }, []);

    return (
        <>
            {loading && <MyLoader/>}
            <Header/>
            <div className="main__wrapper">
                <div className="main__wrapper__fon"></div>

                <Suspense fallback={<div>Loading...</div>}>
                    <Sell/>
                    <OurAgency/>
                    <AboutUs/>
                    <Contacts/>
                </Suspense>

            </div>
            <Footer/>
        </>
    );
};

export default React.memo(MainPage);
