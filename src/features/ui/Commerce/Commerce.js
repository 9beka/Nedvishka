import React from 'react';
import Vtorichka from '../Vtorichka/Vtorichka';
import { InputMinMax } from '../../../shared/ui';
const Commerce = () => {
   return (
      <Vtorichka>
      <h5>Сотка</h5>
      <InputMinMax  min={"мин. м. в кв..."} max={"макс. в кв..."}/>
   </Vtorichka>
   );
};

export default Commerce;