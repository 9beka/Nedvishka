import React from 'react';
import cls from "./AdsPage.module.scss";
import { AntdForm } from '../../widgets/AntdForm';
const AdsPage = () => {
    return (
        <section className={cls.AdsPage__background}>
            <div className="container">
                <div className={cls.adsPage__form}>
                    <AntdForm/>
                </div>
            </div>
        </section>
    );
};

export default AdsPage;
