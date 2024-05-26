import React from "react";
import { Button } from "antd";
import s from "./RoomButton.module.scss";

const RoomButton = ({ handleValueRooms, rooms }) => {
  const renderBtns = [1, 2, 3, 4, 5];

  return (
    <div className={s.RoomButtons}>
      {renderBtns.map((el) => {
        return (
          <Button
            className={`${s["room-button"]} ${
              Number(rooms) === Number(el) ? s.active : ""
            }`}
            key={el}
            value={el}
            onClick={handleValueRooms}
          >
            {el}
          </Button>
        );
      })}
    </div>
  );
};

export default RoomButton;
