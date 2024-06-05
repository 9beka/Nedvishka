import React from "react";
import { Vtorichka } from "..";
import { SelectChecboxes } from "../../../shared/ui";
import { typeNedvishki } from "../../../shared/constants";

const Novostroika = ({
  handleValueRooms,
  handleValueDistrict,
  handleValuePrice,
  priceForm,
  handleValueId,
  handleValueSostoyanie,
  handleValueTipNedvishki,
  handleValueComplex,
}) => {
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
      <SelectChecboxes
        handleValueTipNedvishki={handleValueTipNedvishki}
        data={typeNedvishki}
        label={"Тип недвижимости"}
      />
    </Vtorichka>
  );
};

export default Novostroika;
