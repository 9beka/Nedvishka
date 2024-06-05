import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/providers/Redux/store";
import {StyleProvider} from '@ant-design/cssinjs';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <StyleProvider hashPriority="high">
                <App/>
            </StyleProvider>
        </BrowserRouter>
    </Provider>
);
