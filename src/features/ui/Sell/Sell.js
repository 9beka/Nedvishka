import React, {useLayoutEffect} from 'react';
import cls from './Sell.module.scss'
import {Button} from "../../../shared/ui";
import {renderApiSlides} from '../../../shared/constants';
import {HeartOutlined, ShareAltOutlined, WhatsAppOutlined} from "@ant-design/icons";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


const Sell = () => {

    gsap.registerPlugin(ScrollTrigger)


    useLayoutEffect(() => {

        gsap.fromTo('.button-gsap',{opacity:0,x:-500},{opacity:1,x:0})

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.card-gsap',
                start: 'top 90%',
                end: 'bottom 100%',
                // scrub: true,
                markers: {
                    startColor: 'white',
                    endColor: 'white'
                }
            }
        });


        tl.from('.card-gsap', {
            opacity: 0,
            y: 50
        }).to('.card-gsap', {
            opacity: 1,
            y: 0
        });
    });

    return (
        <div className={cls.sell__block}>
            <div className='wrapper'>
                <h1 className={`${cls.sell__p} title`}>Срочная продажа</h1>
                <div
                    className={cls.sell__wrapper}
                >
                    {renderApiSlides.map(slide => (
                        <div className={`${cls.card} card-gsap`}>
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
                                <WhatsAppOutlined/>
                                <ShareAltOutlined/>
                                <HeartOutlined/>
                            </div>

                        </div>

                    ))}

                </div>

                <div className={`${cls.btn__wrap} button-gsap`}>{
                    <Button text='Посмотреть все' style='viewAll'/>
                }</div>

            </div>
        </div>


    );
};

export default Sell;

