import React from 'react';
import cls from './Sell.module.scss'
import {Button} from "../../../shared/ui";
import { renderApiSlides } from '../../../shared/constants';
import {HeartOutlined, ShareAltOutlined, WhatsAppOutlined} from "@ant-design/icons";

const Sell = () => {
    return (
        <div className={cls.sell__block}>
            <div className='wrapper'>
                <h1 className={cls.sell__p}>Срочная продажа</h1>
                <div
                    className={cls.sell__wrapper}
                >
                    {renderApiSlides.map(slide => (
                        <div className={cls.card}>
                            <img
                                className={cls.image__house}
                                src={slide.img}
                                alt=""/>
                            <p className={cls.apartment__p}>{slide.apartment}</p>
                            <p className={cls.geo__p}>{slide.geo}</p>
                            <p className={cls.price__p}>{slide.price}</p>
                            <div className={cls.footer__slide}>
                                <img src={slide.avatar} alt=""/>
                                <p className={cls.phone__p}>{slide.phone}</p>
                            </div>
                            <div className={cls.footer__slide}>
                                <WhatsAppOutlined />
                                <ShareAltOutlined />
                                <HeartOutlined />
                            </div>

                        </div>

                    ))}

                </div>

                <div className={cls.btn__wrap}>{
                    <Button text='Посмотреть все' style='viewAll'/>
                }</div>

            </div>
        </div>


    );
};

export default Sell;

