import React from "react";
import { Flex, Select } from "antd";
import s from "./SelectChecboxes.module.scss";
const   SelectChecboxes = ({ data ,label}) => {
  const options = data.map((el) => ({
    value: el.value,
    label: el.name,
  }));

  const handleValue = (e) => {
      console.log(e)
  }

  return (
  <>
      <h5 style={{
          margin:0
      }}>{label}</h5>
      <Flex gap={12} vertical>
        <Flex gap={8}>
          <Select
            mode="tags"
            placeholder="Выбрать"
            style={{
              flex: 1,
              width: "100%",
            }}
            maxTagCount={"responsive"}
            className={s.customSelect}
            options={options}
            onChange={handleValue}
          />
        </Flex>
      </Flex>
  </>
  );
};

export default SelectChecboxes;
