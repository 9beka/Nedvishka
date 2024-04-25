import React from "react";
import s from "./SearchInput.module.scss";
import { Input } from "antd";
const SearchInput = () => {
    const handleValue = (e) => {
        console.log(e.target.value)
    }
  return (
    <>
      <Input
        className={s.input__wrapper}
        placeholder="Введите ключевые слова"
        onChange={handleValue}
      />
    </>
  );
};

export default SearchInput;
