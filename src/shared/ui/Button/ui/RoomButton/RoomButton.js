import React from 'react';
import {Button} from 'antd';
import s from "./RoomButton.module.scss"

const RoomButton = ({handleValueRooms}) => {

    const renderBtns = [1, 2, 3, 4]

    return (
        <div className={s.RoomButtons}>
            {renderBtns.map(el => <Button className={`${s['room-button']}`} key={el} value={el}
                                          onClick={handleValueRooms}>{el}</Button>)}
            <Button className={`${s['room-button']}`} key={5} value={5}
                    onClick={handleValueRooms}>5<label>+</label></Button>

        </div>
    );
};

export default RoomButton;