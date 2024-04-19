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
    SelectData,
    nameOfMainDistrict,
} from "../../../shared/constants";
import {classNames} from "../../../shared/helpers";


const Vtorichka = ({children = <SelectChecboxes data={SelectData} label={"Серия"}/>}) => {
    return (
        <div className={classNames(cls.filterButtons)}>
            <div className={classNames(cls.room__wrapper)}>
                <h5>Количество комнат</h5>
                <RoomButton/>
            </div>
            <div className={classNames(cls.room__wrapper)}>
                <h5>Район</h5>
                <ModalOfCheckboxes data={nameOfMainDistrict}/>
            </div>
            <div className={classNames(cls.room__wrapper)}>
                <h5>Стоимость в USD</h5>
                <InputMinMax min={"мин..."} max={"макс..."}/>
            </div>
            <div className={classNames(cls.room__wrapper)}>{children}</div>
            <div className={classNames(cls.room__wrapper)}>
                <h5>Поиск</h5>
                <SearchInput/>
            </div>
            <div className={classNames(cls.room__wrapper)}>
                <h5>Состояние</h5>
                <SelectChecboxes data={stateData}/>
            </div>
            <div className={classNames(cls.room__wrapper)}>
                <SliderFilter/>
            </div>
            <div className={classNames(cls.room__wrapper)}>
                <ShowButton/>
            </div>
        </div>
    );
};

export default Vtorichka;
