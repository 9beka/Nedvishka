import React from "react";

const WrapperHoc = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default WrapperHoc;
