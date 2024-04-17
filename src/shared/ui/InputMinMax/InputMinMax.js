import React from "react";
import { InputNumber } from "antd";
import { useSelector } from "react-redux";
const InputMinMax = () => {
  const styleInput = {
    border: "2px solid #6CA5DC",
  };
  const { rangePrice } = useSelector((state) => state.rangeOfPrice);
  return (
    <>
      <InputNumber
        style={styleInput}
        min={1}
        max={10}
        placeholder={rangePrice && rangePrice[0] > 1 ? rangePrice[0] : "мин..."}
      />
      <InputNumber
        style={styleInput}
        min={1}
        max={10}
        placeholder={
          rangePrice && rangePrice[1] < 200000 ? rangePrice[1] : "макс..."
        }
      />
    </>
  );
};

export default InputMinMax;
