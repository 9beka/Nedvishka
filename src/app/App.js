import React from "react";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import {AppRouter} from "./providers/router";


const App = () => {


    return (
        <>
            <AppRouter/>

        </>
    );
};

export default App;
