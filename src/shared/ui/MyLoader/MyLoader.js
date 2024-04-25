import React from 'react';
import cls from './MyLoader.module.scss'

function MyLoader({classes}) {
    return (
        <div className={cls.loaderContainer}>

        <span className={`${cls.loader} ${cls[classes]}`}></span>
        </div>
    );
}

export default MyLoader;