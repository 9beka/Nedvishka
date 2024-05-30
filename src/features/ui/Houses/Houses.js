import React from "react";
import Vtorichka from "../Vtorichka/Vtorichka";
import { InputNumber } from "antd";

const Houses = ({
  handleValueRooms,
  handleValueDistrict,
  handleValuePrice,
  priceForm,
  handleValueId,
  handleValueSostoyanie,
  handleValueSotka,
  sotka,
  handleValueComplex,
}) => {
  const styleInput = {
    border: "2px solid #6CA5DC",
  };
  return (
    <Vtorichka
      handleValueRooms={handleValueRooms}
      handleValueDistrict={handleValueDistrict}
      handleValuePrice={handleValuePrice}
      priceForm={priceForm}
      handleValueId={handleValueId}
      handleValueSostoyanie={handleValueSostoyanie}
      handleValueComplex={handleValueComplex}
    >
      <h5>Площадь м2</h5>
      <div>
        <InputNumber
          style={styleInput}
          min={1}
          value={sotka[0]}
          placeholder="От"
          onChange={(value) =>
            handleValueSotka([value, sotka ? sotka[1] : sotka[1]])
          }
        />
        <InputNumber
          style={styleInput}
          max={50000}
          value={sotka[1]}
          placeholder="До"
          onChange={(value) =>
            handleValueSotka([sotka ? sotka[0] : sotka[0], value])
          }
        />
      </div>
    </Vtorichka>
  );
};

export default Houses;
