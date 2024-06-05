import React from 'react';
import cls from './Button.module.scss';

const Button = ({ text, style }) => {
    return (
        <button className={`${cls.button} ${cls[style]}`}>{text}</button>
    );
};

export default Button;
