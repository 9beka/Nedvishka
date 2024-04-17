import React from 'react';
import { Button } from 'antd';
import s from "./RoomButton.module.scss"
const RoomButton = () => {
   return (
     <div className={s.RoomButtons}>
         <Button> 1</Button>
         <Button> 2</Button>
         <Button> 3</Button>
         <Button> 4</Button>
         <Button> 5+</Button>
     </div>
   );
};

export default RoomButton;