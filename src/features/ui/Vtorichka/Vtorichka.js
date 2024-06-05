import React from "react";
import cls from "./Vtorichka.module.scss";
import ModalOfCheckboxes from "../ModalOfCheckboxes/ModalOfCheckboxes";
import {
  InputMinMax,
  RoomButton,
  SearchInput,
  SelectChecboxes,
  ShowButton,
  SliderFilter,
} from "../../../shared/ui";
import {
  stateData,
  nameOfMainDistrict,
  allComplexNames,
} from "../../../shared/constants";
import { classNames } from "../../../shared/helpers";

const Vtorichka = ({
  handleValueRooms,
  handleValueDistrict,
  handleValuePrice,
  priceForm,
  handleValueId,
  handleValueSostoyanie,
  children,
  handleValueComplex,
}) => {
  return (
    <div className={classNames(cls.filterButtons)}>
      <div className={classNames(cls.room__wrapper)}>
        <h5>Количество комнат</h5>
        <RoomButton handleValueRooms={handleValueRooms} />
      </div>
      <div className={classNames(cls.room__wrapper)}>
        <h5>Район</h5>
        <ModalOfCheckboxes
          data={nameOfMainDistrict}
          handleValueDistrict={handleValueDistrict}
        />
      </div>
      <div className={classNames(cls.room__wrapper)}>
        <h5>Жилые комплексы</h5>
        <ModalOfCheckboxes
          data={allComplexNames}
          handleValueDistrict={handleValueComplex}
        />
      </div>
      <div className={classNames(cls.room__wrapper)}>
        <h5>Стоимость в SOM</h5>
        <InputMinMax
          handleValuePrice={handleValuePrice}
          priceForm={priceForm}
        />
      </div>
      <div className={classNames(cls.room__wrapper)}>{children}</div>
      <div className={classNames(cls.room__wrapper)}>
        <h5>Поиск</h5>
        <SearchInput handleValueId={handleValueId} />
      </div>
      <div className={classNames(cls.room__wrapper)}>
        <h5>Состояние</h5>
        <SelectChecboxes
          data={stateData}
          handleValueSostoyanie={handleValueSostoyanie}
        />
      </div>
      <div className={classNames(cls.room__wrapper)}>
        <SliderFilter
          handleValuePrice={handleValuePrice}
          priceForm={priceForm}
        />
      </div>
      <div className={classNames(cls.room__wrapper)}>
        <ShowButton />
      </div>
    </div>
  );
};

export default Vtorichka;
