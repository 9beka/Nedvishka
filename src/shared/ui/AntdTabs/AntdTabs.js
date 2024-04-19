import React from "react";
import { Tabs } from "antd";
import { AboutUsTab, OurServices, ReasonsWhy } from "../../../features/ui";

const AntdTabs = ({}) => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "О нас",
      children: <AboutUsTab />,
    },
    {
      key: "2",
      label: "Наши услуги",
      children: <OurServices />,
    },
    {
      key: "3",
      label: "5 причин почему",
      children: <ReasonsWhy />,
    },
  ];
  return <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} />;
};
export default AntdTabs;
