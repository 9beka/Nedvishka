import React from 'react';
import s from "./Elitka.module.scss"
import ModalOfCheckboxes from "../ModalOfCheckboxes/ModalOfCheckboxes";
import {allComplexNames} from "../../../shared/constants";
import Vtorichka from '../Vtorichka/Vtorichka';
const Elitka = () => {
   return (
     <Vtorichka>
      <ModalOfCheckboxes data={allComplexNames } label={"Жилой комплекс"}/> 
     </Vtorichka>
   );
};

export default Elitka;