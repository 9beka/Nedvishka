import React, {useLayoutEffect} from 'react';
import cls from './OurAgency.module.scss'
import {Card} from "../../../shared/ui";
import {classNames} from "../../../shared/helpers";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
const OurAgency = () => {
    const renderApiBuilding = [
        {
            img:'https://www.svgrepo.com/show/13776/building.svg',
            text: 'Продажа Вашей недвижимости​'
        },
        {
            img:'https://www.svgrepo.com/show/13776/building.svg',
            text: 'Продажа Вашей недвижимости​'
        },
        {
            img:'https://www.svgrepo.com/show/13776/building.svg',
            text: 'Продажа Вашей недвижимости​'
        },
        {
            img:'https://www.svgrepo.com/show/13776/building.svg',
            text: 'Продажа Вашей недвижимости​'
        },
    ]

    gsap.registerPlugin(ScrollTrigger)


    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.card-gsap',
                start: 'top 80%',
                end: 'bottom 40%',
                // scrub: true,
            }
        });

        gsap.from('.title', {
            opacity: 0,
            x: -500
        });

        tl.from('.card-gsap', {
            opacity: 0,
            y: 500
        }).to('.card-gsap', {
            opacity: 1,
            y: 0
        });
    });

    return (
        <div className={cls.ourAgency}>
            <div className="wrapper">
                <p>Выбирайте наше агентство <br/> недвижимости</p>
                <p>У нас есть многолетний опыт в сфере недвижимости и вы получите <br/> полный пакет услуг, чтобы наилучшим
                    образом продать купить <br/> квартиру, дом, участок, коммерческую недвижимость в Бишкеке.
                </p>
                <div className={classNames(cls.ourAgency__cards)}>
                    {renderApiBuilding.map((card , index) => (
                        <Card key={index} card={card} style={'ourAgencyCard'}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurAgency;
