import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import cls from "./AdsPage.module.scss";
import {AntdForm} from "../../widgets";

const AdsPage = () => {
    return (
        <section className={cls.AdsPage__background}>
            <div className="container">
                <p>Разместите своё объявление!</p>
                <div className={cls.adsPage__form}>
                    <AntdForm/>
                </div>
            </div>
        </section>
    );
};

export default AdsPage;
