import React from "react";
import { Tooltip } from "antd";

const AntdTooltip = ({ children, placement, title }) => {
  return (
    <Tooltip placement={placement} title={title}>
      {children}
    </Tooltip>
  );
};

export default AntdTooltip;
