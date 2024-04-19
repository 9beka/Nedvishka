import React, {useLayoutEffect} from "react";
import s from "./FilterForm.module.scss";
import { Tabs } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import DomainIcon from "@mui/icons-material/Domain";
import HouseIcon from "@mui/icons-material/House";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Commerce, Elitka, Houses, Novostroika, Vtorichka } from "../index";
import gsap from "gsap";

const FilterForm = () => {

  useLayoutEffect(() => {
    gsap.fromTo('.filter-gsap', {opacity:0, x:500},{opacity:1,x:0})
  },[])

  const optionArr = [
    {
      key: "1",
      label: "Вторичная",
      icon: <DomainIcon />,
      children: <Vtorichka />,
    },
    {
      key: "2",
      label: "Элитка",
      icon: <HomeOutlined />,
      children: <Elitka/>,
    },
    {
      key: "3",
      label: "Новостройки",
      icon: <MapsHomeWorkIcon />,
      children: <Novostroika />,
    },
    {
      key: "4",
      label: "Дома и Участки",
      icon: <HouseIcon />,
      children: <Houses />,
    },
    {
      key: "5",
      label: "Коммерческая",
      icon: <ApartmentIcon />,
      children: <Commerce />,
    },
  ];
  console.log(optionArr);
  return (
    <div className={`${s.filters} filter-gsap`}>
      <div className={s.filters__btn}>
        <div className="wrapper">
          <Tabs
            defaultActiveKey="1"
            items={optionArr}
            className={s.transparent_button}
            centered
          />
        </div>
      </div>
    </div>
  );
};
export default FilterForm;
