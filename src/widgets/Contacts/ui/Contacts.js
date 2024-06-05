import React from 'react';
import cls from './Contacts.module.scss'
import {Button} from "../../../shared/ui";

const Contacts = () => {
    return (
        <div className={cls.contacts}>
            <div className="container">
                <div className={cls.contacts__wrap}>
                    <div className={cls.input__wrap}>
                        <p>Ваше Имя</p>
                        <input type="text" placeholder={'Ваше Имя'}/>
                    </div>
                    <div className={cls.input__wrap}>
                        <p>Номер телефона**</p>
                        <input type="text" placeholder={'Номер телефона*'}/>
                    </div>
                    <Button text={'Отправить'} style={'viewAll'}/>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
