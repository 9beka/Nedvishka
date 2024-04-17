import React from "react";
import s from "./SearchInput.module.scss";
import { Input } from "antd";
const SearchInput = () => {
  return (
    <>
      <Input
        className={s.input__wrapper}
        placeholder="Введите ключевые слова"
      />
    </>
  );
};

export default SearchInput;
