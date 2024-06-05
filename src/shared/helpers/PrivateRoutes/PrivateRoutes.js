import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {Footer, Header} from "../../../widgets";

function PrivateRoutes() {

    const {token} = useSelector(state => state.auth)

    return (
        token ? (
            <>
                <Header/>
                <Outlet/>
                <Footer/>
            </>
        ) : <Navigate to={'/register'}/>
    );
}

export default PrivateRoutes;