import React from "react";
import cls from './FilterForm.module.scss'
import {Collapse, Tabs} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import DomainIcon from "@mui/icons-material/Domain";
import HouseIcon from "@mui/icons-material/House";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ApartmentIcon from "@mui/icons-material/Apartment";
import {Commerce, Elitka, Houses, Novostroika, Vtorichka} from "../index";
import {classNames} from "../../../shared/helpers";
import MediaQuery from "react-responsive";

const FilterForm = () => {
    const optionArr = [
        {
            key: "1",
            label: "Вторичная",
            icon: <DomainIcon/>,
            children: <Vtorichka/>,
        },
        {
            key: "2",
            label: "Элитка",
            icon: <HomeOutlined/>,
            children: <Elitka/>,
        },
        {
            key: "3",
            label: "Новостройки",
            icon: <MapsHomeWorkIcon/>,
            children: <Novostroika/>,
        },
        {
            key: "4",
            label: "Дома и Участки",
            icon: <HouseIcon/>,
            children: <Houses/>,
        },
        {
            key: "5",
            label: "Коммерческая",
            icon: <ApartmentIcon/>,
            children: <Commerce/>,
        },
    ];

    const firstOption = [
        {
            key: "1",
            label: "Вторичная",
            icon: <DomainIcon/>,
            children: <Vtorichka/>,
        },
        {
            key: "2",
            label: "Элитка",
            icon: <HomeOutlined/>,
            children: <Elitka/>,
        },
        {
            key: "3",
            label: "Новостройки",
            icon: <MapsHomeWorkIcon/>,
            children: <Novostroika/>,
        },
    ]

    const secondOption = [
        {
            key: "4",
            label: "Дома и Участки",
            icon: <HouseIcon/>,
            children: <Houses/>,
        },
        {
            key: "5",
            label: "Коммерческая",
            icon: <ApartmentIcon/>,
            children: <Commerce/>,
        },
    ]
    return (
        <section className={classNames(cls.filter)}>


            <MediaQuery minWidth={768}>
                <div className={classNames(cls.filter__wrap)}>
                    <Tabs
                        defaultActiveKey="1"
                        items={optionArr}
                        centered
                    />
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={768}>
                <div className={classNames(cls.filter__wrap)}>
                    <Tabs
                        defaultActiveKey="1"
                        items={optionArr}
                        left
                    />
                </div>
            </MediaQuery>
        </section>
    );
};
export default FilterForm;
