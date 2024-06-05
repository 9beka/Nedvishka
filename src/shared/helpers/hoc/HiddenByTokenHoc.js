import React from 'react';
import { useSelector } from 'react-redux';
const HiddenByTokenHoc = ({children}) => {
   const {token} = useSelector((state)=>state.auth);
  
   return (
    <>
        {token && <div className='HiddenByTokenHoc'>
            {children}
         </div>}
    </>
   );
};

export default HiddenByTokenHoc;