import React from 'react';
import {Button} from 'antd';
import s from "./RoomButton.module.scss"

const RoomButton = ({handleValueRooms}) => {

    const renderBtns = [1, 2, 3, 4 , 5]

    return (
        <div className={s.RoomButtons}>
            {renderBtns.map(el => <Button className={`${s['room-button']}`} key={el} value={el}
                                          onClick={handleValueRooms}>{el}</Button>)}

        </div>
    );
};

export default RoomButton;