import React from 'react';
import cls from './Card.module.scss'

const Card = ({card, style,col}) => {
    const {img, text} = card
    return (

            <div className={`${cls.card} ${cls[style]}`}>
                <img src={img} alt=""/>
                <p>{text}</p>
            </div>

    );
};

export default Card;
