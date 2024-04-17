import React from 'react';
import cls from './OurAgency.module.scss'
import {Card} from "../../../shared/ui";

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

    return (
        <div className={cls.ourAgency}>
            <div className="container">
                <p>Выбирайте наше агентство <br/> недвижимости</p>
                <p>У нас есть многолетний опыт в сфере недвижимости и вы получите <br/> полный пакет услуг, чтобы наилучшим
                    образом продать купить <br/> квартиру, дом, участок, коммерческую недвижимость в Бишкеке.
                </p>
                <div className="row">
                    {renderApiBuilding.map((card , index) => (
                        <Card key={index} card={card} col='col-3' style={'ourAgencyCard'}/>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurAgency;
