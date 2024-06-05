import React from 'react';
import cls from './AboutUs.module.scss'
import {AntdTabs} from "../../../shared/ui";

const AboutUs = () => {
    return (
        <div className={cls.aboutUs}>
            <div className="wrapper">
                <p>О нашем агентстве недвижимости
                </p>
                <p>Мы поможем вам продать, купить квартиру, дом, участок, офис и другую <br/> коммерческую недвижимость. А также
                    поможем с ипотекой и срочным <br/> выкупом квартир в городе Бишкек.
                </p>
                <AntdTabs/>
            </div>
        </div>
    );
};

export default AboutUs;
