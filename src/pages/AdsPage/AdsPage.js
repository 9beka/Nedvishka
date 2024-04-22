import React from "react";
import cls from "./AdsPage.module.scss";
import {AntdForm} from "../../widgets";

const AdsPage = () => {
    return (
        <section className={cls.AdsPage__background}>
            <div className="container">
                <p>Разместите своё объявление у нас!</p><p>Вашу недвижимость мы будем показывать на нашем сайте, а также
                на других популярных платформах</p>
                <div className={cls.adsPage__form}>
                    <AntdForm/>
                </div>
            </div>
        </section>
    );
};

export default AdsPage;
