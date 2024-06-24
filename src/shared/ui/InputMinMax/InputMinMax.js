import React from "react";
import cls from "./InputMinMax.module.scss";
import { InputNumber } from "antd";

const InputMinMax = ({ handleValuePrice, priceForm }) => {
  const styleInput = {
    border: "2px solid #6CA5DC",
  };

  return (
    <div className={cls.input}>
      <InputNumber
        style={styleInput}
        min={1}
        value={priceForm[0]}
        placeholder="Мин"
        onChange={(value) =>
          handleValuePrice([value, priceForm ? priceForm[1] : priceForm[1]])
        }
      />
      <InputNumber
        style={styleInput}
        max={20000000}
        value={priceForm[1]}
        placeholder="Макс"
        onChange={(value) =>
          handleValuePrice([priceForm ? priceForm[0] : priceForm[0], value])
        }
      />
    </div>
  );
};

export default InputMinMax;
