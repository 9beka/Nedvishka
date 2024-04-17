import React from "react";
import s from "./Vtorichka.module.scss";
import ModalOfCheckboxes from "../ModalOfCheckboxes/ModalOfCheckboxes";
import {
  InputMinMax,
  RoomButton,
  SearchInput,
  SelectChecboxes,
  ShowButton,
  SliderFilter,
} from "../../../shared/ui";
import { stateData, SelectData } from "../../../shared/constants";
const Vtorichka = () => {
  return (
    <div className={s.filterButtons}>
      <div className="container">
        <div className="row">
          <div className="col-3">
          <h5>Количество комнат</h5>
            <RoomButton />
          </div>
          <div className="col-3">
            <h5>Район</h5>
            <ModalOfCheckboxes />
          </div>
          <div className="col-3">
            <h5>Стоимость в USD</h5>
            <InputMinMax/>
          </div>
          <div className="col-3">
            <h5>Серия</h5>
            <SelectChecboxes data={SelectData} />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h5>Поиск</h5>
            <SearchInput />
          </div>
          <div className="col-3">
            <h5>Состояние</h5>
            <SelectChecboxes data={stateData} />
          </div>
          <div className="col-3">
            <SliderFilter />
          </div>
          <div className="col-3">
            <ShowButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vtorichka;
