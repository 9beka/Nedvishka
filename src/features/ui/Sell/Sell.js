import React from 'react';
import cls from './Sell.module.scss'
import {Button} from "../../../shared/ui";
import { renderApiSlides } from '../../../shared/constants';

const Sell = () => {
    return (
        <div className={cls.swiper}>
            <div className='wrapper'>
                <h1 className={cls.sell__p}>Срочная продажа</h1>
                <div
                    className={cls.swiper__wrapper}
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
                                <img className={cls.contact__icons}
                                     src="https://cdn-icons-png.flaticon.com/128/1077/1077055.png" alt=""/>
                                <img className={cls.contact__icons}
                                     src="https://cdn-icons-png.flaticon.com/128/1077/1077064.png" alt=""/>
                                <img className={cls.contact__icons}
                                     src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                                     alt=""/>
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

