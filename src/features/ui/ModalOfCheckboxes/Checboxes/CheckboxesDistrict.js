import React, { useState } from "react";
import { Input } from "antd";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import s from "./CheckboxesDistrict.module.scss";
import HocWrapperCheckbox from "./HocWrapperCheckbox";
export default function CheckboxesDistrict({ data }) {
  const [filtredData, setFiltredData] = useState([]);
  const [checked, setChecked] = useState(
    data.map((district) => [
      false,
      ...Array(district.childProps.length).fill(false),
    ])
  );

  const handleChange1 = (mainIndex, childIndex = null) => {
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
  const handleChange2 = (event) => {
    const searchValue = event.target.value.toLowerCase(); // Преобразуем в нижний регистр один раз

    // Фильтруем каждый элемент в массиве nameOfMainDistrict
    const searchData = data.flatMap(item => {
        // Фильтрация по дочерним элементам для каждого района
        const filteredChildren = item.childProps.filter(child => 
            child.name.toLowerCase().includes(searchValue)
        );
        // Возвращаем новый объект, если есть фильтрованные дочерние элементы
        return filteredChildren.length > 0 ? [{...item, childProps: filteredChildren}] : [];
    });

    console.log(searchData);
    setFiltredData(searchData);
};
  return (
    <>
      <div className={s.CheckboxesDistrict__wrapper}>
        <Input onChange={handleChange2} placeholder="Искать" variant="filled" />

        {(filtredData.length === 0 ? data : filtredData).map(
          (el, mainIndex) => {
            return (
              <>
                <FormControlLabel
                  label={el.mainProps}
                  className={s.CheckboxesDistrict__Label}
                  control={
                    <Checkbox
                      checked={checked[mainIndex][0]}
                      onChange={() => handleChange1(mainIndex)}
                    />
                  }
                />
                <HocWrapperCheckbox>
                  {el.childProps.map((child, idx) => {
                    return (
                      <FormControlLabel
                        key={idx}
                        className="col-3"
                        label={child.name}
                        control={
                          <Checkbox
                            checked={checked[mainIndex][idx + 1]}
                            onChange={() => handleChange1(mainIndex, idx)}
                          />
                        }
                      />
                    );
                  })}
                </HocWrapperCheckbox>
              </>
            );
          }
        )}
      </div>
    </>
  );
}
