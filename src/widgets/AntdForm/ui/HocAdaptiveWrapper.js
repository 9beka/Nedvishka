import React from 'react';
import cls from "./AntdForm.module.scss"
const HocAdaptiveWrapper = ({ children , screenWidth }) => {
   return (
      <div
      className={cls.AntdForm__wrapper}
      style={{
        gridTemplateColumns: `${
          screenWidth <= 768 ? "repeat(1,1fr)" : "repeat(2,1fr)"
        }`,
      }}
    >{children}</div>
   );
};
export default HocAdaptiveWrapper;