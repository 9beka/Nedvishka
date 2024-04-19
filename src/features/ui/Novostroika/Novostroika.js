import React from 'react';
import { Vtorichka } from '..';
import { SelectChecboxes } from '../../../shared/ui';
import { typeNedvishki } from '../../../shared/constants';

const Novostroika = () => {
   return (
      <Vtorichka>
         <SelectChecboxes data={typeNedvishki} label={"Тип недвижимости"}/>
      </Vtorichka>
   );
};

export default Novostroika;