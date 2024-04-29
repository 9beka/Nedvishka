import React from 'react';
import { Button } from 'antd';
import s from "./RoomButton.module.scss"
const RoomButton = () => {

    const renderBtns = [1,2,3,4,'5+']

    const handleResult = (e) => {
        console.log(e.target.value)
    }

   return (
     <div className={s.RoomButtons}>
         {renderBtns.map(el => <Button key={el} value={el} onClick={handleResult}>{el}</Button>)}
     </div>
   );
};

export default RoomButton;