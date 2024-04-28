import React, {useLayoutEffect, useState} from "react";
import { Input } from "antd";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import s from "./CheckboxesDistrict.module.scss";

import {gsap} from "gsap";


export default function CheckboxesDistrict({ data }) {
  const [filtredData, setFiltredData] = useState([]);
  const [checked, setChecked] = useState(
    data.map((district) => [
      false,
      ...Array(district.childProps.length).fill(false),
    ])
  );

  const handleChange1 = (mainIndex, childIndex = null, name) => {
    console.log(name)
    const newChecked = [...checked];
    if (childIndex === null) {
      // Если изменение для главного чекбокса, переключаем все дочерние
      const newState = !newChecked[mainIndex][0];
      newChecked[mainIndex][0] = newState;
      newChecked[mainIndex].fill(newState, 1); // Заполняем все дочерние чекбоксы состоянием главного
    } else {
      // Если изменение для одного из дочерних чекбоксов
      newChecked[mainIndex][childIndex + 1] =
        !newChecked[mainIndex][childIndex + 1];

      // Проверяем, выбраны ли все дочерние элементы после изменения
      const allChildrenChecked = newChecked[mainIndex]
        .slice(1)
        .every((status) => status === true);
      // Устанавливаем состояние главного чекбокса в true, если все дочерние выбраны
      newChecked[mainIndex][0] = allChildrenChecked;

      // Если не все дочерние элементы выбраны, снимаем выбор с главного чекбокса
      if (!allChildrenChecked) {
        newChecked[mainIndex][0] = false;
      }
    }
    setChecked(newChecked);
  };
  const handleInput = (event) => {
    const searchValue = event.target.value.toLowerCase(); // Преобразуем в нижний регистр один раз
    gsap.fromTo('.form-checkbox', {opacity: 0, x: 25}, {opacity: 1, x: 0})

    // Фильтруем каждый элемент в массиве nameOfMainDistrict
    const searchData = data.flatMap(item => {
        // Фильтрация по дочерним элементам для каждого района
        const filteredChildren = item.childProps.filter(child => 
            child.name.toLowerCase().includes(searchValue)
        );
        // Возвращаем новый объект, если есть фильтрованные дочерние элементы
        return filteredChildren.length > 0 ? [{...item, childProps: filteredChildren}] : [];
    });

    setFiltredData(searchData);
};

  useLayoutEffect(() => {


  }, []);


  return (
    <>
      <div className={s.CheckboxesDistrict__wrapper}>
        <Input onChange={handleInput} placeholder="Искать" variant="filled" />

        {(filtredData.length === 0 ? data : filtredData).map(
          (el, mainIndex) => {
            return (
              <div className={'form-checkbox'}>
                <FormControlLabel
                  label={el.mainProps}
                  className={`${s.CheckboxesDistrict__Label} form-checkbox` }
                  control={
                    <Checkbox
                      checked={checked[mainIndex][0]}
                      onChange={() => handleChange1(mainIndex,undefined,el.mainProps)}
                    />
                  }
                />
                <div className="row gy-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                  {el.childProps.map((child, idx) => {
                    return (
                      <FormControlLabel
                        key={idx}
                        className="col"
                        label={child.name}
                        control={
                          <Checkbox
                            checked={checked[mainIndex][idx + 1]}
                            onChange={() => handleChange1(mainIndex, idx,child.name)}
                          />
                        }
                      />
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
