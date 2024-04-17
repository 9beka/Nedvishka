import React from "react";
import { Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ChangePrice } from "../../../app/providers/Redux/Slices/rangePriceSlicer";
const SliderFilter = () => {
  const dispatch = useDispatch();
  const { rangePrice } = useSelector((state) => state.rangeOfPrice);
  const getValueOfSlider = (value) => {
    dispatch(ChangePrice(value));
  };

  return (
    <>
      <h5>
        Цена<span> {rangePrice[0].toLocaleString("ru-RU")}</span> $ до{" "}
        <span>{rangePrice[1].toLocaleString("ru-RU")}</span> $
      </h5>
      <Slider
        range={{ draggableTrack: true }}
        defaultValue={[0, 200000]}
        max={200000}
        onChange={getValueOfSlider}
      />
    </>
  );
};

export default SliderFilter;
