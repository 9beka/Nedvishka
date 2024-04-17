import React from 'react';
import cls from './Footer.module.scss'

const Footer = () => {
    return (<footer className={cls.footer}>
        <div className="container">
            <div className={cls.footer__wrapper}>
                <div className={cls.footer__block}>
                    <p className={cls.footer__p}>Связь с нами</p>
                    <a>Джантошева 121 / Байтик Баатыра, Бишкек, Кыргызстан</a>
                    <a>WhatsApp</a>
                    <a>+996551660066</a>
                    <a>+996501660066</a>
                    <a>kyrgyz.ned@gmail.com</a>
                    <a>Кыргыз Недвижимость</a>
                </div>
                <div className={cls.footer__block}>
                    <p className={cls.footer__p}>Категории</p>
                    <a>Вторичная недвижимость</a>
                    <a>Дома и Участки</a>
                    <a>Коммерческая недвижимость</a>
                    <a>Элитка</a>
                </div>
            </div>
        </div>
    </footer>);
};

export default Footer;
