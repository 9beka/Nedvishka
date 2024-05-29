import React from "react";
import { Flex, Select } from "antd";
import s from "./SelectChecboxes.module.scss";
const SelectChecboxes = ({
  data,
  label,
  handleValueSostoyanie,
  handleValueTipNedvishki,
}) => {
  const options = data.map((el) => ({
    value: el.value,
    label: el.name,
  }));

  return (
    <>
      <h5
        style={{
          margin: 0,
        }}
      >
        {label}
      </h5>
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
            onChange={handleValueSostoyanie || handleValueTipNedvishki}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default SelectChecboxes;
