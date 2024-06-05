import React from "react";
import { Slider } from "antd";

const SliderFilter = ({ priceForm, handleValuePrice }) => {
  return (
    <>
      <h5>
        Цена<span> {priceForm[0]?.toLocaleString("ru-RU")}</span> сом до{" "}
        <span>{priceForm[1]?.toLocaleString("ru-RU")}сом</span>
      </h5>
      <Slider
        range={{ draggableTrack: true }}
        defaultValue={[0, 200000]}
        max={200000}
        onChange={handleValuePrice}
      />
    </>
  );
};

export default SliderFilter;
