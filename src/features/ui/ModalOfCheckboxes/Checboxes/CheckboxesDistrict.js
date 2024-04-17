import * as React from "react";
import { Input } from "antd";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  sortSouthDistricts,
  westDistricts,
  centreCity,
  northDistricts,
  nameOfMainDistrict,
} from "../../../../shared/constants";
import s from "./CheckboxesDistrict.module.scss";
import HocWrapperCheckbox from "./HocWrapperCheckbox";
export default function CheckboxesDistrict() {

  const [checked, setChecked] = React.useState(nameOfMainDistrict.map(district => 
    [false, ...Array(district.childOfDistrict.length).fill(false)]
));

const handleChange1 = (mainIndex, childIndex = null) => {
  const newChecked = [...checked];
  if (childIndex === null) {
      // Toggle main district checkbox
      const newState = !newChecked[mainIndex][0];
      newChecked[mainIndex][0] = newState;
      newChecked[mainIndex].fill(newState, 1);  // Fill child checkboxes with the same state
  } else {
      // Toggle specific child checkbox
      newChecked[mainIndex][childIndex + 1] = !newChecked[mainIndex][childIndex + 1];
  }
  setChecked(newChecked);
};
  const handleChange2 = (event) => {
    // setChecked([event.target.checked, checked[1]]);
    const searchValue = event.target.value;
    // console.log(searchValue);
    const AllData = [
      ...sortSouthDistricts,
      ...westDistricts,
      ...centreCity,
      ...northDistricts,
    ];

    const filteredData = AllData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(filteredData);
  };
  return (
    <>
      <div className={s.CheckboxesDistrict__wrapper}>
        <Input onChange={handleChange2} placeholder="Искать" variant="filled" />

        {nameOfMainDistrict.map((el, mainIndex) => {                  
          return (
            <>
              <FormControlLabel
                label={el.nameOfDistrict} 
                control={
                  <Checkbox
                  checked={checked[mainIndex][0]}
                  onChange={() => handleChange1(mainIndex)}
                  />
                }
              />
              <HocWrapperCheckbox>
                {el.childOfDistrict.map((child, idx) => {
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
        })}
      </div>
    </>
  );
}
