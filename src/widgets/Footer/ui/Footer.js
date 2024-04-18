import React from 'react';
import cls from './Footer.module.scss'
import { Link } from "react-router-dom";
const Footer = () => {
    return (<footer className={cls.footer}>
        <div className="container">
            <div className={cls.footer__wrapper}>
                <div className={cls.footer__block}>
                    <p className={cls.footer__p}>Связь с нами</p>
                    <Link>Джантошева 121 / Байтик Баатыра, Бишкек, Кыргызстан</Link>
                    <Link target='_blank' to={"https://wa.me/+996507688388"}>WhatsApp</Link>
                    <Link>+996 507 688 388</Link>
                    <Link>kyrgyz.ned@gmail.com</Link>
                    <Link>Кыргыз Недвижимость</Link>
                </div>
                <div className={cls.footer__block}>
                    <p className={cls.footer__p}>Категории</p>
                    <Link>Вторичная недвижимость</Link>
                    <Link>Дома и Участки</Link>
                    <Link>Коммерческая недвижимость</Link>
                    <Link>Элитка</Link>
                </div>
            </div>
        </div>
    </footer>);
};

export default Footer;
