import React from 'react';
import cls from './Sell.module.scss'
import {Button} from "../../../shared/ui";


const Sell = () => {

    const renderApiSlides = [
        {
            id: 12345,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s',
            apartment: 'Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт',
            geo: 'Филармония, Уметалиева-Фрунзе',
            price: '$73 500 / 6 594 420сом',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s',
            phone: '+996555555555'
        },
        {
            id: 12345,
            img: 'https://ned.kg//storage/153795/conversions/64a55acf30605_IMG_5318-bigpreview.jpg',
            apartment: 'Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт',
            geo: 'Филармония, Уметалиева-Фрунзе',
            price: '$73 500 / 6 594 420сом',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s',
            phone: '+996555555555'
        },
        {
            id: 12345,
            img: 'https://ned.kg//storage/180648/conversions/652e49c65d0c6_D71842FD-75C3-45DF-AAFA-18696EF4EA5B-bigpreview.jpg',
            apartment: 'Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт',
            geo: 'Филармония, Уметалиева-Фрунзе',
            price: '$73 500 / 6 594 420сом',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s',
            phone: '+996555555555'
        },
        {
            id: 12345,
            img: 'https://ned.kg//storage/180648/conversions/652e49c65d0c6_D71842FD-75C3-45DF-AAFA-18696EF4EA5B-bigpreview.jpg',
            apartment: 'Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт',
            geo: 'Филармония, Уметалиева-Фрунзе',
            price: '$73 500 / 6 594 420сом',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s',
            phone: '+996555555555'
        },

        {
            id: 12345,
            img: 'https://ned.kg//storage/153795/conversions/64a55acf30605_IMG_5318-bigpreview.jpg',
            apartment: 'Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт',
            geo: 'Филармония, Уметалиева-Фрунзе',
            price: '$73 500 / 6 594 420сом',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s',
            phone: '+996555555555'
        },
        {
            id: 12345,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s',
            apartment: 'Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт',
            geo: 'Филармония, Уметалиева-Фрунзе',
            price: '$73 500 / 6 594 420сом',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s',
            phone: '+996555555555'
        },
    ]


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

