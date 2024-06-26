import React, { useState } from "react";
import cls from "./FilterForm.module.scss";
import { Button, Tabs } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import DomainIcon from "@mui/icons-material/Domain";
import HouseIcon from "@mui/icons-material/House";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Commerce, Houses, Novostroika, Vtorichka } from "../index";
import { classNames } from "../../../shared/helpers";
import MediaQuery from "react-responsive";

const FilterForm = ({
  setTabsValue,
  handleValueRooms,
  handleValueDistrict,
  handleValuePrice,
  setDistricts,
  priceForm,
  handleValueId,
  handleValueSostoyanie,
  setPriceForm,
  setValueId,
  setSostoyanie,
  handleValueTipNedvishki,
  handleValueSotka,
  sotka,
  handleValueComplex,
  resetFilters,
}) => {
  const optionArr = [
    {
      key: "1",
      label: "Вторичная",
      icon: <DomainIcon />,
      children: (
        <Vtorichka
          handleValueRooms={handleValueRooms}
          handleValueDistrict={handleValueDistrict}
          handleValuePrice={handleValuePrice}
          priceForm={priceForm}
          handleValueId={handleValueId}
          handleValueSostoyanie={handleValueSostoyanie}
          handleValueComplex={handleValueComplex}
        />
      ),
    },
    {
      key: "2",
      label: "Элитки",
      icon: <HomeOutlined />,
      children: (
        <Vtorichka
          handleValueRooms={handleValueRooms}
          handleValueDistrict={handleValueDistrict}
          handleValuePrice={handleValuePrice}
          priceForm={priceForm}
          handleValueId={handleValueId}
          handleValueSostoyanie={handleValueSostoyanie}
          handleValueComplex={handleValueComplex}
        />
      ),
    },
    {
      key: "3",
      label: "Все",
      icon: <MapsHomeWorkIcon />,
      children: (
        <Novostroika
          handleValueRooms={handleValueRooms}
          handleValueDistrict={handleValueDistrict}
          handleValuePrice={handleValuePrice}
          priceForm={priceForm}
          handleValueId={handleValueId}
          handleValueSostoyanie={handleValueSostoyanie}
          handleValueTipNedvishki={handleValueTipNedvishki}
          handleValueComplex={handleValueComplex}
        />
      ),
    },
    {
      key: "4",
      label: "Дома и участки",
      icon: <HouseIcon />,
      children: (
        <Houses
          handleValueRooms={handleValueRooms}
          handleValueDistrict={handleValueDistrict}
          handleValuePrice={handleValuePrice}
          priceForm={priceForm}
          handleValueId={handleValueId}
          handleValueSostoyanie={handleValueSostoyanie}
          handleValueSotka={handleValueSotka}
          sotka={sotka}
          handleValueComplex={handleValueComplex}
        />
      ),
    },
    {
      key: "5",
      label: "Коммерческая",
      icon: <ApartmentIcon />,
      children: (
        <Commerce
          handleValueRooms={handleValueRooms}
          handleValueDistrict={handleValueDistrict}
          handleValuePrice={handleValuePrice}
          priceForm={priceForm}
          handleValueId={handleValueId}
          handleValueSostoyanie={handleValueSostoyanie}
          handleValueSotka={handleValueSotka}
          sotka={sotka}
          handleValueComplex={handleValueComplex}
        />
      ),
    },
  ];

  const [activeKey, setActiveKey] = useState("3");

  const handleTabsValue = (activeKey) => {
    const label = getLabelByKey(activeKey);
    setTabsValue(label);
    handleValueRooms("");
    setDistricts([]);
    setActiveKey(activeKey);
    setPriceForm([0, 20000000]);
    setValueId("");
    setSostoyanie([]);
  };

  const getLabelByKey = (key) => {
    const option = optionArr.find((item) => item.key === key);
    return option ? option.label : null;
  };

  return (
    <>
      <section className={classNames(cls.filter)}>
        <MediaQuery minWidth={768}>
          <div className={classNames(cls.filter__wrap)}>
            <Tabs
              defaultActiveKey={activeKey}
              items={optionArr}
              centered
              onChange={handleTabsValue}
            />
            <Button onClick={resetFilters} style={{textAlign:"center" , margin: "10px 0"}} type="primary">
              Сбросить фильтры
            </Button>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={768}>
          <div className={classNames(cls.filter__wrap)}>
            <Tabs
              defaultActiveKey={activeKey}
              items={optionArr}
              left
              onChange={handleTabsValue}
            />
            <Button onClick={resetFilters} type="primary">
              Сбросить фильтры  
            </Button>
          </div>
        </MediaQuery>
      </section>
    </>
  );
};
export default FilterForm;
