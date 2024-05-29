import React from "react";
import s from "./SearchInput.module.scss";
import { Input } from "antd";
const SearchInput = ({ handleValueId }) => {
  return (
    <>
      <Input
        className={s.input__wrapper}
        placeholder="Введите ключевые слова"
        onChange={handleValueId}
      />
    </>
  );
};

export default SearchInput;
