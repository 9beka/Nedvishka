import React from 'react';
import Vtorichka from '../Vtorichka/Vtorichka';
import { InputMinMax } from '../../../shared/ui';

const Houses = () => {
   return (
      <Vtorichka>
         <h5>Сотка</h5>
         <InputMinMax  min={"от..."} max={"до..."}/>
      </Vtorichka>
   );
};

export default Houses;